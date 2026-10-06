import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Receipt,
  CheckCircle,
  Clock,
  Wallet,
  Wrench,
} from "lucide-react";

import expenses from "../../data/expenses";

function Expenses() {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const paidExpenses = expenses.filter(
    (expense) => expense.status === "Paid"
  );

  const pendingExpenses = expenses.filter(
    (expense) => expense.status === "Pending"
  );

  const totalPaid = paidExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const totalPending = pendingExpenses.reduce(
    (total, expense) => total + expense.amount,
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
            Expenses
          </h1>

          <p className="mt-1 text-sm text-blue-900/60">
            Track and manage hostel operating expenses.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Add Expense
        </button>

      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Total Expenses */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-blue-900/60">
                Total Expenses
              </p>

              <p className="mt-2 text-xl font-bold text-blue-950">
                TZS {formatCurrency(totalExpenses)}
              </p>

              <p className="mt-1 text-xs text-blue-900/40">
                {expenses.length} expenses
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Receipt className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>

        {/* Paid Expenses */}
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
                {paidExpenses.length} expenses
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <CheckCircle className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>

        {/* Pending Expenses */}
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
                {pendingExpenses.length} expenses
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>

        {/* Average Expense */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-blue-900/60">
                Average Expense
              </p>

              <p className="mt-2 text-xl font-bold text-blue-950">
                TZS{" "}
                {formatCurrency(
                  expenses.length > 0
                    ? Math.round(totalExpenses / expenses.length)
                    : 0
                )}
              </p>

              <p className="mt-1 text-xs text-blue-900/40">
                Per expense
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Wallet className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>

      </div>

      {/* Expenses Table */}
      <div className="rounded-xl border border-blue-100 bg-white shadow-sm">

        {/* Table Header */}
        <div className="flex flex-col gap-4 border-b border-blue-100 p-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h2 className="font-bold text-blue-950">
              All Expenses
            </h2>

            <p className="mt-1 text-sm text-blue-900/50">
              View and manage recorded hostel expenses.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full lg:max-w-sm">

            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

            <input
              type="text"
              placeholder="Search expenses..."
              className="w-full rounded-lg border border-blue-200 bg-white py-2.5 pl-10 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1100px]">

            <thead>
              <tr className="border-b border-blue-100 bg-blue-50/50">

                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Expense
                </th>

                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Expense ID
                </th>

                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Category
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

              {expenses.map((expense) => (

                <tr
                  key={expense.id}
                  className="border-b border-blue-50 transition hover:bg-blue-50/40"
                >

                  {/* Expense */}
                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                        {expense.category === "Maintenance" ? (
                          <Wrench className="h-5 w-5 text-blue-600" />
                        ) : (
                          <Receipt className="h-5 w-5 text-blue-600" />
                        )}
                      </div>

                      <div className="min-w-0">

                        <p className="truncate text-sm font-semibold text-blue-950">
                          {expense.title}
                        </p>

                        <p className="truncate text-xs text-blue-900/50">
                          {expense.description}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Expense ID */}
                  <td className="px-5 py-4">

                    <span className="text-sm font-medium text-blue-900">
                      {expense.id}
                    </span>

                  </td>

                  {/* Category */}
                  <td className="px-5 py-4">

                    <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                      {expense.category}
                    </span>

                  </td>

                  {/* Amount */}
                  <td className="px-5 py-4">

                    <span className="text-sm font-semibold text-blue-950">
                      TZS {formatCurrency(expense.amount)}
                    </span>

                  </td>

                  {/* Payment Method */}
                  <td className="px-5 py-4">

                    <span className="text-sm text-blue-900/70">
                      {expense.paymentMethod}
                    </span>

                  </td>

                  {/* Date */}
                  <td className="px-5 py-4">

                    <span className="text-sm text-blue-900/70">
                      {expense.expenseDate}
                    </span>

                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        expense.status === "Paid"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >

                      {expense.status === "Paid" ? (
                        <CheckCircle className="h-3.5 w-3.5" />
                      ) : (
                        <Clock className="h-3.5 w-3.5" />
                      )}

                      {expense.status}

                    </span>

                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">

                    <div className="flex justify-end gap-2">

                      <button
                        type="button"
                        className="rounded-lg p-2 text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                        aria-label={`View ${expense.title}`}
                      >
                        <Eye className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        className="rounded-lg p-2 text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                        aria-label={`Edit ${expense.title}`}
                      >
                        <Pencil className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        className="rounded-lg p-2 text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                        aria-label={`Delete ${expense.title}`}
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
              {expenses.length}
            </span>{" "}
            expenses
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

export default Expenses;