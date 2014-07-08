using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Izenda.AdHoc;
using Izenda.Web.UI;

namespace MVC4Razor2.Models
{
	public class AdditionalFiltersStorage
	{
		private const string AdditionalFiltersSessionName = "AdditionalFilters";
		private const string AdditionalFiltersAllSessionName = "AdditionalFiltersAll";

		private static Dictionary<string, FilterCollection> FiltersDictionary {
			get {
				object obj = HttpContext.Current.Session[AdditionalFiltersSessionName];
				if (obj == null) {
					obj = new Dictionary<string, FilterCollection>();
					HttpContext.Current.Session[AdditionalFiltersSessionName] = obj;
				}
				return (Dictionary<string, FilterCollection>)obj;
			}
		}

		private static Dictionary<string, FilterCollection> FiltersDictionaryAll {
			get {
				var obj = HttpContext.Current.Session[AdditionalFiltersAllSessionName];
				if (obj == null) {
					obj = new Dictionary<string, FilterCollection>();
					HttpContext.Current.Session[AdditionalFiltersAllSessionName] = obj;
				}
				return (Dictionary<string, FilterCollection>)obj;
			}
		}

		public static void StoreAdditionalFiltersInSession(string reportName, FilterCollection filters) {
			FiltersDictionary[Utility.ReportWebNameToNormal(reportName)] = filters;
			if (filters != null) {
				var fl = new FilterCollection();
				foreach (Filter f in filters) {
					fl.Add(f);
				}
				FiltersDictionaryAll[Utility.ReportWebNameToNormal(reportName)] = fl;
			}
		}

		public static FilterCollection GetAdditionalFiltersFromSession(string reportName) {
			var rn = Utility.ReportWebNameToNormal(reportName);
			if (FiltersDictionary.ContainsKey(rn))
				return FiltersDictionary[rn];
			FiltersDictionary[rn] = new FilterCollection();
			return FiltersDictionary[rn];
		}

		public static FilterCollection GetAdditionalFiltersAllFromSession(string reportName) {
			var rn = Utility.ReportWebNameToNormal(reportName);
			if (FiltersDictionaryAll.ContainsKey(rn))
				return FiltersDictionaryAll[rn];
			FiltersDictionaryAll[rn] = new FilterCollection();
			return FiltersDictionaryAll[rn];
		}

		public static void CleanAdditionalFilterFromSession(string reportName) {
			var rn = Utility.ReportWebNameToNormal(reportName);
			if (FiltersDictionary.ContainsKey(rn)) {
				FiltersDictionary[rn] = new FilterCollection();
			}
		}
	}
}