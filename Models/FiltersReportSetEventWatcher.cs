using System;
using System.Collections.Generic;
using System.Text;
using System.Web;
using Izenda.AdHoc;
using System.Web.UI.WebControls;
using Izenda.Fusion;
using MVC4Razor2.Reporting;

namespace MVC4Razor2.Models
{
	[Serializable]
	public class FiltersReportSetEventWatcher : IReportSetEventWatcher
	{
		private void CleanAdditionalFilters(ReportSet reportSet) {
			var reportName = Utility.GetWebReportName(reportSet);
			var filters = new FilterCollection();
			foreach (Filter filter in reportSet.Filters)
				if (!(filter is AdditionalFilter))
					filters.Add(filter);
			reportSet.Filters.Clear();
			reportSet.Filters.AddRange(filters.ToArray());
			AdditionalFiltersStorage.CleanAdditionalFilterFromSession(reportName);
		}

		private void ResetDescription(ReportSet reportSet) {
			if (reportSet.GetVolatileOption("DefaultDescription") != null) {
				reportSet.Description = reportSet.GetVolatileOption("DefaultDescription") as string;
				reportSet.RemoveVolatileOption("DefaultDescription");
			}
		}


		private string StringifyFilterValue(object val)
		{
			if (val == null)
				return "";
			string result = val.ToString();
			DateTime? dtValue;
			try {
				dtValue = DateTime.Parse(result);
			}
			catch {
				dtValue = null;
			}
			if (dtValue.HasValue)
				result = dtValue.Value.ToString("dd/MM/yyy hh:mm:ss tt");
			return result;
		}

		private void PopulateFiltersDescription(ReportSet reportSet) {
			reportSet.ShowReportParameters = false;
			ResetDescription(reportSet);
			if (reportSet.Filters.Count > 0) {
				reportSet.SetVolatileOption("DefaultDescription", reportSet.Description);

				var result = reportSet.Description ?? "";
				foreach (Izenda.AdHoc.Filter filter in reportSet.Filters)
					if (filter != null && !filter.Hidden && !string.IsNullOrEmpty(filter.Column) && (filter.Value != null && filter.Value != "..." && filter.Value != "" || filter.Values.GetValue(0) != null && filter.Values.GetValue(1) != null)) {
						string columnAlias = null;

						if (reportSet.Detail != null && reportSet.Detail.Fields != null) {
							foreach (Field field in reportSet.Detail.Fields) {
								if (field.ColumnName == filter.dbColumn.FullName) {
									columnAlias = field.ClearDescription;
								}
							}
						}
						columnAlias = filter.Description;

						if (filter.dbColumn != null && columnAlias == null) {
							columnAlias = AdHocSettings.FieldAliases[filter.dbColumn.Name] ?? AdHocSettings.FieldAliases[filter.dbColumn.FullName];
							if (columnAlias == null) {
								columnAlias = filter.dbColumn.Name;
								foreach (string str in AdHocSettings.FieldAliases.AllKeys)
									if (columnAlias.Contains(str))
										columnAlias = columnAlias.Replace(str, AdHocSettings.FieldAliases[str]);
							}
						}
						if (columnAlias == null)
							columnAlias = filter.dbColumn == null ? filter.Description : filter.dbColumn.Name;
						result += Environment.NewLine;
						result += columnAlias;
						result += "  ";
						var operatorName = Utility.GetOperatorName(filter.Operator, filter.Not);

						result += operatorName;
						if (filter.Value != null) {
							var val = filter.Value.ToString();
							switch (filter.Operator) {
								case OperatorTypes.InTimePeriod:
									var lic = ResponseServer.GetPeriodListCollection();
									foreach (ListItem li in lic) {
										if (li.Value == val)
											result += "  " + li.Text;
									}
									break;
								default:									
									result += "  " + StringifyFilterValue(filter.Value);
									break;
							}
						} else if (filter.Values.Length == 2 && filter.Values.GetValue(0) != null && filter.Values.GetValue(1) != null)
							result += "  " + StringifyFilterValue(filter.Values.GetValue(0)) + "     " + StringifyFilterValue(filter.Values.GetValue(1));
					}
				reportSet.Description = result;
			}
		}

		public void PreExecuteReportSet(ReportSet reportSet) {
			var reportName = Utility.GetWebReportName(reportSet);
			var additionalFilters = AdditionalFiltersStorage.GetAdditionalFiltersFromSession(reportName);
			RsDuncan.AddRangeSafe(reportSet.Filters, additionalFilters);

			PopulateFiltersDescription(reportSet);
		}

		public void PostExecuteReportSet(ReportSet reportSet) {
			CleanAdditionalFilters(reportSet);
		}

		public void PreSaveReportSet(string name, ReportSet reportSet) {
			CleanAdditionalFilters(reportSet);
			ResetDescription(reportSet);
		}

		public void PostSaveReportSet(string name, ReportSet reportSet) {
		}

		public void PreLoadReportSet(string name) {
		}

		public void PostLoadReportSet(string name, ReportSet reportSet) {

		}
	}
}
