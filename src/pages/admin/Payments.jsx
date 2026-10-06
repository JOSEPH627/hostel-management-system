import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  CreditCard,
  CheckCircle,
  Clock,
  Banknote,
  Wallet,
} from "lucide-react";

import payments from "../../data/payments";

function Payments() {
  const totalPayments = payments.reduce(
    (total, payment) => total + payment.amount,
    0
  );

  const paidPayments = payments.filter(
    (payment) => payment.status === "Paid"
  );

  const pendingPayments = payments.filter(
    (payment) => payment.status === "Pending"
  );

  const totalPaid = paidPayments.reduce(
    (total, payment) => total + payment.amount,
    0
  );

  const totalPending = pendingPayments.reduce(
    (total, payment) => total + payment.amount,
    0
  );

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-TZ").format(amount);
  };

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <p className="text-sm font-medium text-blue-600">
            Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-blue-950">
            Payments
          </h1>

          <p className="mt-1 text-sm text-blue-900/60">
            Record and manage student hostel payments.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Record Payment
        </button>

      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Total Payments */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-blue-900/60">
                Total Payments
              </p>

              <p className="mt-2 text-xl font-bold text-blue-950">
                TZS {formatCurrency(totalPayments)}
              </p>

              <p className="mt-1 text-xs text-blue-900/40">
                {payments.length} transactions
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <CreditCard className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>

        {/* Paid */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-blue-900/60">
                Paid
              </p>

              <p className="mt-2 text-xl font-bold text-blue-950">
                TZS {formatCurrency(totalPaid)}
              </p>

              <p className="mt-1 text-xs text-blue-900/40">
                {paidPayments.length} transactions
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
              <p className="text-sm font-medium text-blue-900/60">
                Pending
              </p>

              <p className="mt-2 text-xl font-bold text-blue-950">
                TZS {formatCurrency(totalPending)}
              </p>

              <p className="mt-1 text-xs text-blue-900/40">
                {pendingPayments.length} transactions
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>

        {/* Average Payment */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-blue-900/60">
                Average Payment
              </p>

              <p className="mt-2 text-xl font-bold text-blue-950">
                TZS{" "}
                {formatCurrency(
                  payments.length > 0
                    ? Math.round(totalPayments / payments.length)
                    : 0
                )}
              </p>

              <p className="mt-1 text-xs text-blue-900/40">
                Per transaction
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Banknote className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>

      </div>

      {/* Payments Table */}
      <div className="rounded-xl border border-blue-100 bg-white shadow-sm">

        {/* Table Header */}
        <div className="flex flex-col gap-4 border-b border-blue-100 p-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h2 className="font-bold text-blue-950">
              All Payments
            </h2>

            <p className="mt-1 text-sm text-blue-900/50">
              View and manage recorded payment transactions.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full lg:max-w-sm">

            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

            <input
              type="text"
              placeholder="Search payments..."
              className="w-full rounded-lg border border-blue-200 bg-white py-2.5 pl-10 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1050px]">

            <thead>
              <tr className="border-b border-blue-100 bg-blue-50/50">

                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Student
                </th>

                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Payment ID
                </th>

                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Room
                </th>

                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Amount
                </th>

                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Method
                </th>

                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Date
                </th>

                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Status
                </th>

                <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {payments.map((payment) => (

                <tr
                  key={payment.id}
                  className="border-b border-blue-50 transition hover:bg-blue-50/40"
                >

                  {/* Student */}
                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                        {payment.studentName
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div className="min-w-0">

                        <p className="truncate text-sm font-semibold text-blue-950">
                          {payment.studentName}
                        </p>

                        <p className="truncate text-xs text-blue-900/50">
                          {payment.studentId}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Payment ID */}
                  <td className="px-5 py-4">

                    <span className="text-sm font-medium text-blue-900">
                      {payment.id}
                    </span>

                  </td>

                  {/* Room */}
                  <td className="px-5 py-4">

                    <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                      {payment.room}
                    </span>

                  </td>

                  {/* Amount */}
                  <td className="px-5 py-4">

                    <div className="flex items-center gap-2">

                      <Wallet className="h-4 w-4 text-blue-400" />

                      <span className="text-sm font-semibold text-blue-950">
                        TZS {formatCurrency(payment.amount)}
                      </span>

                    </div>

                  </td>

                  {/* Method */}
                  <td className="px-5 py-4">

                    <span className="text-sm text-blue-900/70">
                      {payment.paymentMethod}
                    </span>

                  </td>

                  {/* Date */}
                  <td className="px-5 py-4">

                    <span className="text-sm text-blue-900/70">
                      {payment.paymentDate}
                    </span>

                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        payment.status === "Paid"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >

                      {payment.status === "Paid" ? (
                        <CheckCircle className="h-3.5 w-3.5" />
                      ) : (
                        <Clock className="h-3.5 w-3.5" />
                      )}

                      {payment.status}

                    </span>

                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">

                    <div className="flex justify-end gap-2">

                      <button
                        type="button"
                        className="rounded-lg p-2 text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                        aria-label={`View ${payment.studentName} payment`}
                      >
                        <Eye className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        className="rounded-lg p-2 text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                        aria-label={`Edit ${payment.studentName} payment`}
                      >
                        <Pencil className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        className="rounded-lg p-2 text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                        aria-label={`Delete ${payment.studentName} payment`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Table Footer */}
        <div className="flex flex-col gap-3 border-t border-blue-100 px-5 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">

          <p className="text-blue-900/50">
            Showing{" "}
            <span className="font-semibold text-blue-900">
              {payments.length}
            </span>{" "}
            payments
          </p>

          <div className="flex items-center gap-2">

            <button
              type="button"
              className="rounded-lg border border-blue-200 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
            >
              Previous
            </button>

            <button
              type="button"
              className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white"
            >
              1
            </button>

            <button
              type="button"
              className="rounded-lg border border-blue-200 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
            >
              Next
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Payments;