import snap7

L5PACK_PLC = snap7.client.Client()

L5PACK_IP = "192.168.15.50"
L5PACK_PLC.connect(L5PACK_IP, 0, 1)

REQUEST = False

if REQUEST:

    print("request made")
    
    L5PACK_BYPASS_BYTE = L5PACK_PLC.mb_read(11, 1)
    TOP_CB_WRAPPER_1_BYPASS_STATUS = snap7.util.get_bool(L5PACK_BYPASS_BYTE, 0, 5)
    TOP_CB_WRAPPER_2_BYPASS_STATUS = snap7.util.get_bool(L5PACK_BYPASS_BYTE, 0, 6)

    print(f"Wrapper 1 BYPASSED: {TOP_CB_WRAPPER_1_BYPASS_STATUS}")
    print(f"Wrapper 2 BYPASSED: {TOP_CB_WRAPPER_2_BYPASS_STATUS}")