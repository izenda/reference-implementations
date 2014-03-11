{
	"filtersByTable": {
		"[dbo].[MaintenanceEventsV]": {
			"Joins": {},
			"RegularFilters": [],
			"MiscFilters": [],
			"Groups": [
				{
					"Description": "Asset Info",
					"Items": [
						{
							"Uid": "additionalFilter5",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[AssetID]",
							"Description": "Asset",
							"Values": []
						},
						{
							"Uid": "assetFilter1",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[AssetType]",
							"Description": "Asset Type",
							"Values": []
						}
					]
				},
				{
					"Description": "Time Class",
					"Items": [
						{
							"Uid": "timeClassFilter11",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[TimeClass2]",
							"Description": "Day of Week",
							"Values": []
						},
						{
							"Uid": "timeClassFilter12",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[TimeClass3]",
							"Description": "Morning/Evening",
							"Values": []
						},
						{
							"Uid": "timeClassFilter13",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[TimeClass1]",
							"Description": "Weekday/Weekend",
							"Values": []
						}
					]
				},
				{
					"Description": "Required",
					"Items": [
						{
							"Uid": "additionalFilter1",
							"ControlType": 5,
							"DisplayCloseButton": true,
							"IsRequired": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[TimeOfNotification]",
							"Description": "Notification",
							"Values": [
								"%midnight%",
								"%today%"
							]
						}
					]
				}, {
					"Description": "Time",
					"Items": [
						{
							"Uid": "additionalFilter2",
							"ControlType": 5,
							"DisplayCloseButton": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[TimeOfClearance]",
							"Description": "Clearance",
							"Values": [
								"%midnight%",
								"%today%"
							]
						}
					]
				},
				{
					"Description": "Location",
					"Items": [
						{
							"Uid": "additionalFilter6",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[Zone]",
							"Description": "Zone",
							"Values": []
						},
						{
							"Uid": "additionalFilter7",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[Area]",
							"Description": "Area",
							"Values": []
						},
						{
							"Uid": "additionalFilter21",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[Street]",
							"Description": "Street",
							"Values": []
						},
						{
							"Uid": "additionalFilter22",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[Suburb]",
							"Description": "Suburb",
							"Values": []
						}
					]
				},
				{
					"Description": "Demand Area",
					"Items": [
						{
							"Uid": "demandFilter1",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[DemandArea]",
							"Description": "Demand Area",
							"Values": []
						}
					]
				},
				{
					"Description": "Codes",
					"Items": [
						{
							"Uid": "miscFilter1",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[AlarmCode]",
							"Description": "Alarm Code",
							"Values": []
						},
						{
							"Uid": "miscFilter2",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[AlarmClass]",
							"Description": "Alarm Class",
							"Values": []
						},
						{
							"Uid": "miscFilter3",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[Technician Name]",
							"Description": "Technician",
							"Values": []
						},
						{
							"Uid": "miscFilter4",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[MaintenanceEventsV].[Repair Code]",
							"Description": "Repair Code",
							"Values": []
						}
					]
				}
			]
		},
		"[dbo].[pv_ActiveAlarms]": {
			"Joins": {},
			"RegularFilters": [],
			"MiscFilters": [],
			"Groups": [
				{
					"Description": "Required",
					"Items": [
						{
							"Uid": "reqTimeFilter1",
							"ControlType": 5,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"IsRequired": true,
							"ColumnName": "[dbo].[pv_ActiveAlarms].[Time of Occurrence]",
							"Description": "Time of Occurrence",
							"Values": ["%midnight%", "%today%"]
						}]
				}, {
					"Description": "Alarm",
					"Items": [
						{
							"Uid": "miscFilter1",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[pv_ActiveAlarms].[AlarmSourceCode]",
							"Description": "Alarm Source Code",
							"Values": []
						}, {
							"Uid": "miscFilter2",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[pv_ActiveAlarms].[AlarmSourceDesc]",
							"Description": "Alarm Source Desc",
							"Values": []
						}, {
							"Uid": "miscFilter3",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[pv_ActiveAlarms].[TechnicianId]",
							"Description": "Technician Id",
							"Values": []
						}]
				}, {
					"Description": "Asset Type",
					"Items": [
						{
							"Uid": "additionalFilter5",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[pv_ActiveAlarms].[AssetType]",
							"Description": "Asset Type",
							"Values": []
						},
						{
							"Uid": "additionalFilter6",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[pv_ActiveAlarms].[AssetName]",
							"Description": "Asset Name",
							"Values": []
						}
					]
				}, {
					"Description": "Location Type",
					"Items": [
						{
							"Uid": "additionalFilter1",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"ColumnName": "[dbo].[pv_ActiveAlarms].[Zone]",
							"Description": "Zone",
							"LoadFromDatabase": true,
							"Values": []
						},
						{
							"Uid": "additionalFilter2",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[pv_ActiveAlarms].[Area]",
							"Description": "Area",
							"Values": []
						},
						{
							"Uid": "additionalFilter3",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[pv_ActiveAlarms].[Suburb]",
							"Description": "Suburb",
							"Values": []
						},
						{
							"Uid": "additionalFilter4",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[pv_ActiveAlarms].[Location]",
							"Description": "Location",
							"Values": []
						},
						{
							"Uid": "additionalFilter15",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[pv_ActiveAlarms].[Location]",
							"DistinctColumn": "[dbo].[Meters].[Location]",
							"Description": "Location",
							"Values": []
						},
						{
							"Uid": "additionalFilter16",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[pv_ActiveAlarms].[ZoneID]",
							"DistinctColumn": "[dbo].[MeterMap].[ZoneID]",
							"Description": "Zone ID",
							"Values": []
						},
						{
							"Uid": "additionalFilter17",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[pv_ActiveAlarms].[AreaID]",
							"Description": "Area ID",
							"Values": []
						}
					]
				}
			]
		},
		"[dbo].[ActiveAlarmsV]": {
			"Joins": {},
			"RegularFilters": [],
			"MiscFilters": [],
			"Groups": [
				{
					"Description": "Required",
					"Items": [{
						"Uid": "reqTimeFilter1",
						"ControlType": 5,
						"DisplayCloseButton": true,
						"LoadFromDatabase": true,
						"IsRequired": true,
						"ColumnName": "[dbo].[ActiveAlarmsV].[Time of Occurrence]",
						"LinkedColumns": "[dbo].[AssetEventListV].[Time of Occurrence]",
						"Description": "Time of Occurrence",
						"Values": ["%midnight%", "%today%"]
					}]
				}, {
					"Description": "Asset Type",
					"Items": [
						{
							"Uid": "assetTypeFilter1",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[ActiveAlarmsV].[AssetType]",
							"LinkedColumns": "[dbo].[AssetEventListV].[AssetType]",
							"Description": "Asset Type",
							"Values": []
						},
						{
							"Uid": "assetTypeFilter2",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[ActiveAlarmsV].[AssetID]",
							"Description": "Asset",
							"Values": []
						}
					]
				},
				{
					"Description": "Time",
					"Items": [
						{
							"Uid": "timeFilter12",
							"ControlType": 5,
							"DisplayCloseButton": true,
							"ColumnName": "[dbo].[ActiveAlarmsV].[Time of Report]",
							"Description": "Time of Report",
							"Values": [
								"%midnight%",
								"%today%"
							]
						},
						{
							"Uid": "timeFilter13",
							"ControlType": 5,
							"DisplayCloseButton": true,
							"ColumnName": "[dbo].[ActiveAlarmsV].[Service Target Time]",
							"Description": "Service Target Time",
							"Values": [
								"%midnight%",
								"%today%"
							]
						}
					]
				},
				{
					"Description": "Location Type",
					"Items": [
						{
							"Uid": "locationFilter21",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"ColumnName": "[dbo].[ActiveAlarmsV].[Street]",
							"Description": "Street",
							"LoadFromDatabase": true,
							"Values": []
						},
						{
							"Uid": "locationFilter22",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[ActiveAlarmsV].[Suburb]",
							"Description": "Suburb",
							"Values": []
						},
						{
							"Uid": "locationFilter16",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[ActiveAlarmsV].[Zone]",
							"Description": "Zone",
							"Values": []
						},
						{
							"Uid": "locationFilter17",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[ActiveAlarmsV].[Area]",
							"Description": "Area",
							"Values": []
						}
					]
				},
				{
					"Description": "Alarm Details",
					"Items": [
						{
							"Uid": "alarmSourceFilter1",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[ActiveAlarmsV].[AlarmSourceDesc]",
							"Description": "Source of Alarm",
							"Values": []
						},
						{
							"Uid": "codeFilter41",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[ActiveAlarmsV].[Alarm Class]",
							"Description": "Alarm Class",
							"Values": []
						},
						{
							"Uid": "codeFilter42",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[ActiveAlarmsV].[AlarmCode]",
							"LinkedColumns": "[dbo].[AssetEventListV].[AlarmCode]",
							"Description": "Alarm Code",
							"Values": []
						}
					]
				},
				{
					"Description": "Demand Area",
					"Items": [
						{
							"Uid": "demandAreaFilter31",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[ActiveAlarmsV].[DemandArea]",
							"Description": "Demand Area",
							"Values": []
						}
					]
				}
			]
		},
		"[dbo].[AssetEventListV]": {
			"Joins": {},
			"RegularFilters": [],
			"MiscFilters": [],
			"Groups": [
				{
					"Description": "Asset Type",
					"Items": [
						{
							"Uid": "assetTypeFilter31",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[AssetEventListV].[AssetType]",
							"LinkedColumns": "[dbo].[ActiveAlarmsV].[AssetType]",
							"Description": "Asset Type",
							"Values": []
						},
						{
							"Uid": "locationFilter26",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[AssetEventListV].[AssetID]",
							"Description": "Asset",
							"Values": []
						}
					]
				},
				{
					"Description": "Time Class",
					"Items": [
						{
							"Uid": "timeClassFilter11",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[AssetEventListV].[TimeClass2]",
							"Description": "Day of Week",
							"Values": []
						},
						{
							"Uid": "timeClassFilter12",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[AssetEventListV].[TimeClass3]",
							"Description": "Morning/Evening",
							"Values": []
						},
						{
							"Uid": "timeClassFilter13",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[AssetEventListV].[TimeClass1]",
							"Description": "Weekday/Weekend",
							"Values": []
						}
					]
				},
				{
					"Description": "Required",
					"Items": [
						{
							"Uid": "timeFilter11",
							"ControlType": 5,
							"DisplayCloseButton": true,
							"IsRequired": true,
							"ColumnName": "[dbo].[AssetEventListV].[Time of Occurrence]",
							"Description": "Time of Occurrence",
							"Values": [
								"%midnight%",
								"%today%"
							]
						}
					]
				}, {
					"Description": "Time",
					"Items": [
						{
							"Uid": "timeFilter12",
							"ControlType": 5,
							"DisplayCloseButton": true,
							"ColumnName": "[dbo].[AssetEventListV].[Time of Report]",
							"Description": "Time of Report",
							"Values": [
								"%midnight%",
								"%today%"
							]
						}
					]
				},
				{
					"Description": "Location Type",
					"Items": [
						{
							"Uid": "locationFilter23",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[AssetEventListV].[Area]",
							"Description": "Area",
							"Values": []
						},
						{
							"Uid": "locationFilter24",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[AssetEventListV].[Zone]",
							"Description": "Zone",
							"Values": []
						},
						{
							"Uid": "locationFilter21",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"ColumnName": "[dbo].[AssetEventListV].[Street]",
							"Description": "Street",
							"LoadFromDatabase": true,
							"Values": []
						},
						{
							"Uid": "locationFilter22",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[AssetEventListV].[Suburb]",
							"Description": "Suburb",
							"Values": []
						}
					]
				},
				{
					"Description": "Event Source",
					"Items": [
						{
							"Uid": "eventSoutceFilter2",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[AssetEventListV].[EventSource]",
							"Description": "Event Source",
							"Values": []
						}
					]
				},
				{
					"Description": "Demand Area",
					"Items": [
						{
							"Uid": "demandAreaFilter11",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[AssetEventListV].[DemandArea]",
							"Description": "Demand Area",
							"Values": []
						}
					]
				},
				{
					"Description": "Code",
					"Items": [
						{
							"Uid": "codeFilter2",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[AssetEventListV].[EventClass]",
							"Description": "Event Class",
							"Values": []
						},
						{
							"Uid": "codeFilter3",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[AssetEventListV].[EventCode]",
							"Description": "Event Code",
							"Values": []
						}
					]
				}
			]
		},
		"[dbo].[HistoricalAlarmsV]": {
			"Joins": {},
			"RegularFilters": [],
			"MiscFilters": [],
			"Groups": [
				{
					"Description": "Asset Type",
					"Items": [
						{
							"Uid": "assetTypeFilter1",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[AssetType]",
							"Description": "Asset Type",
							"Values": []
						},
						{
							"Uid": "assetTypeFilter2",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[AssetID]",
							"Description": "Asset",
							"Values": []
						}
					]
				}, {
					"Description": "Required",
					"Items": [
						{
							"Uid": "additionalFilter11",
							"ControlType": 5,
							"DisplayCloseButton": true,
							"IsRequired": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[Time of Occurrence]",
							"Description": "Time of Occurrence",
							"Values": [
								"%midnight%",
								"%today%"
							]
						}
					]
				}, {
					"Description": "Time",
					"Items": [
						{
							"Uid": "additionalFilter12",
							"ControlType": 5,
							"DisplayCloseButton": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[Time of Report]",
							"Description": "Time of Report",
							"Values": [
								"%midnight%",
								"%today%"
							]
						},
						{
							"Uid": "additionalFilter13",
							"ControlType": 5,
							"DisplayCloseButton": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[Time of Clear]",
							"Description": "Time of Clear",
							"Values": [
								"%midnight%",
								"%today%"
							]
						},
						{
							"Uid": "additionalFilter14",
							"ControlType": 5,
							"DisplayCloseButton": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[Service Target Time]",
							"Description": "Service Target Time",
							"Values": [
								"%midnight%",
								"%today%"
							]
						}
					]
				},
				{
					"Description": "Time Class",
					"Items": [
						{
							"Uid": "timeClassFilter1",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[TimeClass1]",
							"Description": "Weekday/Weekend",
							"Values": []
						},
						{
							"Uid": "timeClassFilter2",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[TimeClass2]",
							"Description": "Day of Week",
							"Values": []
						},
						{
							"Uid": "timeClassFilter3",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[TimeClass3]",
							"Description": "Time of Day",
							"Values": []
						}
					]
				},
				{
					"Description": "Location",
					"Items": [
						{
							"Uid": "locationFilter19",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[Area]",
							"Description": "Area",
							"LoadFromDatabase": true,
							"Values": []
						},
						{
							"Uid": "locationFilter20",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[Zone]",
							"Description": "Zone",
							"LoadFromDatabase": true,
							"Values": []
						},
						{
							"Uid": "locationFilter21",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[Street]",
							"Description": "Street",
							"LoadFromDatabase": true,
							"Values": []
						},
						{
							"Uid": "locationFilter22",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[Suburb]",
							"Description": "Suburb",
							"Values": []
						}
					]
				},
				{
					"Description": "Alarm Details",
					"Items": [
						{
							"Uid": "alarmFilter3",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[Alarm Class]",
							"Description": "Alarm Class",
							"Values": []
						},
						{
							"Uid": "alarmFilter4",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[AlarmCode]",
							"Description": "Alarm Code",
							"Values": []
						},
						{
							"Uid": "alarmSourceFilter1",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[Source Of Alarm Desc]",
							"Description": "Alarm Source",
							"Values": []
						}
					]
				},
				{
					"Description": "Demand Area",
					"Items": [
						{
							"Uid": "demandFilter1",
							"ControlType": 3,
							"DisplayCloseButton": true,
							"LoadFromDatabase": true,
							"ColumnName": "[dbo].[HistoricalAlarmsV].[DemandArea]",
							"Description": "Demand Area",
							"Values": []
						}
					]
				}
			]
		}
	},
    "filtersByReport": {
    	"TestMaster": {
    		"MiscFilters": [{
    			"ControlType": 3,
    			"LoadFromDatabase": true,
    			"ColumnName": "[dbo].[AssetOperationalStatusV].[AreaID]",
    			"Description": "AreaID"
    		}, {
    			"ControlType": 3,
    			"LoadFromDatabase": true,
    			"ColumnName": "[dbo].[AssetOperationalStatusV].[AssetID]",
    			"Description": "AssetID"
    		}, {
    			"ControlType": 3,
    			"DisplayCloseButton": true,
    			"LoadFromDatabase": true,
    			"ColumnName": "[dbo].[AssetOperationalStatusV].[AssetName]",
    			"Description": "AssetName"
    		}, {
    			"ControlType": "Like",
    			"LoadFromDatabase": true,
    			"ColumnName": "[dbo].[AssetOperationalStatusV].[AssetState]",
    			"Description": "AssetState (like)"
    		}, {
    			"ControlType": "Like",
    			"LoadFromDatabase": true,
    			"UseAutosuggest": true,
    			"ColumnName": "[dbo].[AssetOperationalStatusV].[AssetType]",
    			"Description": "AssetType (like autosuggest)",
    			"Values": []
    		}, {
    			"ControlType": 3,
    			"LoadFromDatabase": true,
    			"ColumnName": "[dbo].[AssetOperationalStatusV].[CustomerID]",
    			"Description": "CustomerID"
    		}, {
    			"ControlType": 3,
    			"LoadFromDatabase": true,
    			"ColumnName": "[dbo].[AssetOperationalStatusV].[Street]",
    			"Description": "Street"
    		}, {
    			"ControlType": 3,
    			"LoadFromDatabase": true,
    			"ColumnName": "[dbo].[AssetOperationalStatusV].[Suburb]",
    			"Description": "Suburb"
    		}, {
    			"ControlType": 5,
    			"ColumnName": "[dbo].[AssetOperationalStatusV].[Time of Reported Status]",
    			"Description": "Time of Reported Status"
    		}]
    	},
        "Asset Event Detail": {
        	"Joins": {},
            "RegularFilters": [],
            "DDFilter": {
            	"Uid": "DDFilter1",
				"ControlType": 1,
				"DisplayCloseButton": true,
				"LoadFromDatabase": true,
				"UseAutosuggest": false,
				"Type": "int",
				"ColumnName": "[dbo].[AssetEventListV].[EventUid]",
				"Description": "EventUid",
				"IsDD": true,
				"Values": []
            },
            "MiscFilters": [],
            "Groups": []
        },
        "Credit Card Reconciliation": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Batch ID",
            	"Items": [{
            		"Uid": "batchFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"IsRequired": true,
            		"ColumnName": "[dbo].[CreditCardReconciliationV].[BatchID]",
            		"Description": "Batch ID",
            		"Values": []
            	}] 
            }, {
            	"Description": "Location",
            	"Items": [{
            		"Uid": "locationFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CreditCardReconciliationV].[Area]",
            		"Description": "Area",
            		"Values": []
            	}, {
            		"Uid": "locationFilter2",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CreditCardReconciliationV].[Zone]",
            		"Description": "Zone",
            		"Values": []
            	}, {
            		"Uid": "locationFilter3",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CreditCardReconciliationV].[Street]",
            		"Description": "Street",
            		"Values": []
            	}, {
            		"Uid": "locationFilter4",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CreditCardReconciliationV].[Suburb]",
            		"Description": "Suburb",
            		"Values": []
            	}, {
            		"Uid": "locationFilter5",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CreditCardReconciliationV].[MeterName]",
            		"Description": "Meter",
            		"Values": []
            	}]
            }]
        },
        "Occupancy Rate Report - Summary": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Required",
            	"Items": [{
            		"Uid": "timeFilter1",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"IsRequired": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[ArrivalTime]",
            		"Description": "Arrival Time",
            		"Values": ["%midnight%", "%today%"]
            	}]
            }, {
            	"Description": "Time",
            	"Items": [{
            		"Uid": "timeFilter2",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[DepartureTime]",
            		"Description": "Departure Time",
            		"Values": ["%midnight%", "%today%"]
            	}, {
            		"Uid": "timeFilter3",
            		"ControlType": 1,
            		"IsRequired": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[TimeArrivalStart(Param)]",
            		"Description": "Start of Arrival Time Range",
            		"Values": []
            	}, {
            		"Uid": "timeFilter4",
            		"ControlType": 1,
            		"IsRequired": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[TimeArrivalEnd(Param)]",
            		"Description": "End of Arrival Time Range",
            		"Values": []
            	}]
            }, {
            	"Description": "Time Class",
            	"Items": [{
            		"Uid": "timeClassFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[TimeClass1]",
            		"Description": "Weekday/Weekend",
            		"Values": []
            	}, {
            		"Uid": "timeClassFilter2",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[TimeClass2]",
            		"Description": "Day of Week",
            		"Values": []
            	}, {
            		"Uid": "timeClassFilter3",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[TimeClass3]",
            		"Description": "Morning/Evening",
            		"Values": []
            	}]
            }, {
            	"Description": "Location",
            	"Items": [{
            		"Uid": "locationFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[Area]",
            		"Description": "Area",
            		"Values": []
            	}, {
            		"Uid": "locationFilter2",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[Zone]",
            		"Description": "Zone",
            		"Values": []
            	}, {
            		"Uid": "locationFilter3",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[Street]",
            		"Description": "Street",
            		"Values": []
            	}, {
            		"Uid": "locationFilter4",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[Suburb]",
            		"Description": "Suburb",
            		"Values": []
            	}, {
            		"Uid": "locationFilter5",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[MeterID]",
            		"Description": "Meter",
            		"Values": []
            	}, {
            		"Uid": "locationFilter6",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[SensorID]",
            		"Description": "Sensor",
            		"Values": []
            	}, {
            		"Uid": "locationFilter7",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[SpaceID]",
            		"Description": "Space",
            		"Values": []
            	}]
            }, {
            	"Description": "Space Type",
            	"Items": [{
            		"Uid": "spaceTypeFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummary_SP].[SpaceType]",
            		"Description": "Space Type",
            		"Values": []
            	}]
            }]
        },
        "Occupancy Rate Report - Detail": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Time",
            	"Items": [{
            		"Uid": "timeFilter1",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummaryV].[ArrivalTime]",
            		"Description": "Arrival Time",
            		"Values": []
            	}, {
            		"Uid": "timeFilter2",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummaryV].[DepartureTime]",
            		"Description": "Departure Time",
            		"Values": []
            	}]
            }, {
            	"Description": "Time Class",
            	"Items": [{
            		"Uid": "timeClassFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummaryV].[TimeType1]",
            		"Description": "Weekday/Weekend",
            		"Values": []
            	}, {
            		"Uid": "timeClassFilter2",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummaryV].[TimeType2]",
            		"Description": "Day of Week",
            		"Values": []
            	}, {
            		"Uid": "timeClassFilter3",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[OccupancyRateSummaryV].[TimeType3]",
            		"Description": "Morning/Evening",
            		"Values": []
            	}]
            }]
        },
        "Daily Financial - Summary": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Location",
            	"Items": [{
            		"Uid": "locationFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[DailyFinancialTransactionV].[Area]",
            		"Description": "Area",
            		"Values": []
            	}, {
            		"Uid": "locationFilter2",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[DailyFinancialTransactionV].[ZoneID]",
            		"Description": "Zone",
            		"Values": []
            	}, {
            		"Uid": "locationFilter3",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[DailyFinancialTransactionV].[Street]",
            		"Description": "Street",
            		"Values": []
            	}, {
            		"Uid": "locationFilter4",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[DailyFinancialTransactionV].[Suburb]",
            		"Description": "Suburb",
            		"Values": []
            	}, {
            		"Uid": "locationFilter5",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[DailyFinancialTransactionV].[MeterName]",
            		"Description": "Meter Name",
            		"Values": []
            	}]
            }, {
            	"Description": "Required",
            	"Items": [{
            		"Uid": "timeFilter1",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"IsRequired": true,
            		"ColumnName": "[dbo].[DailyFinancialTransactionV].[TransactionTime]",
            		"Description": "Transaction Time",
            		"Values": ["%midnight%", "%today%"]
            	}]
            }, {
            	"Description": "Payment Method",
            	"Items": [{
            		"Uid": "paymentFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[DailyFinancialTransactionV].[PaymentType]",
            		"Description": "Payment Method",
            		"Values": []
            	}]
            }, {
            	"Description": "Payment Status",
            	"Items": [{
            		"Uid": "paymentStatusFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[DailyFinancialTransactionV].[TransactionStatus]",
            		"Description": "Payment Status",
            		"Values": []
            	}]
            }, {
            	"Description": "Discount Scheme",
            	"Items": [{
            		"Uid": "discountFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[DailyFinancialTransactionV].[DiscountSchemeName]",
            		"Description": "Discount Scheme",
            		"Values": []
            	}]
            }]
        },
        "Daily Financial - Detail": {
        	"Joins": {},
            "RegularFilters": [],
            "DDFilter": {
            	"Uid": "DDFilter1",
				"ControlType": 1,
				"DisplayCloseButton": true,
				"LoadFromDatabase": true,
				"UseAutosuggest": false,
				"Type": "string",
				"ColumnName": "[dbo].[DailyFinancialTransactionV].[MeterName]",
				"Description": "Meter Name",
				"IsDD": true,
				"Values": []
            },
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Time",
            	"Items": [{
            		"Uid": "timeFilter1",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": false,
            		"ColumnName": "[dbo].[DailyFinancialTransactionV].[TransactionTime]",
            		"Description": "Transaction Time",
            		"Values": ["%midnight%", "%today%"]
            	}]
            }, {
            	"Description": "Payment Methods",
            	"Items": [{
            		"Uid": "paymentFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[DailyFinancialTransactionV].[PaymentType]",
            		"Description": "Payment Type",
            		"Values": []
            	}]
            }, {
            	"Description": "Payment Status",
            	"Items": [{
            		"Uid": "paymentStatusFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[DailyFinancialTransactionV].[TransactionStatus]",
            		"Description": "Payment Status",
            		"Values": []
            	}]
            }, {
            	"Description": "Discount Scheme",
            	"Items": [{
            		"Uid": "discountFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[DailyFinancialTransactionV].[DiscountSchemeName]",
            		"Description": "Discount Scheme",
            		"Values": []
            	}]
            }]
        },
        "Non-Compliance Rate Report - Detail": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Time",
            	"Items": [{
            		"Uid": "timeFilter1",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"IsRequired": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[TimeOfEvent]",
            		"Description": "Entry Time",
            		"Values": ["%midnight%", "%today%"]
            	}, {
            		"Uid": "timeFilter2",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[EndTimeOfEvent]",
            		"Description": "Exit Time",
            		"Values": ["%midnight%", "%today%"]
            	}]
            }, {
            	"Description": "Event Type - FNP",
            	"Items": [{
            		"Uid": "eventFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[SpaceType]",
            		"Description": "Event Type",
            		"Values": []
            	}]
            }, {
            	"Description": "Non Compliance Type",
            	"Items": [{
            		"Uid": "complianceFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[NonCompliance]",
            		"Description": "Non Compliance",
            		"Values": []
            	}]
            }]
        },
        "Non-Compliance Rate Report - Summary": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Time",
            	"Items": [{
            		"Uid": "timeFilter1",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[TimeOfEvent]",
            		"Description": "Entry Time",
            		"Values": ["%midnight%", "%today%"]
            	}, {
            		"Uid": "timeFilter2",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[EndTimeOfEvent]",
            		"Description": "Exit Time",
            		"Values": ["%midnight%", "%today%"]
            	}]
            }, {
            	"Description": "Location",
            	"Items": [{
            		"Uid": "locationFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[AreaID]",
            		"Description": "Area ID",
            		"Values": []
            	}, {
            		"Uid": "locationFilter2",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[ZoneID]",
            		"Description": "Zone ID",
            		"Values": []
            	}, {
            		"Uid": "locationFilter3",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[Street]",
            		"Description": "Street",
            		"Values": []
            	}, {
            		"Uid": "locationFilter4",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[Suburb]",
            		"Description": "Suburb",
            		"Values": []
            	}, {
            		"Uid": "locationFilter5",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[MeterID]",
            		"Description": "Meter ID",
            		"Values": []
            	}, {
            		"Uid": "locationFilter6",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[SensorID]",
            		"Description": "Sensor ID",
            		"Values": []
            	}, {
            		"Uid": "locationFilter7",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[SpaceID]",
            		"Description": "Space ID",
            		"Values": []
            	}]
            }, {
            	"Description": "Time Class",
            	"Items": [{
            		"Uid": "timeClassFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[TimeClass]",
            		"Description": "Time Class",
            		"Values": []
            	}]
            }, {
            	"Description": "Space Type",
            	"Items": [{
            		"Uid": "spaceTypeFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[SpaceType]",
            		"Description": "Space Type",
            		"Values": []
            	}]
            }, {
            	"Description": "Non Compliance Type",
            	"Items": [{
            		"Uid": "complianceFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[NonComplianceRate_view].[NonCompliance]",
            		"Description": "Non Compliance",
            		"Values": []
            	}]
            }]
        },
        "Total Income Summary": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Location",
            	"Items": [{
            		"Uid": "locationFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[TotalIncomeSummaryV].[Area]",
            		"Description": "Area",
            		"Values": []
            	}, {
            		"Uid": "locationFilter2",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[TotalIncomeSummaryV].[Zone]",
            		"Description": "Zone",
            		"Values": []
            	}, {
            		"Uid": "locationFilter3",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[TotalIncomeSummaryV].[Street]",
            		"Description": "Street",
            		"Values": []
            	}, {
            		"Uid": "locationFilter4",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[TotalIncomeSummaryV].[Suburb]",
            		"Description": "Suburb",
            		"Values": []
            	}, {
            		"Uid": "locationFilter5",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[TotalIncomeSummaryV].[AssetID]",
            		"Description": "Asset",
            		"Values": []
            	}]
            }, {
            	"Description": "Time",
            	"Items": [{
            		"Uid": "timeFilter1",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"Isrequired": true,
            		"ColumnName": "[dbo].[TotalIncomeSummaryV].[TransactionDateTime]",
            		"Description": "Transaction Time",
            		"Values": ["%midnight%", "%today%"]
            	}]
            }, {
            	"Description": "Payment Method",
            	"Items": [{
            		"Uid": "methodFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[TotalIncomeSummaryV].[TransactionType]",
            		"Description": "Payment Method",
            		"Values": []
            	}]
            }, {
            	"Description": "Payment Status",
            	"Items": [{
            		"Uid": "statusFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[TotalIncomeSummaryV].[TransactionStatus]",
            		"Description": "Payment Status",
            		"Values": []
            	}]
            }, {
            	"Description": "Discount Scheme",
            	"Items": [{
            		"Uid": "schemeFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[TotalIncomeSummaryV].[DiscountScheme]",
            		"Description": "Discount Scheme",
            		"Values": []
            	}]
            }]
        },
        "Customer Payment Transaction List": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Batch ID",
            	"Items": [{
            		"Uid": "BatchIDFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[BatchID]",
            		"Description": "Batch ID",
            		"Values": []
            	}]
            }, {
            	"Description": "Payment",
            	"Items": [{
            		"Uid": "paymentStatusFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[TransactionStatus]",
            		"Description": "Payment Status",
            		"Values": []
            	}, {
            		"Uid": "paymentMethodFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[PaymentMethod]",
            		"Description": "Payment Method",
            		"Values": []
            	}, {
            		"Uid": "paymentAmountFilter1",
            		"ControlType": 2,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[LastTxAmountInCent]",
            		"Description": "Payment Amount (in Cents)",
            		"Values": ["0", "100"]
            	}]
            }, {
            	"Description": "Required",
            	"Items": [{
            		"Uid": "timeFilter1",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"IsRequired": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[TimeOfTransaction]",
            		"Description": "Time of Transaction",
            		"Values": ["%midnight%", "%today%"]
            	}]
            }, {
            	"Description": "Time",
            	"Items": [{
            		"Uid": "timeFilter2",
            		"ControlType": 2,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[TimePaid]",
            		"Description": "Time Paid (in Minutes)",
            		"Values": ["0", "100"]
            	}]
            }, {
            	"Description": "Time Options",
            	"Items": [{
            		"Uid": "timeClassFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[TimeClass1]",
            		"Description": "Weekday/Weekend",
            		"Values": []
            	}, {
            		"Uid": "timeClassFilter2",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[TimeClass2]",
            		"Description": "Day of Week",
            		"Values": []
            	}, {
            		"Uid": "timeClassFilter3",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[TimeClass3]",
            		"Description": "Time of Day",
            		"Values": []
            	}, {
            		"Uid": "sensorZeroFilter1",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[SensorZeroTime]",
            		"Description": "Sensor Zero Time",
            		"Values": [
			"%midnight%",
			"%today%"
            		]
            	}, {
            		"Uid": "timeMeasureFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[15 minutes free Used]",
            		"Description": "15 Minutes Free Used",
            		"Values": []
            	}]
            }, {
            	"Description": "Location",
            	"Items": [{
            		"Uid": "locationFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[Area]",
            		"Description": "Area",
            		"Values": []
            	}, {
            		"Uid": "locationFilter2",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[ZoneID]",
            		"Description": "Zone",
            		"Values": []
            	}, {
            		"Uid": "locationFilter3",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[Street]",
            		"Description": "Street",
            		"Values": []
            	}, {
            		"Uid": "locationFilter4",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[Suburb]",
            		"Description": "Suburb",
            		"Values": []
            	}, {
            		"Uid": "locationFilter5",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[MeterID]",
            		"Description": "Meter",
            		"Values": []
            	}, {
            		"Uid": "locationFilter6",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[SensorID]",
            		"Description": "Sensor",
            		"Values": []
            	}, {
            		"Uid": "locationFilter7",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CustomerPaymentTransactionV].[SpaceID]",
            		"Description": "Space",
            		"Values": []
            	}]
            }]
        },
        "Collection Run Reconciliation - Summary": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Collection Run Time",
            	"Items": [{
            		"Uid": "collTimeFilter1",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"IsRequired": true,
            		"ColumnName": "[dbo].[CollReconDetCBRCOMMSsubV].[CollectionDateTime]",
            		"Description": "Collection Run Date",
            		"Values": ["%midnight%", "%today%"]
            	}]
            }, {
            	"Description": "Exception",
            	"Items": [{
            		"Uid": "exceptionFilter1",
            		"ControlType": 2,
            		"DisplayCloseButton": true,
            		"ColumnName": "[dbo].[CollReconDetCBRCOMMSsubV].[MaxDiscrepancy]",
            		"Description": "Exception",
            		"Values": ["0", "1"]
            	}]
            }, {
            	"Description": "Collection Routes",
            	"Items": [{
            		"Uid": "collectionRouteFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CollReconDetCBRCOMMSsubV].[CollectionRunID]",
            		"Description": "Collection Run Id",
            		"Values": []
            	}]
            }]
        },
        "Collection Run by Date Meter Detail": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Collection Run Time",
            	"Items": [{
            		"Uid": "collTimeFilter1",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CollReconDetCBRCOMMSsubV].[CollectionDateTime]",
            		"Description": "Collection Run Date",
            		"Values": ["%midnight%", "%today%"]
            	}]
            }, {
            	"Description": "Exception",
            	"Items": [{
            		"Uid": "exceptionFilter1",
            		"ControlType": 2,
            		"DisplayCloseButton": true,
            		"ColumnName": "[dbo].[CollReconDetCBRCOMMSsubV].[MaxDiscrepancy]",
            		"Description": "Exception",
            		"Values": ["0", "1"]
            	}]
            }, {
            	"Description": "Collection Routes",
            	"Items": [{
            		"Uid": "collectionRouteFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CollReconDetCBRCOMMSsubV].[CollectionRunID]",
            		"Description": "Collection Run Id",
            		"Values": []
            	}]
            }]
        },
        "Current Meter Amounts": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Location",
            	"Items": [{
            		"Uid": "locationFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CurrentMeterAmountsV].[Area]",
            		"Description": "Area",
            		"Values": []
            	}, {
            		"Uid": "locationFilter2",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CurrentMeterAmountsV].[Zone]",
            		"Description": "Zone",
            		"Values": []
            	}, {
            		"Uid": "locationFilter3",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CurrentMeterAmountsV].[Street]",
            		"Description": "Street",
            		"Values": []
            	}, {
            		"Uid": "locationFilter4",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CurrentMeterAmountsV].[Suburb]",
            		"Description": "Suburb",
            		"Values": []
            	}, {
            		"Uid": "locationFilter5",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[CurrentMeterAmountsV].[AssetID]",
            		"Description": "Asset",
            		"Values": []
            	}]
            }]
        },
        "Meter Uptime": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Required",
            	"Items": [{
            		"Uid": "meterTimeFilter1",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"IsRequired": true,
            		"ColumnName": "[dbo].[MeterUptimeV].[ReportingDate]",
            		"Description": "Reporting Date",
            		"Values": ["%midnight%", "%today%"]
            	}]
            }, {
            	"Description": "Location",
            	"Items": [{
            		"Uid": "locationFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[MeterUptimeV].[Area]",
            		"Description": "Area",
            		"Values": []
            	}, {
            		"Uid": "locationFilter2",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[MeterUptimeV].[Zone]",
            		"Description": "Zone",
            		"Values": []
            	}, {
            		"Uid": "locationFilter3",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[MeterUptimeV].[Street]",
            		"Description": "Street",
            		"Values": []
            	}, {
            		"Uid": "locationFilter4",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[MeterUptimeV].[Suburb]",
            		"Description": "Suburb",
            		"Values": []
            	}, {
            		"Uid": "locationFilter5",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[MeterUptimeV].[AssetID]",
            		"Description": "Asset",
            		"Values": []
            	}]
            }, {
            	"Description": "Demand Type",
            	"Items": [{
            		"Uid": "demandFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[MeterUptimeV].[SpaceDemandType]",
            		"Description": "Demand Type",
            		"Values": []
            	}]
            }]
        },
        "Asset Operational Status": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Asset Type",
            	"Items": [{
            		"Uid": "assetTypeFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[AssetOperationalStatusV].[AssetType]",
            		"Description": "Asset Type",
            		"Values": []
            	}]
            }, {
            	"Description": "Required",
            	"Items": [{
            		"Uid": "meterTimeFilter1",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"IsRequired": true,
            		"ColumnName": "[dbo].[AssetOperationalStatusV].[ReportingDate]",
            		"Description": "Reporting Time",
            		"Values": ["%midnight%", "%today%"]
            	}]
            }, {
            	"Description": "Time Class",
            	"Items": [{
            		"Uid": "timeClassFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[AssetOperationalStatusV].[TimeClass1]",
            		"Description": "Weekday/Weekend",
            		"Values": []
            	}, {
            		"Uid": "timeClassFilter2",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[AssetOperationalStatusV].[TimeClass2]",
            		"Description": "Day of Week",
            		"Values": []
            	}, {
            		"Uid": "timeClassFilter3",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[AssetOperationalStatusV].[TimeClass3]",
            		"Description": "Time of Day",
            		"Values": []
            	}]
            }, {
            	"Description": "Location",
            	"Items": [{
            		"Uid": "locationFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[AssetOperationalStatusV].[Area]",
            		"Description": "Area",
            		"Values": []
            	}, {
            		"Uid": "locationFilter2",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[AssetOperationalStatusV].[Zone]",
            		"Description": "Zone",
            		"Values": []
            	}, {
            		"Uid": "locationFilter3",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[AssetOperationalStatusV].[Street]",
            		"Description": "Street",
            		"Values": []
            	}, {
            		"Uid": "locationFilter4",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[AssetOperationalStatusV].[Suburb]",
            		"Description": "Suburb",
            		"Values": []
            	}, {
            		"Uid": "locationFilter5",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[MAssetOperationalStatusV].[AssetID]",
            		"Description": "Asset",
            		"Values": []
            	}]
            }]
        },
        "123": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [{
            	"Uid": "miscFilter1",
            	"ControlType": 1,
            	"IsRequired": true,
            	"DisplayCloseButton": false,
            	"ColumnName": "[dbo].[ActiveAlarmsV].[AlarmCodeDesc]",
            	"UseAutosuggest": true,
            	"LoadFromDatabase": true,
            	"Description": "AlarmCodeDesc like"
            }, {
            	"Uid": "miscFilter2",
            	"IsRequired": true,
            	"ControlType": 2,
            	"DisplayCloseButton": false,
            	"ColumnName": "[dbo].[ActiveAlarmsV].[AlarmCode]",
            	"Description": "AlarmCode bettween",
            	"Values": [0, 10000]
            }, {
            	"Uid": "miscFilter3",
            	"ControlType": 3,
            	"DisplayCloseButton": true,
            	"ColumnName": "[dbo].[ActiveAlarmsV].[AlarmCode]",
            	"Description": "AlarmCode equals select",
            	"Values": []
            }, {
            	"Uid": "miscFilter4",
            	"ControlType": 4,
            	"DisplayCloseButton": true,
            	"ColumnName": "[dbo].[ActiveAlarmsV].[Time Of Occurrence]",
            	"Description": "Time Of Occurence in time period",
            	"Values": []
            }, {
            	"Uid": "miscFilter5",
            	"ControlType": 5,
            	"DisplayCloseButton": true,
            	"ColumnName": "[dbo].[ActiveAlarmsV].[Time Of Occurrence]",
            	"Description": "Time Of Occurence",
            	"Values": ["%midnight%", "%today%"]
            }, {
            	"Uid": "miscFilter7",
            	"ControlType": 7,
            	"DisplayCloseButton": true,
            	"ColumnName": "[dbo].[ActiveAlarmsV].[AlarmCodeDesc]",
            	"Description": "AlarmCodeDesc equals text area",
            	"Values": []
            }, {
            	"Uid": "miscFilter8",
            	"ControlType": 8,
            	"DisplayCloseButton": true,
            	"ColumnName": "[dbo].[ActiveAlarmsV].[AlarmCodeDesc]",
            	"Description": "AlarmCodeDesc equals checkbox",
            	"Value": "Jam - Input Opto Sensor Alarm,Cashbox Removed Alarm",
            	"Values": []
            }, {
            	"Uid": "miscFilter9",
            	"ControlType": 9,
            	"DisplayCloseButton": true,
            	"ColumnName": "[dbo].[ActiveAlarmsV].[Time Of Occurrence]",
            	"Description": "Time Of Occurence equals calendar",
            	"Values": []
            }, {
            	"Uid": "miscFilter10",
            	"ControlType": 10,
            	"DisplayCloseButton": true,
            	"ColumnName": "[dbo].[ActiveAlarmsV].[AlarmCodeDesc]",
            	"Description": "AlarmCodeDesc equals multiple",
            	"Value": "Jam - Input Opto Sensor Alarm,Cashbox Removed Alarm",
            	"Values": []
            }, {
            	"Uid": "miscFilter11",
            	"ControlType": 1,
            	"DisplayCloseButton": true,
            	"ColumnName": "[dbo].[ActiveAlarmsV].[AlarmCodeDesc]",
            	"Description": "AlarmCodeDesc begins with",
            	"OperatorFriendlyName": "Begins With",
            	"Value": "",
            	"Values": []
            }, {
            	"Uid": "miscFilter12",
            	"ControlType": 1,
            	"DisplayCloseButton": true,
            	"ColumnName": "[dbo].[ActiveAlarmsV].[AlarmCodeDesc]",
            	"Description": "AlarmCodeDesc not equal",
            	"Not": true,
            	"Value": "",
            	"Values": []
            }],
            "Groups": []
        },
        "Asset Fault Analysis": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Asset Type",
            	"Items": [{
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[A_EventsAlarmsTransactionsV].[AssetType]",
            		"Description": "Asset Type",
            		"Values": []
            	}]
            }, {
            	"Description": "Required",
            	"Items": [{
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"IsRequired": true,
            		"ColumnName": "[dbo].[A_LastCollectionAndGSMConnectionV].[LastCommunicationTime]",
            		"Description": "Last Connection Time",
            		"Values": ["%midnight%", "%today%"]
            	}]
            }, {
            	"Description": "Alarm Code",
            	"Items": [{
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[A_EventsAlarmsTransactionsV].[AlarmCode]",
            		"Description": "Alarm Code",
            		"Values": []
            	}]
            }, {
            	"Description": "Event ID",
            	"Items": [{
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[A_EventsAlarmsTransactionsV].[EventUID]",
            		"Description": "Event ID",
            		"Values": []
            	}]
            }, {
            	"Description": "Location",
            	"Items": [{
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[A_EventsAlarmsTransactionsV].[Area]",
            		"Description": "Area",
            		"Values": []
            	}, {
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[A_EventsAlarmsTransactionsV].[Zone]",
            		"Description": "Zone",
            		"Values": []
            	}, {
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[A_EventsAlarmsTransactionsV].[Street]",
            		"Description": "Street",
            		"Values": []
            	}, {
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[A_EventsAlarmsTransactionsV].[Suburb]",
            		"Description": "Suburb",
            		"Values": []
            	}, {
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[A_EventsAlarmsTransactionsV].[AssetId]",
            		"Description": "Asset",
            		"Values": []
            	}]
            }]
        },
        "MSM Sensor Attribute Status Exceptions Summary": {
        	"Joins": {},
            "RegularFilters": [],
            "MiscFilters": [],
            "Groups": [{
            	"Description": "Asset Type",
            	"Items": [{
            		"Uid": "assetTypeFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[MSM_Sensor_Gateway_AttribStatExceptsSummV].[AssetType]",
            		"Description": "Asset Type",
            		"Values": []
            	}]
            }, {
            	"Description": "Required",
            	"Items": [{
            		"Uid": "meterTimeFilter1",
            		"ControlType": 5,
            		"DisplayCloseButton": true,
            		"IsRequired": true,
            		"ColumnName": "[dbo].[MSM_Sensor_Gateway_AttribStatExceptsSummV].[Time of Last Status Report]",
            		"Description": "Time of Last Status Report",
            		"Values": ["%midnight%", "%today%"]
            	}]
            }, {
            	"Description": "Attribute",
            	"Items": [{
            		"Uid": "AttributeFilter1",
            		"ControlType": 2,
            		"DisplayCloseButton": true,
            		"ColumnName": "[dbo].[MSM_Sensor_Gateway_AttribStatExceptsSummV].[MSM_MinTemp]",
            		"Description": "Minimum Temperature",
            		"Values": ["0", "1"]
            	}, {
            		"Uid": "AttributeFilter2",
            		"ControlType": 2,
            		"DisplayCloseButton": true,
            		"ColumnName": "[dbo].[MSM_Sensor_Gateway_AttribStatExceptsSummV].[MSM_MaxTemp]",
            		"Description": "Maximum Temperature",
            		"Values": ["0", "1"]
            	}, {
            		"Uid": "AttributeFilter3",
            		"ControlType": 2,
            		"DisplayCloseButton": true,
            		"ColumnName": "[dbo].[MSM_Sensor_Gateway_AttribStatExceptsSummV].[MSM_CurrVoltDryBattery]",
            		"Description": "Current Battery Voltage",
            		"Values": ["0", "1"]
            	}, {
            		"Uid": "AttributeFilter4",
            		"ControlType": 2,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[MSM_Sensor_Gateway_AttribStatExceptsSummV].[MSM_MinVoltDryBattery]",
            		"Description": "Minimum Battery Voltage",
            		"Values": ["0", "1"]
            	}, {
            		"Uid": "AttributeFilter5",
            		"ControlType": 2,
            		"DisplayCloseButton": true,
            		"ColumnName": "[dbo].[MSM_Sensor_Gateway_AttribStatExceptsSummV].[MSM_CurrVoltSolarBattery]",
            		"Description": "Current Solar Voltage",
            		"Values": ["0", "1"]
            	}, {
            		"Uid": "AttributeFilter6",
            		"ControlType": 2,
            		"DisplayCloseButton": true,
            		"ColumnName": "[dbo].[MSM_Sensor_Gateway_AttribStatExceptsSummV].[MSM_MinVoltSolarBatt]",
            		"Description": "Minimum Solar Voltage",
            		"Values": ["0", "1"]
            	}]
            }, {
            	"Description": "Location",
            	"Items": [{
            		"Uid": "locationFilter1",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[MSM_Sensor_Gateway_AttribStatExceptsSummV].[Area]",
            		"Description": "Area",
            		"Values": []
            	}, {
            		"Uid": "locationFilter2",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[MSM_Sensor_Gateway_AttribStatExceptsSummV].[Zone]",
            		"Description": "Zone",
            		"Values": []
            	}, {
            		"Uid": "locationFilter3",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[MSM_Sensor_Gateway_AttribStatExceptsSummV].[Street]",
            		"Description": "Street",
            		"Values": []
            	}, {
            		"Uid": "locationFilter4",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[MSM_Sensor_Gateway_AttribStatExceptsSummV].[Suburb]",
            		"Description": "Suburb",
            		"Values": []
            	}, {
            		"Uid": "locationFilter5",
            		"ControlType": 3,
            		"DisplayCloseButton": true,
            		"LoadFromDatabase": true,
            		"ColumnName": "[dbo].[MSM_Sensor_Gateway_AttribStatExceptsSummV].[AssetId]",
            		"Description": "Asset",
            		"Values": []
            	}]
            }]
        },
        "test required filter":
    		{
    			"Joins": {},
				"RegularFilters": [],
				"MiscFilters": [{
					"ControlType": 3,
					"DisplayCloseButton": true,
					"LoadFromDatabase": true,
					"ColumnName": "[dbo].[MeterUptimeV].[Area]",
					"Description": "Area",
					"Values": []
				}, {
					"ControlType": 3,
					"DisplayCloseButton": true,
					"LoadFromDatabase": true,
					"ColumnName": "[dbo].[MeterUptimeV].[MeterName]",
					"Description": "MeterName",
					"Values": []
				}],
				"Groups": []
    		}
    }
}