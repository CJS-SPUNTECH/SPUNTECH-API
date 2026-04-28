import os
import json
import uuid
from datetime import datetime, timezone, timedelta
import requests # type: ignore
from flask import Flask, request, jsonify # type: ignore
from dotenv import load_dotenv # type: ignore
from werkzeug.utils import secure_filename # type: ignore
from flask_cors import CORS # type: ignore

load_dotenv()

app = Flask(__name__)
CORS(app, origins=[
    "https://spuntech-api.pages.dev"
])

API_URL = "https://api.ylm.co.il/api/Events"
BEARER_TOKEN = os.environ.get("YLM_BEARER_TOKEN", "")
print("TOKEN LOADED:", bool(BEARER_TOKEN))


def utc_now_strings():
    now = datetime.now(timezone.utc) - timedelta(hours=7)
    start_date = now.isoformat(timespec="milliseconds").replace("+00:00", "Z")
    start_time = now.replace(microsecond=0).isoformat().replace("+00:00", "Z")
    return start_date, start_time


@app.get("/health")
def health():
    return jsonify({"ok": True})

@app.post("/create-ticket")
def create_ticket():
    try:
        selected_path_raw = request.form.get("selectedPath", "[]")
        notes = request.form.get("notes", "")

        print("selectedPath raw:", selected_path_raw)
        print("notes:", notes)

        try:
            selected_path = json.loads(selected_path_raw)
            if not isinstance(selected_path, list):
                raise ValueError("selectedPath must be a JSON list")
        except Exception as exc:
            return jsonify({"ok": False, "error": f"Invalid selectedPath: {exc}"}), 400

        uploaded_files = request.files.getlist("attachments")
        print("file count:", len(uploaded_files))

        file_summaries = []
        attachment_names = []

        for f in uploaded_files:
            filename = secure_filename(f.filename or "upload.bin")

            file_summaries.append({
                "name": filename,
            })

            attachment_names.append(filename)

        start_date, start_time = utc_now_strings()
        description = " > ".join(selected_path) if selected_path else "No selection"
        if notes:
            description += f"\n\n{notes}"

        payload = {
            "__command_id": "CreateNewIncident",
            "__isUploading": False,
            "Attachments": attachment_names,
            "CategoryId": 99,
            "Description": description,
            "LocationId": 9,
            "LocationType": "SiteGeoGroup",
            "Properties": [],
            "ReferenceId": str(uuid.uuid4()),
            "RenewCheckpoint": None,
            "RenewDays": None,
            "SeverityId": 31,
            "StartDate": start_date,
            "StartTime": start_time,
        }

        if not BEARER_TOKEN:
            return jsonify({
                "ok": False,
                "error": "Missing YLM_BEARER_TOKEN environment variable",
                "received_files": file_summaries,
                "payload_preview": payload,
            }), 500

        headers = {
            "Authorization": f"Bearer {BEARER_TOKEN}",
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Origin": "https://spuntech-rx.ylm.co.il",
            "Referer": "https://spuntech-rx.ylm.co.il/",
        }

        print("About to call YLM")
        print("payload attachment count:", len(payload["Attachments"]))
        print("payload description:", payload["Description"])

        ylm_response = requests.post(
            API_URL,
            headers=headers,
            json=payload,
            timeout=60
        )

        print("REQUEST URL:", API_URL)
        print("REQUEST HEADERS:", headers)
        print("REQUEST JSON:")
        print(json.dumps(payload, indent=2)[:8000])

        print("STATUS:", ylm_response.status_code)
        print("RESPONSE HEADERS:", dict(ylm_response.headers))
        print("RESPONSE TEXT:", repr(ylm_response.text))

        try:
            ylm_body = ylm_response.json()
        except Exception:
            ylm_body = {"raw": ylm_response.text}

        return jsonify({
            "ok": ylm_response.ok,
            "status_code": ylm_response.status_code,
            "received_files": file_summaries,
            "ylm_response": ylm_body,
        }), ylm_response.status_code

    except Exception as exc:
        print("BACKEND ERROR:", repr(exc))
        return jsonify({"ok": False, "error": str(exc)}), 500


if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)