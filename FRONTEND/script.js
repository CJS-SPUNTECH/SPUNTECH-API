const flow = {
    //MAIN PAGE
    start: {
    title: "SYSTEM",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "LINE-4", value: "LINE-4", next: "l4" }              
        ]},{
        layout: "stack",
        options: [
            { label: "LINE-5", value: "LINE-5", next: "l5" }              
        ]},{
        layout: "stack",
        options: [
            { label: "MAIN BUILDING", value: "MAIN BUILDING", next: "fac" }              
        ]},{
        layout: "stack",
        options: [
            { label: "ENERGY CENTER", value: "ENERGY CENTER", next: "ec" }              
        ]},{
        layout: "stack",
        options: [
            { label: "EXTERIOR", value: "EXTERIOR", next: "ext" }              
        ]},{
        layout: "stack",
        options: [
            { label: "SUGGEST DEV CHANGE", value: "SUGGEST DEV CHANGE", next: "details" }              
        ]},
    ]},

    //DIRECTORY PAGES
    l4: {
    title: "AREA",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "BLENDING", value: "BLENDING", next: "l4blend" }             
        ]},{
        layout: "stack",
        options: [
            { label: "OPENING", value: "OPENING", next: "l4open" }              
        ]},{
        layout: "stack",
        options: [
            { label: "CARDING", value: "CARDING", next: "l4card" }             
        ]},{
        layout: "stack",
        options: [
            { label: "ENTANGLEMENT", value: "ENTANGLEMENT", next: "l4ent" }            
        ]},{
        layout: "stack",
        options: [
            { label: "DRYING", value: "DRYING", next: "l4dry" }            
        ]},{
        layout: "stack",
        options: [
            { label: "PRINTING", value: "PRINTING", next: "l4print" }
        ]},{
        layout: "stack",
        options: [
            { label: "FINISHING", value: "FINISHING", next: "l4fin" }
        ]},{
        layout: "stack",
        options: [
            { label: "INSPECTION", value: "INSPECTION", next: "l4insp" }             
        ]},{
        layout: "stack",
        options: [
            { label: "WINDING", value: "WINDING", next: "l4wind" }             
        ]},{
        layout: "stack",
        options: [
            { label: "SLITTING", value: "SLITTING", next: "l4slit" }            
        ]},{
        layout: "stack",
        options: [
            { label: "PACKAGING", value: "PACKAGING", next: "l4pack" }            
        ]},{
        layout: "stack",
        options: [
            { label: "REWORK", value: "REWORK", next: "l4doc" }            
        ]},{
        layout: "stack",
        options: [
            { label: "FILTRATION", value: "FILTRATION", next: "l4filt" }           
        ]}
    ]},
    l5: {
    title: "AREA",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "BLENDING", value: "BLENDING", next: "l5blend" }             
        ]},{
        layout: "stack",
        options: [
            { label: "OPENING", value: "OPENING", next: "l5open" }              
        ]},{
        layout: "stack",
        options: [
            { label: "CARDING", value: "CARDING", next: "l5card" }             
        ]},{
        layout: "stack",
        options: [
            { label: "ENTANGLEMENT", value: "ENTANGLEMENT", next: "l5ent" }            
        ]},{
        layout: "stack",
        options: [
            { label: "DRYING", value: "DRYING", next: "l5dry" }            
        ]},{
        layout: "stack",
        options: [
            { label: "FINISHING", value: "FINISHING", next: "l5fin" }
        ]},{
        layout: "stack",
        options: [
            { label: "INSPECTION", value: "INSPECTION", next: "l5insp" }             
        ]},{
        layout: "stack",
        options: [
            { label: "WINDING", value: "WINDING", next: "l5wind" }             
        ]},{
        layout: "stack",
        options: [
            { label: "PACKAGING", value: "PACKAGING", next: "l5pack" }            
        ]},{
        layout: "stack",
        options: [
            { label: "REWORK", value: "REWORK", next: "l5doc" }            
        ]},{
        layout: "stack",
        options: [
            { label: "FILTRATION", value: "FILTRATION", next: "l5filt" }           
        ]}
    ]},
    fac: {
    title: "AREA",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "HVAC", value: "HVAC", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "UTILITIES", value: "UTILITIES", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "LIGHTING", value: "LIGHTING", next: "details" }
        ]}
    ]},
    ec: {
    title: "AREA",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "HVAC", value: "HVAC", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "UTILITIES", value: "UTILITIES", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "LIGHTING", value: "LIGHTING", next: "details" }
        ]}
    ]},
    ext: {
    title: "AREA",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "HVAC", value: "HVAC", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "UTILITIES", value: "UTILITIES", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "LIGHTING", value: "LIGHTING", next: "details" }
        ]}
    ]},

    //LINE 4 PAGES
    l4blend: {
    title: "EQUIPMENT",
    groups: [
        {
        heading: "TABLES",
        layout: "grid-4",
        options: [
            { label: "1", value: "TABLE-1", next: "table" },
            { label: "2", value: "TABLE-2", next: "table" },
            { label: "3", value: "TABLE-3", next: "table" },
            { label: "4", value: "TABLE-4", next: "table" },
            { label: "5", value: "TABLE-5", next: "table" },
            { label: "6", value: "TABLE-6", next: "table" },
            { label: "7", value: "TABLE-7", next: "table" },
            { label: "8", value: "TABLE-8", next: "table" }
        ]},{
        heading: "MIXERS",
        layout: "grid-3",
        options: [
            { label: "1", value: "MIXER-1", next: "mixer" },
            { label: "2", value: "MIXER-2", next: "mixer" },
            { label: "3", value: "MIXER-3", next: "mixer" }
        ]},{
        heading: "TRANSFER FANS",
        layout: "grid-4",
        options: [
            { label: "1", value: "TF-1", next: "fan" },
            { label: "2", value: "TF-2", next: "fan" },
            { label: "3", value: "TF-3", next: "fan" },
            { label: "4", value: "TF-4", next: "fan" },
        ]},{
        layout: "stack",
        options: [
            { label: "BLENDING BELT", value: "BLENDING BELT", next: "belt" }
        ]},{
        layout: "stack",
        options: [
            { label: "WILLOW", value: "WILLOW", next: "willow" }
        ]},{
        layout: "stack",
        options: [
            { label: "RECYCLER", value: "RECYCLER", next: "recycle" }
        ]},{
        layout: "stack",
        options: [
            { label: "BALER", value: "BALER", next: "details" }
        ]}
    ]},
    l4open: {
    title: "EQUIPMENT",
    groups: [
        {
        heading: "LOPTEX UNITS",
        layout: "grid-3",
        options: [
            { label: "1", value: "LOPTEX-1", next: "details" },
            { label: "2", value: "LOPTEX-2", next: "details" },
            { label: "3", value: "LOPTEX-3", next: "details" }
        ]},{
        heading: "FINE OPENERS",
        layout: "grid-3",
        options: [
            { label: "1", value: "FO-1", next: "fo" },
            { label: "2", value: "FO-2", next: "fo" },
            { label: "3", value: "FO-3", next: "fo" }
        ]},{
        heading: "FIBER SILOS",
        layout: "grid-3",
        options: [
            { label: "1", value: "FS5-1", next: "fs" },
            { label: "2", value: "FS5-2", next: "fs" },
            { label: "3", value: "FS5-3", next: "fs" }
        ]},{
        heading: "FBK UNITS",
        layout: "grid-3",
        options: [
            { label: "1", value: "FBK-1", next: "fbk" },
            { label: "2", value: "FBK-2", next: "fbk" },
            { label: "3", value: "FBK-3", next: "fbk" }
        ]},{
        heading: "AIR HANDLING UNITS",
        layout: "grid-2",
        options: [
            { label: "1", value: "AHU-1", next: "details" },
            { label: "2", value: "AHU-2", next: "details" }
        ]}
    ]},
    l4card: {
    title: "EQUIPMENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "FOR", value: "FOR", next: "for" }
        ]},{
        layout: "stack",
        options: [
            { label: "EWKL", value: "EWKL", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "EK-150", value: "EK-150", next: "details" } 
        ]},{
        layout: "stack",
        options: [
            { label: "COLLECTION BELT", value: "COLLECTION BELT", next: "belt" } 
        ]}
    ]},
    l4ent: {
    title: "EQUIPMENT",
    groups: [
        {
        heading: "HIGH PRESSURE PUMPS",
        layout: "grid-3",
        options: [
            { label: "62-2", value: "HPP-62-2", next: "pump" },
            { label: "62-3", value: "HPP-62-3", next: "pump" },
            { label: "62-4", value: "HPP-62-4", next: "pump" },
            { label: "63-2", value: "HPP-63-2", next: "pump" },
            { label: "64-2", value: "HPP-64-2", next: "pump" },
            { label: "65-2", value: "HPP-65-2", next: "pump" }
        ]},{
        heading: "GV PUMPS",
        layout: "grid-4",
        options: [
            { label: "1", value: "GV-1", next: "fan" },
            { label: "2", value: "GV-2", next: "fan" },
            { label: "3", value: "GV-3", next: "fan" },
            { label: "4", value: "GV-4", next: "fan" }
        ]},{
        layout: "stack",
        options: [
            { label: "PERFOJET", value: "PERFOJET", next: "details" }
        ]}
    ]},
    l4dry: {
    title: "EQUIPMENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "DRYER", value: "DRYER", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "FUEL DELIVERY", value: "FUEL DELIVERY", next: "details" } 
        ]}
    ]},
    l4print: {
    title: "EQUIPMENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "STORK", value: "STORK", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "PASTE DELIVERY", value: "PASTE DELIVERY", next: "details" } 
        ]}
    ]},
    l4fin: {
    title: "EQUIPMENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "CALENDAR", value: "CALENDAR", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "WEB SUCTION", value: "WEB SUCTION", next: "details" } 
        ]}
    ]},
    l4insp: {
    title: "EQUIPMENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "AIS", value: "AIS", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "EVS", value: "EVS", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "NDC", value: "NDC", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "METAL DETECTOR", value: "METAL DETECTOR", next: "details" } 
        ]}
    ]},
    l4wind: {
    title: "EQUIPMENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "WINDER", value: "WINDER", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "BUFFER ARMS", value: "BUFFER ARMS", next: "details" } 
        ]},{
        layout: "stack",
        options: [
            { label: "SHAFT CRANE", value: "SHAFT CRANE", next: "details" } 
        ]}
    ]},
    l4slit: {
    title: "EQUIPMENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "SLITTER", value: "SLITTER", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "CORE CUTTER", value: "CORE CUTTER", next: "details" } 
        ]},{
        layout: "stack",
        options: [
            { label: "KNIVES", value: "KNIVES", next: "details" } 
        ]}
    ]},
    l4pack: {
    title: "EQUIPMENT",
    groups: [
        {
        heading: "TROLLIES",
        layout: "grid-3",
        options: [
            { label: "400", value: "TR-400", next: "details" },
            { label: "125", value: "TR-125", next: "details" },
            { label: "110", value: "TR-110", next: "details" }
        ]},{
        heading: "STACKING UNITS",
        layout: "grid-4",
        options: [
            { label: "A", value: "STACK-A", next: "details" },
            { label: "B", value: "STACK-B", next: "details" },
            { label: "C", value: "STACK-C", next: "details" },
            { label: "D", value: "STACK-D", next: "details" }
        ]},{
        heading: "TRANSFER CARS",
        layout: "grid-2",
        options: [
            { label: "1", value: "TRC-1", next: "details" },
            { label: "2", value: "TRC-2", next: "details" }
        ]},{
        heading: "WAREHOUSE PLATFORMS",
        layout: "grid-3",
        options: [
            { label: "A", value: "PLAT-A", next: "details" },
            { label: "B", value: "PLAT-B", next: "details" },
            { label: "C", value: "PLAT-C", next: "details" },
            { label: "D", value: "PLAT-D", next: "details" },
            { label: "E", value: "PLAT-E", next: "details" },
            { label: "F", value: "PLAT-F", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "ROBOT", value: "ROBOT", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "UPENDER", value: "UPENDER", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "WRAPPER", value: "WRAPPER", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "LABEL PRINTER", value: "LABEL PRINTER", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "DEFECT CONVEYOR", value: "DEFECT CONVEYOR", next: "details" }
        ]},
    ]},
    l4doc: {
    title: "EQUIPMENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "BIG DOCTOR", value: "BIG DOCTOR", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "CORE CUTTER", value: "CORE CUTTER", next: "details" }
        ]}
    ]},
    l4filt: {
    title: "EQUIPMENT",
    groups: [
        {
        heading: "ST TANKS",
        layout: "grid-2",
        options: [
            { label: "1", value: "ST-1", next: "details" },
            { label: "2", value: "ST-2", next: "details" }
        ]},{
        heading: "RT TANKS",
        layout: "grid-3",
        options: [
            { label: "1", value: "RT-1", next: "details" },
            { label: "2", value: "RT-2", next: "details" },
            { label: "3", value: "RT-3", next: "details" }
        ]},{
        heading: "SLOW SAND FILTERS",
        layout: "grid-4",
        options: [
            { label: "1", value: "SSF-1", next: "details" },
            { label: "2", value: "SSF-2", next: "details" },
            { label: "3", value: "SSF-3", next: "details" },
            { label: "4", value: "SSF-4", next: "details" },
            { label: "5", value: "SSF-5", next: "details" },
            { label: "6", value: "SSF-6", next: "details" },
            { label: "R", value: "SSF-R", next: "details" }
        ]},{
        heading: "FLOATATION CELLS",
        layout: "grid-2",
        options: [
            { label: "1", value: "FL-1", next: "details" },
            { label: "R", value: "FL-R", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "DT-1", value: "DT-1", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "PIT", value: "PIT", next: "details" }
        ]}
    ]},
        
    //LINE 5 PAGES
    l5blend: {
    title: "EQUIPMENT",
    groups: [
        {
        heading: "TABLES",
        layout: "grid-4",
        options: [
            { label: "1", value: "TABLE-1", next: "table" },
            { label: "2", value: "TABLE-2", next: "table" },
            { label: "3", value: "TABLE-3", next: "table" },
            { label: "4", value: "TABLE-4", next: "table" },
            { label: "5", value: "TABLE-5", next: "table" },
            { label: "6", value: "TABLE-6", next: "table" },
            { label: "7", value: "TABLE-7", next: "table" },
            { label: "8", value: "TABLE-8", next: "table" },
            { label: "9", value: "TABLE-9", next: "table" },
            { label: "10", value: "TABLE-10", next: "table" },
            { label: "11", value: "TABLE-11", next: "table" },
            { label: "12", value: "TABLE-12", next: "table" }
        ]},{
        heading: "BLENDING BELTS",
        layout: "grid-3",
        options: [
            { label: "1", value: "BLENDING BELT-1", next: "belt" },
            { label: "2", value: "BLENDING BELT-2", next: "belt" },
            { label: "3", value: "BLENDING BELT-3", next: "belt" }
        ]},{
        heading: "MIXERS",
        layout: "grid-3",
        options: [
            { label: "1", value: "MIXER-1", next: "mixer" },
            { label: "2", value: "MIXER-2", next: "mixer" },
            { label: "3", value: "MIXER-3", next: "mixer" }
        ]},{
        heading: "RECYCLERS",
        layout: "grid-2",
        options: [
            { label: "1", value: "RECYCLE-1", next: "recycle" },
            { label: "2", value: "RECYCLE-2", next: "recycle" }
        ]},{
        layout: "stack",
        options: [
            { label: "RECYCLE SAW", value: "RECYCLE SAW", next: "details" }
        ]}
    ]},
    l5open: {
    title: "EQUIPMENT",
    groups: [
        {
        heading: "LOPTEX UNITS",
        layout: "grid-4",
        options: [
            { label: "1", value: "LOPTEX-1", next: "details" },
            { label: "2", value: "LOPTEX-2", next: "details" },
            { label: "5", value: "LOPTEX-5", next: "details" },
            { label: "6", value: "LOPTEX-6", next: "details" }
        ]},{
        heading: "FINE OPENERS",
        layout: "grid-3",
        options: [
            { label: "1", value: "FO-1", next: "fo" },
            { label: "2", value: "FO-2", next: "fo" },
            { label: "3", value: "FO-3", next: "fo" },
            { label: "4", value: "FO-4", next: "fo" },
            { label: "5", value: "FO-5", next: "fo" },
            { label: "6", value: "FO-6", next: "fo" }
        ]},{
        heading: "RS UNITS",
        layout: "grid-2",
        options: [
            { label: "1", value: "RS-1", next: "details" },
            { label: "2", value: "RS-2", next: "details" }
        ]},{
        heading: "FIBER SILOS",
        layout: "grid-3",
        options: [
            { label: "1", value: "FS-1", next: "fs" },
            { label: "2", value: "FS-2", next: "fs" },
            { label: "3", value: "FS-3", next: "fs" },
            { label: "4", value: "FS-4", next: "fs" },
            { label: "5", value: "FS-5", next: "fs" },
            { label: "6", value: "FS-6", next: "fs" }
        ]},{
        heading: "CHUTE FEEDS",
        layout: "grid-4",
        options: [
            { label: "1", value: "CF-1", next: "cf2" },
            { label: "2", value: "CF-2", next: "cf1" },
            { label: "3", value: "CF-3", next: "cf1" },
            { label: "4", value: "CF-4", next: "cf2" },
        ]},{
        heading: "AIR HANDLING UNITS",
        layout: "grid-3",
        options: [
            { label: "26", value: "AHU-26", next: "details" },
            { label: "27", value: "AHU-27", next: "details" },
            { label: "28", value: "AHU-28", next: "details" }
        ]}
    ]},
    l5card: {
    title: "EQUIPMENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "TT-1", value: "TT-1", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "AL-1", value: "AL-1", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "AL-2", value: "AL-2", next: "details" } 
        ]},{
        layout: "stack",
        options: [
            { label: "TT-2", value: "TT-2", next: "details" } 
        ]},{
        layout: "stack",
        options: [
            { label: "COLLECTION BELT", value: "COLLECTION BELT", next: "belt" } 
        ]}
    ]},
    l5ent: {
    title: "EQUIPMENT",
    groups: [
        {
        heading: "HIGH PRESSURE PUMPS",
        layout: "grid-3",
        options: [
            { label: "1", value: "HPP-1", next: "pump" },
            { label: "2", value: "HPP-2", next: "pump" },
            { label: "3", value: "HPP-3", next: "pump" },
            { label: "4", value: "HPP-4", next: "pump" },
            { label: "5", value: "HPP-5", next: "pump" },
            { label: "6", value: "HPP-6", next: "pump" },
            { label: "7", value: "HPP-7", next: "pump" },
            { label: "8", value: "HPP-8", next: "pump" },
            { label: "9", value: "HPP-9", next: "pump" }
        ]},{
        heading: "GV PUMPS",
        layout: "grid-3",
        options: [
            { label: "1", value: "GV-1", next: "fan" },
            { label: "2", value: "GV-2", next: "fan" },
            { label: "3", value: "GV-3", next: "fan" }
        ]},{
        layout: "stack",
        options: [
            { label: "PERFOJET", value: "PERFOJET", next: "details" }
        ]}
    ]},
    l5dry: {
    title: "EQUIPMENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "DRYER", value: "DRYER", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "FUEL DELIVERY", value: "FUEL DELIVERY", next: "details" } 
        ]}
    ]},
    l5fin: {
    title: "EQUIPMENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "CALENDAR", value: "CALENDAR", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "WEB SUCTION", value: "WEB SUCTION", next: "details" } 
        ]}
    ]},
    l5insp: {
    title: "EQUIPMENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "AIS", value: "AIS", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "EVS", value: "EVS", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "METAL DETECTOR", value: "METAL DETECTOR", next: "details" } 
        ]}
    ]},
    l5wind: {
    title: "EQUIPMENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "WINDER", value: "WINDER", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "CORE CUTTER", value: "CORE CUTTER", next: "details" } 
        ]},{
        layout: "stack",
        options: [
            { label: "KNIVES", value: "KNIVES", next: "details" } 
        ]}
    ]},
    l5pack: {
    title: "EQUIPMENT",
    groups: [
        {
        heading: "TROLLIES",
        layout: "grid-3",
        options: [
            { label: "110", value: "TR-110", next: "details" },
            { label: "130", value: "TR-130", next: "details" },
            { label: "150", value: "TR-150", next: "details" },
            { label: "300", value: "TR-300", next: "details" },
            { label: "560", value: "TR-560", next: "details" },
        ]},{
        heading: "UPENDERS",
        layout: "grid-3",
        options: [
            { label: "180", value: "UP-180", next: "details" },
            { label: "310", value: "UP-310", next: "details" },
            { label: "WAREHOUSE", value: "UP-WAREHOUSE", next: "details" }
        ]},{
        heading: "ROBOTS",
        layout: "grid-2",
        options: [
            { label: "1", value: "ROBOT-1", next: "details" },
            { label: "2", value: "ROBOT-2", next: "details" }
        ]},{
        heading: "STACKING UNITS",
        layout: "grid-3",
        options: [
            { label: "1", value: "STACK-1", next: "details" },
            { label: "2", value: "STACK-2", next: "details" },
            { label: "3", value: "STACK-3", next: "details" },
            { label: "4", value: "STACK-4", next: "details" },
            { label: "5", value: "STACK-5", next: "details" },
            { label: "6", value: "STACK-6", next: "details" }
        ]},{
        heading: "CARDBOARD CRANES",
        layout: "grid-3",
        options: [
            { label: "1", value: "CB-1", next: "details" },
            { label: "2", value: "CB-2", next: "details" },
            { label: "TOP", value: "CB-TOP", next: "details" }
        ]},{
        heading: "WRAPPERS",
        layout: "grid-2",
        options: [
            { label: "1", value: "WRAPPER-1", next: "details" },
            { label: "2", value: "WRAPPER-2", next: "details" }
        ]},{
        heading: "LABEL PRINTERS",
        layout: "grid-2",
        options: [
            { label: "1", value: "PRINT-1", next: "details" },
            { label: "2", value: "PRINT-2", next: "details" }
        ]},{
        heading: "WAREHOUSE PLATFORMS",
        layout: "grid-3",
        options: [
            { label: "1", value: "PLAT-1", next: "details" },
            { label: "2", value: "PLAT-2", next: "details" },
            { label: "3", value: "PLAT-3", next: "details" },
            { label: "4", value: "PLAT-4", next: "details" },
            { label: "5", value: "PLAT-5", next: "details" }
        ]}
    ]},
    l5doc: {
    title: "EQUIPMENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "SMALL DOCTOR", value: "SMALL DOCTOR", next: "details" }
        ]}
    ]},
    l5filt: {
    title: "EQUIPMENT",
    groups: [
        {
        heading: "TANKS",
        layout: "grid-3",
        options: [
            { label: "A", value: "TANK-A", next: "details" },
            { label: "B", value: "TANK-B", next: "details" },
            { label: "C", value: "TANK-C", next: "details" },
            { label: "D", value: "TANK-D", next: "details" },
            { label: "E", value: "TANK-E", next: "details" },
            { label: "F", value: "TANK-F", next: "details" }
        ]},{
        heading: "SLOW SAND FILTERS",
        layout: "grid-3",
        options: [
            { label: "1", value: "SF-1", next: "details" },
            { label: "2", value: "SF-2", next: "details" },
            { label: "3", value: "SF-3", next: "details" },
            { label: "4", value: "SF-4", next: "details" },
            { label: "5", value: "SF-5", next: "details" }
        ]},{
        heading: "BAND FLOATS",
        layout: "grid-3",
        options: [
            { label: "1", value: "BF-1", next: "details" },
            { label: "2", value: "BF-2", next: "details" },              
            { label: "3", value: "BF-3", next: "details" }
        ]},{
        heading: "SCREWPRESSES",
        layout: "grid-2",
        options: [
            { label: "1", value: "SP-1", next: "details" },
            { label: "2", value: "SP-2", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "CT-1", value: "CT-1", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "PIT", value: "PIT", next: "details" }
        ]}
    ]},
        
    //DEDICATED MACHINE DIRECTION PAGES
    willow: {
    title: "COMPONENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "INFEED CONVEYOR", value: "INFEED CONVEYOR", next: "belt" }
        ]},{
        layout: "stack",
        options: [
            { label: "INFEED ROLL", value: "INFEED ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "TAMBOUR ROLL", value: "TAMBOUR ROLL", next: "roll" }
        ]}
    ]},
    for: {
    title: "COMPONENT",
    groups: [
        {
        heading: "CARDING ROLLS",
        layout: "grid-4",
        options: [
            { label: "1", value: "", next: "roll" },
            { label: "2", value: "", next: "roll" },
            { label: "3/4", value: "", next: "roll" },
            { label: "5", value: "", next: "roll" }
        ]},{
        heading: "WORKER ROLLS",
        layout: "grid-2",
        options: [
            { label: "UPPER", value: "", next: "roll" },
            { label: "LOWER", value: "", next: "roll" }
        ]},{
        heading: "SUPPORTING ROLLS",
        layout: "grid-2",
        options: [
            { label: "FEED", value: "", next: "roll" },
            { label: "TURBO", value: "", next: "roll" }
        ]},{
        heading: "SETTING ROLLS",
        layout: "grid-2",
        options: [
            { label: "VIBRATOR", value: "", next: "roll" },
            { label: "VACUUM", value: "", next: "roll" }
        ]},{
        heading: "SUCTION FAN",
        layout: "grid-2",
        options: [
            { label: "1", value: "", next: "fan" },
            { label: "2", value: "", next: "fan" }
        ]},{
        layout: "stack",
        options: [
            { label: "WEIGH BELT", value: "WEIGH BELT", next: "belt" }
        ]},{
        layout: "stack",
        options: [
            { label: "MESH CONVEYOR", value: "MESH CONVEYOR", next: "belt" }
        ]},{
        layout: "stack",
        options: [
            { label: "BLOWER", value: "BLOWER", next: "fan" }
        ]},{
        layout: "stack",
        options: [
            { label: "CHANNEL WALL", value: "CHANNEL WALL", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "AIR GUIDE", value: "AIR GUIDE", next: "details" }
        ]},
    ]},
    ewkl: {
    title: "COMPONENT",
    groups: [
        {
        heading: "PRE-MAIN CARDING ROLLS",
        layout: "grid-2",
        options: [
            { label: "FEED", value: "", next: "roll" },
            { label: "LICKER-IN", value: "", next: "roll" },
            { label: "STRIPPER", value: "", next: "roll" },
            { label: "WORKER", value: "", next: "roll" },
            { label: "PRE-MAIN", value: "", next: "roll" }
        ]},{
        heading: "INTERMEDIATE DOFFER ROLLS",
        layout: "grid-2",
        options: [
            { label: "UPPER", value: "", next: "roll" },
            { label: "LOWER", value: "", next: "roll" }
        ]},{
        heading: "MAIN CARDING ROLLS",
        layout: "grid-2",
        options: [
            { label: "WORKER", value: "", next: "roll" },
            { label: "MAIN", value: "", next: "roll" }
        ]},{
        heading: "UPPER DELIVERY ROLLS",
        layout: "grid-2",
        options: [
            { label: "DOFFER", value: "", next: "roll" },
            { label: "SCRAM", value: "", next: "roll" },
            { label: "TAKE-OFF", value: "", next: "roll" },
            { label: "VACUUM", value: "", next: "roll" },
            { label: "MAIN", value: "", next: "roll" }
        ]},{
        heading: "LOWER DELIVERY ROLLS",
        layout: "grid-2",
        options: [
            { label: "DOFFER", value: "", next: "roll" },
            { label: "SCRAM", value: "", next: "roll" },
            { label: "TAKE-OFF", value: "", next: "roll" },
            { label: "VACUUM", value: "", next: "roll" },
            { label: "MAIN", value: "", next: "roll" }
        ]},{
        heading: "SETTING ROLLS",
        layout: "grid-2",
        options: [
            { label: "VACUUM", value: "", next: "roll" },
            { label: "SUCTION", value: "", next: "roll" },
        ]},{
        layout: "stack",
        options: [
            { label: "WEIGH BELT", value: "WEIGH BELT", next: "belt" }
        ]}
    ]},
    //ek150
    //tt1
    //tt2
    //al1
    //al2

    //REUSABLE DIRECTION PAGES
    table: {
    title: "COMPONENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "UPENDER", value: "UPENDER", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "FEED BELT", value: "FEED BELT", next: "belt" }
        ]},{
        layout: "stack",
        options: [
            { label: "FEED TABLE", value: "FEED TABLE", next: "belt" }
        ]},{
        layout: "stack",
        options: [
            { label: "SPIKE APRON", value: "SPIKE APRON", next: "belt" }
        ]},{
        layout: "stack",
        options: [
            { label: "EVENER ROLL", value: "EVENER ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "STRIPPER ROLL", value: "STRIPPER ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "WEIGH PAN", value: "WEIGH PAN", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "PHOTOEYE", value: "PHOTOEYE", next: "details" }
        ]}
    ]},
    mixer: {
    title: "COMPONENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "INLET VALVE", value: "INLET VALVE", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "FEED TABLE", value: "FEED TABLE", next: "belt" }
        ]},{
        layout: "stack",
        options: [
            { label: "SPIKE APRON", value: "SPIKE APRON", next: "belt" }
        ]},{
        layout: "stack",
        options: [
            { label: "STRIPPER ROLL", value: "STRIPPER ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "BLOWER", value: "BLOWER", next: "fan" }
        ]},{
        layout: "stack",
        options: [
            { label: "EJECTION TABLE", value: "EJECTION TABLE", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "PHOTOEYE", value: "PHOTOEYE", next: "details" }
        ]}
    ]},
    fo: {
    title: "COMPONENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "FEED ROLL", value: "FEED ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "BEATER ROLL", value: "BEATER ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "OPENING ROLL", value: "OPENING ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "MAIN ROLL", value: "MAIN ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "TRANSFER FAN", value: "TRANSFER FAN", next: "fan" }
        ]},{
        layout: "stack",
        options: [
            { label: "PHOTOEYE", value: "PHOTOEYE", next: "details" }
        ]}
    ]},
    fs: {
    title: "COMPONENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "FEED ROLL", value: "FEED ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "BEATER ROLL", value: "BEATER ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "PHOTOEYE", value: "PHOTOEYE", next: "details" }
        ]}
    ]},
    fbk: {
    title: "COMPONENT",
    groups: [
        {
        heading: "DENSIFICATION FANS",
        layout: "grid-4",
        options: [
            { label: "1", value: "DF-1", next: "fan" },
            { label: "2", value: "DF-2", next: "fan" },
            { label: "3", value: "DF-3", next: "fan" },
            { label: "4", value: "DF-4", next: "fan" }
        ]},{
        heading: "DEFORMATION PLATES",
        layout: "grid-4",
        options: [
            { label: "1", value: "DP-1", next: "details" },
            { label: "2", value: "DP-2", next: "details" },
            { label: "3", value: "DP-3", next: "details" },
            { label: "4", value: "DP-4", next: "details" },
            { label: "5", value: "DP-5", next: "details" },
            { label: "6", value: "DP-6", next: "details" },
            { label: "7", value: "DP-7", next: "details" },
            { label: "8", value: "DP-8", next: "details" },
            { label: "9", value: "DP-9", next: "details" },
            { label: "10", value: "DP-10", next: "details" },
            { label: "11", value: "DP-11", next: "details" },
            { label: "12", value: "DP-12", next: "details" },
        ]},{
        layout: "stack",
        options: [
            { label: "FEED FAN", value: "FEED FAN", next: "fan" }
        ]},{
        layout: "stack",
        options: [
            { label: "FEED ROLL", value: "FEED ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "BEATER ROLL", value: "BEATER ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "MEASURING ROLL", value: "MEASURING ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "DELIVERY BELT", value: "DELIVERY BELT", next: "belt" }
        ]},{
        layout: "stack",
        options: [
            { label: "PRESSURE TRANSMITTER", value: "PRESSURE TRANSMITTER", next: "details" }
        ]}
    ]},
    cf1: {
    title: "COMPONENT",
    groups: [
        {
        heading: "DENSIFICATION FANS",
        layout: "grid-4",
        options: [
            { label: "1", value: "DF-1", next: "fan" },
            { label: "2", value: "DF-2", next: "fan" },
            { label: "3", value: "DF-3", next: "fan" },
            { label: "4", value: "DF-4", next: "fan" }
        ]},{
        heading: "DEFORMATION PLATES",
        layout: "grid-3",
        options: [
            { label: "1", value: "DP-1", next: "details" },
            { label: "2", value: "DP-2", next: "details" },
            { label: "3", value: "DP-3", next: "details" },
            { label: "4", value: "DP-4", next: "details" },
            { label: "5", value: "DP-5", next: "details" },
            { label: "6", value: "DP-6", next: "details" },
            { label: "7", value: "DP-7", next: "details" },
            { label: "8", value: "DP-8", next: "details" },
            { label: "9", value: "DP-9", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "FEED FAN", value: "FEED FAN", next: "fan" }
        ]},{
        layout: "stack",
        options: [
            { label: "FEED ROLL", value: "FEED ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "BEATER ROLL", value: "BEATER ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "MEASURING ROLL", value: "MEASURING ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "DELIVERY BELT", value: "DELIVERY BELT", next: "belt" }
        ]},{
        layout: "stack",
        options: [
            { label: "PRESSURE TRANSMITTER", value: "PRESSURE TRANSMITTER", next: "details" }
        ]}
    ]},
    cf2: {
    title: "COMPONENT",
    groups: [
        {
        heading: "DENSIFICATION FANS",
        layout: "grid-4",
        options: [
            { label: "1", value: "DF-1", next: "fan" },
            { label: "2", value: "DF-2", next: "fan" },
            { label: "3", value: "DF-3", next: "fan" },
            { label: "4", value: "DF-4", next: "fan" }
        ]},{
        heading: "DEFORMATION PLATES",
        layout: "grid-3",
        options: [
            { label: "1", value: "DP-1", next: "details" },
            { label: "2", value: "DP-2", next: "details" },
            { label: "3", value: "DP-3", next: "details" },
            { label: "4", value: "DP-4", next: "details" },
            { label: "5", value: "DP-5", next: "details" },
            { label: "6", value: "DP-6", next: "details" },
            { label: "7", value: "DP-7", next: "details" },
            { label: "8", value: "DP-8", next: "details" },
            { label: "9", value: "DP-9", next: "details" }
        ]},{
        heading: "FEED FANS",
        layout: "grid-2",
        options: [
            { label: "1", value: "FF-1", next: "fan" },
            { label: "2", value: "FF-2", next: "fan" }
        ]},{
        layout: "stack",
        options: [
            { label: "FEED ROLL", value: "FEED ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "BEATER ROLL", value: "BEATER ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "MEASURING ROLL", value: "MEASURING ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "DELIVERY BELT", value: "DELIVERY BELT", next: "belt" }
        ]},{
        layout: "stack",
        options: [
            { label: "PRESSURE TRANSMITTER", value: "PRESSURE TRANSMITTER", next: "details" }
        ]}
    ]},
    recycle: {
    title: "COMPONENT",
    groups: [
        {
        heading: "LOAD STATIONS",
        layout: "grid-2",
        options: [
            { label: "1", value: "LS-1", next: "details" },
            { label: "2", value: "LS-2", next: "details" }
        ]},{
        heading: "FEED ROLLS",
        layout: "grid-2",
        options: [
            { label: "1", value: "FR-1", next: "roll" },
            { label: "2", value: "FR-2", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "INLET ROLL", value: "INLET ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "KISS ROLL", value: "KISS ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "OUTLET ROLL", value: "OUTLET ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "UNRAVEL ROLL", value: "UNRAVEL ROLL", next: "roll" }
        ]},{
        layout: "stack",
        options: [
            { label: "PHOTOEYE", value: "PHOTOEYE", next: "details" }
        ]}
    ]},
    fan: {
    title: "COMPONENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "IMPELLER", value: "IMPELLER", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "MOTOR", value: "MOTOR", next: "motor" }
        ]},{
        layout: "stack",
        options: [
            { label: "DRIVE", value: "DRIVE", next: "drive" }
        ]}
    ]},
    pump: {
    title: "COMPONENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "IMPELLER", value: "IMPELLER", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "MOTOR", value: "MOTOR", next: "motor" }
        ]},{
        layout: "stack",
        options: [
            { label: "DRIVE", value: "DRIVE", next: "drive" }
        ]}
    ]},
    roll: {
    title: "COMPONENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "ROLL", value: "ROLL", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "MOTOR", value: "MOTOR", next: "motor" }
        ]},{
        layout: "stack",
        options: [
            { label: "DRIVE", value: "DRIVE", next: "drive" }
        ]}
    ]},
    belt: {
    title: "COMPONENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "BELT", value: "BELT", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "MOTOR", value: "MOTOR", next: "motor" }
        ]},{
        layout: "stack",
        options: [
            { label: "DRIVE", value: "DRIVE", next: "drive" }
        ]}
    ]},
    motor: {
    title: "COMPONENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "COUPLING", value: "COUPLING", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "WINDINGS", value: "WINDINGS", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "GEARBOX", value: "GEARBOX", next: "details" }
        ]}
    ]},
    drive: {
    title: "COMPONENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "FAULTED", value: "FAULTED", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "CONTROL UNIT", value: "CONTROL UNIT", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "POWER UNIT", value: "POWER UNIT", next: "details" }
        ]}
    ]},
    tank: {
    title: "COMPONENT",
    groups: [
        {
        layout: "stack",
        options: [
            { label: "VALVE", value: "VALVE", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "SENSOR", value: "SENSOR", next: "details" }
        ]},{
        layout: "stack",
        options: [
            { label: "PUMP", value: "PUMP", next: "pump" }
        ]}
    ]},
    //ahu
    //trolley
    //robot
    //upender
        
    //SPECIAL PAGES
    details: {
    title: "DETAILS"
    },
    final: {
    title: "RECEIPT"
    }
};

let currentNode = "start";
let detailsNotes = "";
let submissionStatus = "";
let historyStack = [];
let selectedPath = [];
let detailsFiles = [];

const stepLabel = document.getElementById("stepLabel");
const title = document.getElementById("title");
const options = document.getElementById("options");
const backBtn = document.getElementById("backBtn");
const submitBtn = document.getElementById("submitBtn");

//SHOW THE SCREEN
function render(nodeKey) {
    currentNode = nodeKey;
    const node = flow[nodeKey];

    const depth = historyStack.length;
    const hue = Math.min(depth * 50, 360);

    document.documentElement.style.setProperty("--page-hue", hue);

    const hideBack = nodeKey === "start" || nodeKey === "final";
    backBtn.style.opacity = hideBack ? "0" : "1";
    backBtn.style.pointerEvents = hideBack ? "none" : "auto";

    title.textContent = node.title;
    


    if (nodeKey === "details") {
    submitBtn.innerHTML = `<i data-lucide="send"></i>`;
    submitBtn.style.background = "rgb(0, 255, 0)";
    } else if (nodeKey === "final") {
    submitBtn.innerHTML = `<i data-lucide="plus"></i>`;
    submitBtn.style.background = "rgb(0, 255, 0)";
    } else {
    submitBtn.innerHTML = `<i data-lucide="pencil-line"></i>`;
    submitBtn.style.background = "rgb(220, 220, 220)";
    }

    options.innerHTML = "";







    if (nodeKey === "start" || nodeKey === "final") {
    stepLabel.style.opacity = "0";
    stepLabel.innerHTML = " ";
    } else if (selectedPath.length) {
    stepLabel.innerHTML = selectedPath
        .map((item, index) => {
        if (index === 0) return `<span>${item}</span>`;
        return `<i data-lucide="chevrons-right"></i><span>${item}</span>`;
        })
        .join(" ");

    stepLabel.style.opacity = "1";
    } else {
    stepLabel.innerHTML = " ";
    stepLabel.style.opacity = "0";
    }

    lucide.createIcons();






    if (nodeKey === "details") {
    const formWrap = document.createElement("div");
    formWrap.className = "details-form";

    formWrap.innerHTML = `
        <label class="details-label" for="notesBox">NOTES</label>

        <textarea id="notesBox" class="notes-box" placeholder="Enter notes here...">${detailsNotes}</textarea>

        <div id="fileList" class="file-list"></div>

        <div class="media-actions">
        <label class="icon-btn" for="takePhotoInput">
            <i data-lucide="camera"></i>
        </label>
        <input id="takePhotoInput" type="file" accept="image/*" capture="environment" hidden>

        <label class="icon-btn" for="uploadPhotosInput">
            <i data-lucide="image-plus"></i>
        </label>
        <input id="uploadPhotosInput" type="file" accept="image/*" multiple hidden>
        </div>
    `;

    options.appendChild(formWrap);

    const notesBox = formWrap.querySelector("#notesBox");
    const uploadInput = formWrap.querySelector("#uploadPhotosInput");
    const takePhotoInput = formWrap.querySelector("#takePhotoInput");
    const fileList = formWrap.querySelector("#fileList");

    notesBox.addEventListener("input", () => {
        detailsNotes = notesBox.value;
    });

    function renderFiles() {
        fileList.innerHTML = "";

        detailsFiles.forEach((file, index) => {
        const item = document.createElement("div");
        item.className = "file-item";

        item.innerHTML = `
            <div class="file-name">${file.name}</div>
            <button class="file-remove" data-index="${index}" type="button">
            <i data-lucide="x"></i>
            </button>
        `;

        fileList.appendChild(item);
        });

        fileList.querySelectorAll(".file-remove").forEach(btn => {
        btn.onclick = () => {
            const index = Number(btn.dataset.index);
            detailsFiles.splice(index, 1);
            renderFiles();
        };
        });

        lucide.createIcons();
    }

    function addFiles(fileListLike) {
        const newFiles = Array.from(fileListLike);

        newFiles.forEach(file => {
        const exists = detailsFiles.some(
            f =>
            f.name === file.name &&
            f.size === file.size &&
            f.lastModified === file.lastModified
        );

        if (!exists) {
            detailsFiles.push(file);
        }
        });

        renderFiles();
    }

    uploadInput.addEventListener("change", () => {
        addFiles(uploadInput.files);
        uploadInput.value = "";
    });

    takePhotoInput.addEventListener("change", () => {
        addFiles(takePhotoInput.files);
        takePhotoInput.value = "";
    });

    renderFiles();      










    } else if (nodeKey === "final") {

    const statusText =
        submissionStatus === "PROCESSING" ? "Sending..." :
        submissionStatus === "SUBMITTED" ? "Submitted" :
        submissionStatus === "FAILED" ? "Failed" :
        "Unknown";

    const summary = document.createElement("div");
    summary.className = "final-summary";

    const notes = detailsNotes;

    const mediaText = detailsFiles.length
        ? detailsFiles.map(file => file.name).join("<br>")
        : "No files attached.";

    summary.innerHTML = `
        <div><strong>SELECTION:</strong></div>
        <div>${selectedPath.join(" >> ")}</div>

        <br>

        <div><strong>NOTES:</strong></div>
        <div>${notes || "No notes entered."}</div>

        <br>

        <div><strong>MEDIA:</strong></div>
        <div>${mediaText}</div>

        <br>

        <div><strong>STATUS:</strong></div>
        <div>${statusText}</div>
    `;

    options.appendChild(summary);







    } else if (node.groups) {
    node.groups.forEach((group, groupIndex) => {
    const groupWrap = document.createElement("div");
    groupWrap.className = "option-group";

    if (group.heading) {
        const heading = document.createElement("div");
        heading.className = "group-heading";
        heading.textContent = group.heading;
        groupWrap.appendChild(heading);
    }

    const groupOptions = document.createElement("div");
    groupOptions.className = `group-options ${group.layout || "stack"}`;

    const fadeStep = 5;
    const fadeMax = 75;
    const fade = Math.min(groupIndex * fadeStep, fadeMax);
    const offsetAmount = 35;
    const hueOffset = groupIndex % 2 === 0
        ? 0
        : offsetAmount;

    group.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt.label;

        btn.style.setProperty("--fade", `${fade}%`);
        btn.style.setProperty("--hue-offset", hueOffset);

        btn.onclick = () => {
        historyStack.push({
            node: currentNode,
            path: [...selectedPath]});

        selectedPath.push(opt.value || opt.label);
        render(opt.next);
        };

        groupOptions.appendChild(btn);
    });

    groupWrap.appendChild(groupOptions);
    options.appendChild(groupWrap);
    });







    } else {
    node.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt.label;

        btn.onclick = () => {
        historyStack.push({
            node: currentNode,
            path: [...selectedPath]});

        selectedPath.push(opt.value || opt.label);
        render(opt.next);
        };

        options.appendChild(btn);
    });
    }
    
    
}






//NAVIGATION BACKWARD
backBtn.onclick = () => {
    const previous = historyStack.pop();
    if (!previous) return;

    selectedPath = previous.path;
    render(previous.node);
};

// NAVIGATION FORWARD
submitBtn.onclick = async () => {

    // FROM NORMAL PAGE >> GO TO DETAILS
    if (currentNode !== "details" && currentNode !== "final") {
    historyStack.push({
        node: currentNode,
        path: [...selectedPath]
    });
    render("details");
    return;
    }

    // FROM DETAILS >> BACKEND >> GO TO FINAL
    if (currentNode === "details") {
    const notesBox = document.getElementById("notesBox");
    detailsNotes = notesBox ? notesBox.value : "";

    historyStack.push({
        node: currentNode,
        path: [...selectedPath]
    });

    // go to receipt immediately
    render("final");

    submissionStatus = "PROCESSING";

    sendTicketToBackend()
        .then(result => {
        submissionStatus = "SUBMITTED";
        console.log("Submitted:", result);

        if (currentNode === "final") {
            render("final");
        }
        })
        .catch(err => {
        submissionStatus = "FAILED";
        console.error("Submission failed:", err);

        if (currentNode === "final") {
            render("final");
        }
        });

    return;
    }

    // FROM FINAL >> GO TO START
    if (currentNode === "final") {
    selectedPath = [];
    detailsNotes = "";
    historyStack = [];
    detailsFiles = [];
    submissionStatus = "";

    render("start");
    return;
    }

};

function preloadFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const pathParam = params.get("x");

    if (!pathParam) return;

    const steps = pathParam.split(",");

    let node = "start";
    selectedPath = [];
    historyStack = [];

    steps.forEach(step => {
    const current = flow[node];
    if (!current || !current.groups) return;

    let found = null;

    const optionsList = current.groups
        ? current.groups.flatMap(g => g.options)
        : current.options || [];

    optionsList.forEach(opt => {
        if (opt.next === step || opt.value === step) {
        found = opt;
        }
    });

    if (found) {
        historyStack.push({
        node: node,
        path: [...selectedPath]});

        selectedPath.push(found.value || found.label);
        node = found.next;
    }
    });

    render(node);
}

async function sendTicketToBackend() {
    const formData = new FormData();

    formData.append("selectedPath", JSON.stringify(selectedPath));
    formData.append("notes", detailsNotes || "");

    detailsFiles.forEach((file) => {
    formData.append("attachments", file, file.name);
    });

    const response = await fetch("https://spuntech-api-p2yrla2fsq-ue.a.run.app/create-ticket", {
    method: "POST",
    body: formData
    });

    const result = await response.json();
    console.log("Backend result:", result);

    if (!response.ok) {
    throw new Error(result.error || "Ticket submission failed");
    }

    return result;
}

preloadFromUrl();
if (currentNode === "start") {
    render("start");
}