using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;
using Izenda.AdHoc;
using Izenda.AdHoc.Database;
using Izenda.AdHoc.Webservices;
using MVC4Razor2.Models;

namespace MVC4Razor2.Reporting
{
	public class RsDuncan : Page
	{
		public static bool ProcessRequest(HttpRequest req, HttpResponse resp) {
			var wsCommand = req.Params["wscmd"];
			if (!String.IsNullOrEmpty(wsCommand)) {
				var wsArgs = new List<string>();
				var argNum = 0;
				var arg = req.Params["wsarg" + argNum];
				while (arg != null) {
					wsArgs.Add(arg);
					argNum++;
					arg = req.Params["wsarg" + argNum];
				}
				var response = "";
				switch (wsCommand) {
					case "ApplyFiltersFiltersNew":
						response = ApplyFiltersFiltersNew(wsArgs);
						break;
					case "getfiltersdata":
						response = GetFiltersData();
						break;
					case "GetActiveAdditionalFilters":
						response = GetActiveAdditionalFilters(wsArgs);
						break;
				}
				resp.Clear();
				resp.ContentType = "application/json";
				resp.Cache.SetExpires(DateTime.UtcNow.AddDays(-1));
				resp.Cache.SetValidUntilExpires(false);
				resp.Cache.SetRevalidation(HttpCacheRevalidation.AllCaches);
				resp.Cache.SetCacheability(HttpCacheability.NoCache);
				resp.Cache.SetNoStore();
				resp.Cache.SetMaxAge(new TimeSpan(0));
				resp.Write(response);
				resp.End();
				return true;
			}
			return false;
		}

		public static OperatorTypes GetOperatorType(int controlType)
		{
			switch (controlType) {
				case 1:
					return OperatorTypes.Like;
				case 2:
					return OperatorTypes.Between;
				case 3:
					return OperatorTypes.Equals_Select;
				case 4:
					return OperatorTypes.InTimePeriod;
				case 5:
					return OperatorTypes.BetweenTwoDates;
				case 6:
					return OperatorTypes.EqualsPopup;
				case 7:
					return OperatorTypes.Equals_TextArea;
				case 8:
					return OperatorTypes.Equals_CheckBoxes;
				case 9:
					return OperatorTypes.EqualsCalendar;
				case 10:
					return OperatorTypes.Equals_Multiple;
				case 100:
					return OperatorTypes.Equals_Autocomplete;
				default:
					return OperatorTypes.Like;
			}
		}

		public static string ApplyFiltersFiltersNew(List<string> wsArgs) {
			var jss = new JavaScriptSerializer();
			if (wsArgs.Count <= 0)
				return jss.Serialize(new ResultStatus("Data not passed"));
			var obj = jss.DeserializeObject(wsArgs[0]);
			if (obj != null) {
				var newFilters = WebServiceRequestProcessor.DeserializeFilters(obj);

				var reportName = wsArgs[1];
				var reportSet = AdHocSettings.AdHocConfig.LoadFilteredReportSet(Utility.ReportWebNameToNormal(reportName));
try {
if (reportSet.ReportName != AdHocContext.CurrentReportSet.ReportName) {
  AdHocContext.CurrentReportSet = AdHocSettings.AdHocConfig.LoadFilteredReportSet(Utility.ReportWebNameToNormal(reportName));
}
}
catch {}
				var newCollection = new FilterCollection();
				var newAdditionalCollection = new FilterCollection();
				foreach (DeserializedFilter deserializedFilter in newFilters) {
					var uid = deserializedFilter.Uid;
					var columnName = deserializedFilter.Column;
					if (columnName == null)
						throw new NullReferenceException("Column property cannot be null");
					Filter selectedFilter = null;
					foreach (Filter filter in reportSet.Filters) {
						if (filter.Column == columnName) {
							selectedFilter = filter;
						}
					}
					if (selectedFilter == null) {
						// additional filter
						selectedFilter = new AdditionalFilter();
						selectedFilter.Column = columnName;
						selectedFilter.Description = deserializedFilter.Description;
						selectedFilter.Not = deserializedFilter.Not;
						selectedFilter.Operator = GetOperatorType(deserializedFilter.Operator);
						selectedFilter.LinkedColumns = deserializedFilter.LinkedColumns;
						if (!string.IsNullOrEmpty(deserializedFilter.OperatorFriendlyName)) {
							string operatorFriendlyName = deserializedFilter.OperatorFriendlyName;
							if (selectedFilter.dbColumn != null) {
								var filterOperators = ResponseServer.GetOperatorList(selectedFilter.dbColumn.SqlType,
									  selectedFilter.dbColumn.Table.Type == TableType.StoredProcedure, selectedFilter.dbColumn.FullName);
								foreach (ListItemCollection opGroup in filterOperators.Values)
									foreach (ListItem li in opGroup) {
										OperatorTypes opType;
										if ((li.Text == operatorFriendlyName || li.Value == operatorFriendlyName) && OperatorTypes.TryParse(li.Value, true, out opType)) {
											selectedFilter.Operator = opType;
										}
									}
							}
							if (operatorFriendlyName.ToLower() == "begins with") {
								selectedFilter.Operator = OperatorTypes.BeginsWith;
							}
						}
					}

					// set filter values
					var multipleValues = (deserializedFilter.Values.Length > 1 || FilterData.GetControlType(selectedFilter.Operator) == 2);
					if (!multipleValues) {
						selectedFilter.Value = deserializedFilter.Values[0];
						if (selectedFilter.Value == null)
							selectedFilter.Value = "";
						if (selectedFilter.Value is int) {
							selectedFilter.Operator = OperatorTypes.Equals;
						}
					} else
						selectedFilter.Values = deserializedFilter.Values;
					newAdditionalCollection.Add(selectedFilter);
				}
				reportSet.Filters.Clear();
				reportSet.Filters = newCollection;
				RsDuncan.AddRangeSafe(reportSet.Filters, newAdditionalCollection);
				RsDuncan.AddRangeSafe(AdHocContext.CurrentReportSet.Filters, newAdditionalCollection);
				AdditionalFiltersStorage.StoreAdditionalFiltersInSession(reportName, newAdditionalCollection);

				if (reportSet.Summary != null) {
					string targetReportName = null;
					foreach (Field field in reportSet.Summary.Fields) {
						if (!string.IsNullOrEmpty(field.TargetReport)) {
							targetReportName = field.TargetReport;
						}
					}
					if (targetReportName != null) {
						reportSet.Summary.Filters.Clear();
						reportSet.Summary.Filters = newCollection;
						RsDuncan.AddRangeSafe(reportSet.Summary.Filters, newAdditionalCollection);
						AdditionalFiltersStorage.StoreAdditionalFiltersInSession(targetReportName, newAdditionalCollection);
					}
				}
			}
			return jss.Serialize(new ResultStatus("OK"));
		}

		public static string GetFiltersData() {
			var jss = new JavaScriptSerializer();
			var fc = new FilterCollection();
			AddRangeSafe(fc, AdHocContext.CurrentReportSet.Filters);
			var filtersData = new FiltersData();
			filtersData.Initialize(fc, AdHocContext.CurrentReportSet);
			return jss.Serialize(filtersData);
		}

		public static void AddRangeSafe(FilterCollection filters, FilterCollection filtersToAdd) {
			foreach (Filter filter in filtersToAdd) {
				AddFilterSafe(filters, filter);
			}
		}

		public static void AddFilterSafe(FilterCollection filters, Filter filterToAdd) {
			if (filters == null)
				throw new ArgumentNullException("filters");
			if (filterToAdd == null)
				throw new ArgumentNullException("filterToAdd");
			var found = false;
			foreach (Filter filter in filters) {
				if (filter.dbColumn == filterToAdd.dbColumn) {
					found = true;
					filter.Operator = filterToAdd.Operator;
					filter.Value = filterToAdd.Value;
					filter.Values = filterToAdd.Values;
					break;
				}
			}
			if (!found) {
				filters.Add(filterToAdd);
			}
		}

		public static string GetActiveAdditionalFilters(List<string> wsArgs) {

			var reportName = wsArgs[0];
			var reportSet = AdHocSettings.AdHocConfig.LoadFilteredReportSet(Utility.ReportWebNameToNormal(reportName));

			var isDrillDown = false;
			string masterName = null;
			string ddValue = null;
			if (wsArgs != null) {
				if (wsArgs.Count > 2) {
					isDrillDown = true;
					masterName = wsArgs[1];
					ddValue = wsArgs[2]; // not used yet, but reserved for future
				}
			}

			var jss = new JavaScriptSerializer();
			var fc = new FilterCollection();

			if (reportSet.Filters.Count > 0) {
				AddRangeSafe(fc, reportSet.Filters);
			}

			// get stored additional filters
			var ownFilters = AdditionalFiltersStorage.GetAdditionalFiltersFromSession(reportName);
			AddRangeSafe(fc, ownFilters);

			// process drilldown data
			if (isDrillDown) {
				var masterFilters = AdditionalFiltersStorage.GetAdditionalFiltersAllFromSession(masterName);
				foreach (Filter filter in masterFilters) {
					foreach (JoinedTable joinedTable in reportSet.JoinedTables) {
						var tableName = joinedTable.TableName;
						if (filter.dbColumn.Table.FullName == tableName) {
							AddFilterSafe(fc, filter);
						}
						// check linked columns
						if (!string.IsNullOrEmpty(filter.LinkedColumns)) {
							var linkedColumns = filter.LinkedColumns.Split(',');
							foreach (var linkedColumn in linkedColumns) {
								if (linkedColumn.IndexOf('.') >= 0) {
									var linkedColumnTable = linkedColumn.Substring(0, linkedColumn.LastIndexOf('.'));
									if (linkedColumnTable == tableName) {
										var newFilter = (Filter)filter.Clone();
										newFilter.Column = linkedColumn;
										AddFilterSafe(fc, newFilter);
									}
								}
							}
						}
					}
				}
				if (ddValue != null && reportSet.DrillDownKey != null) {
					var ddKey = reportSet.DrillDownKey;
					var ddFilter = new AdditionalFilter {
						Operator = OperatorTypes.Equals,
						Value = ddValue,
						Column = ddKey
					};
					AddFilterSafe(fc, ddFilter);
				}
			}

			foreach (Filter f in fc) {
				f.Parameter = true;
			}

			var filtersData = new FiltersData();
			filtersData.Initialize(fc, reportSet);
			return jss.Serialize(filtersData);
		}

		public RsDuncan() {
			this.Load += OnLoad;
		}

		private void OnLoad(object sender, EventArgs eventArgs) {
			ProcessRequest(Request, Response);
		}
	}
}