#CALL FROM APP.py WHEN USER WANTS TO PUSH TO SIMPLYLOG
#SHOULD IMPORT THE ATTACHMENTS, NOTES, PATH, ECT. AND PARSE THE PUSH

import os
import json
import uuid
from datetime import datetime, timezone, timedelta

import requests


API_URL = "https://api.ylm.co.il/api/Events"


def utc_now_strings():
    now = datetime.now(timezone.utc) - timedelta(hours=7)
    start_date = now.isoformat(timespec="milliseconds").replace("+00:00", "Z")
    start_time = now.replace(microsecond=0).isoformat().replace("+00:00", "Z")
    return start_date, start_time


def create_ylm_incident(selected_path, notes, attachment_names):
    bearer_token = os.environ.get("YLM_BEARER_TOKEN", "")

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

    if not bearer_token:
        return {
            "ok": False,
            "status_code": 500,
            "body": {
                "error": "Missing YLM_BEARER_TOKEN environment variable",
                "payload_preview": payload,
            },
        }

    headers = {
        "Authorization": f"Bearer {bearer_token}",
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Origin": "https://spuntech-rx.ylm.co.il",
        "Referer": "https://spuntech-rx.ylm.co.il/",
    }

    response = requests.post(
        API_URL,
        headers=headers,
        json=payload,
        timeout=60,
    )

    try:
        body = response.json()
    except Exception:
        body = {"raw": response.text}

    return {
        "ok": response.ok,
        "status_code": response.status_code,
        "body": body,
    }