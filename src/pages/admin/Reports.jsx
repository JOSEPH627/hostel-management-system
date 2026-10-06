import {
  Search,
  FileText,
  Download,
  Eye,
  BarChart3,
  Wallet,
  Receipt,
  BedDouble,
  Users,
  CheckCircle,
  Clock,
} from "lucide-react";

import reports from "../../data/report";

function Reports() {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-TZ", {
      style: "currency",
      currency: "TZS",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatValue = (report) => {
    if (report.type === "Financial") {
      return formatCurrency(report.value);
    }

    if (report.type === "Occupancy") {
      return `${report.value}%`;
    }

    return report.value;
  };

  const getReportIcon = (type) => {
    if (type === "Financial") {
      return Wallet;
    }

    if (type === "Occupancy") {
      return BedDouble;
    }

    if (type === "Students") {
      return Users;
    }

    if (type === "Payments") {
      return Receipt;
    }

    return BarChart3;
  };

  const getStatusIcon = (status) => {
    if (status === "Completed") {
      return CheckCircle;
    }

    return Clock;
  };

  const getStatusStyles = (status) => {
    if (status === "Completed") {
      return "bg-blue-50 text-blue-700";
    }

    return "bg-blue-100 text-blue-800";
  };

  const completedReports = reports.filter(
    (report) => report.status === "Completed"
  ).length;

  const pendingReports = reports.filter(
    (report) => report.status === "Pending"
  ).length;

  const financialReports = reports.filter(
    (report) => report.type === "Financial"
  ).length;

  const occupancyReports = reports.filter(
    (report) => report.type === "Occupancy"
  ).length;

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <p className="text-sm font-medium text-blue-500">
            Administration
          </p>

          <h1 className="mt-1 text-2xl font-bold text-blue-950">
            Reports
          </h1>

          <p className="mt-1 text-sm text-blue-900/60">
            View and manage hostel reports and performance summaries.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <Download className="h-4 w-4" />
          Export Reports
        </button>

      </div>


      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Total Reports */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-blue-900/50">
                Total Reports
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {reports.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>


        {/* Completed */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-blue-900/50">
                Completed
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {completedReports}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <CheckCircle className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>


        {/* Pending */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-blue-900/50">
                Pending
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {pendingReports}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>


        {/* Financial Reports */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-blue-900/50">
                Financial Reports
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {financialReports}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Wallet className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>

      </div>


      {/* Search and Filter */}
      <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <div className="relative w-full md:max-w-md">

            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

            <input
              type="search"
              placeholder="Search reports..."
              className="w-full rounded-lg border border-blue-200 bg-white py-2.5 pl-10 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          <select
            className="rounded-lg border border-blue-200 bg-white px-4 py-2.5 text-sm text-blue-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            defaultValue="All"
          >
            <option value="All">
              All Report Types
            </option>

            <option value="Financial">
              Financial
            </option>

            <option value="Occupancy">
              Occupancy
            </option>

            <option value="Students">
              Students
            </option>

            <option value="Payments">
              Payments
            </option>

            <option value="Maintenance">
              Maintenance
            </option>
          </select>

        </div>

      </div>


      {/* Reports Table */}
      <div className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">

        <div className="border-b border-blue-100 px-5 py-4">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="font-bold text-blue-950">
                Available Reports
              </h2>

              <p className="mt-1 text-sm text-blue-900/50">
                Generated hostel management reports.
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex">

              <BarChart3 className="h-5 w-5 text-blue-500" />

              <span className="text-sm font-medium text-blue-900">
                {occupancyReports} occupancy report
              </span>

            </div>

          </div>

        </div>


        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">

          <table className="w-full">

            <thead className="bg-blue-50">

              <tr>

                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-500">
                  Report
                </th>

                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-500">
                  Type
                </th>

                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-500">
                  Period
                </th>

                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-500">
                  Value
                </th>

                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-500">
                  Status
                </th>

                <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-blue-500">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-blue-100">

              {reports.map((report) => {

                const ReportIcon = getReportIcon(report.type);
                const StatusIcon = getStatusIcon(report.status);

                return (
                  <tr
                    key={report.id}
                    className="transition hover:bg-blue-50/50"
                  >

                    <td className="px-5 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                          <ReportIcon className="h-5 w-5 text-blue-600" />
                        </div>

                        <div>

                          <p className="text-sm font-semibold text-blue-950">
                            {report.title}
                          </p>

                          <p className="mt-0.5 text-xs text-blue-900/50">
                            {report.id}
                          </p>

                        </div>

                      </div>

                    </td>

                    <td className="px-5 py-4">

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {report.type}
                      </span>

                    </td>

                    <td className="px-5 py-4 text-sm text-blue-900">
                      {report.period}
                    </td>

                    <td className="px-5 py-4">

                      <span className="text-sm font-bold text-blue-950">
                        {formatValue(report)}
                      </span>

                    </td>

                    <td className="px-5 py-4">

                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyles(
                          report.status
                        )}`}
                      >
                        <StatusIcon className="h-3.5 w-3.5" />
                        {report.status}
                      </span>

                    </td>

                    <td className="px-5 py-4">

                      <div className="flex items-center justify-end gap-2">

                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                          title="View Report"
                        >
                          <Eye className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                          title="Download Report"
                        >
                          <Download className="h-4 w-4" />
                        </button>

                      </div>

                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

        </div>


        {/* Mobile Cards */}
        <div className="divide-y divide-blue-100 md:hidden">

          {reports.map((report) => {

            const ReportIcon = getReportIcon(report.type);
            const StatusIcon = getStatusIcon(report.status);

            return (
              <div
                key={report.id}
                className="p-5"
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="flex min-w-0 items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                      <ReportIcon className="h-5 w-5 text-blue-600" />
                    </div>

                    <div className="min-w-0">

                      <p className="truncate text-sm font-bold text-blue-950">
                        {report.title}
                      </p>

                      <p className="mt-1 text-xs text-blue-900/50">
                        {report.id}
                      </p>

                    </div>

                  </div>

                  <span
                    className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyles(
                      report.status
                    )}`}
                  >
                    <StatusIcon className="h-3.5 w-3.5" />
                    {report.status}
                  </span>

                </div>


                <div className="mt-4 grid grid-cols-2 gap-4">

                  <div>
                    <p className="text-xs text-blue-900/50">
                      Type
                    </p>

                    <p className="mt-1 text-sm font-medium text-blue-950">
                      {report.type}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-blue-900/50">
                      Period
                    </p>

                    <p className="mt-1 text-sm font-medium text-blue-950">
                      {report.period}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-blue-900/50">
                      Value
                    </p>

                    <p className="mt-1 text-sm font-bold text-blue-950">
                      {formatValue(report)}
                    </p>
                  </div>

                </div>


                <div className="mt-4 flex gap-2 border-t border-blue-100 pt-4">

                  <button
                    type="button"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-blue-200 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </button>

                  <button
                    type="button"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

export default Reports;