import {
  CreditCard,
  CheckCircle2,
  Clock3,
  Receipt,
  CalendarDays,
  Wallet,
  Building2,
  ArrowDownToLine,
} from "lucide-react";

function Payments() {
  const paymentSummary = {
    totalAmount: 450000,
    paidAmount: 450000,
    pendingAmount: 0,
    paymentStatus: "Paid",
    nextPaymentDate: "01 October 2026",
  };

  const payments = [
    {
      id: "PAY001",
      description: "Hostel Accommodation Fee",
      amount: 450000,
      paymentMethod: "Mobile Money",
      paymentDate: "01 September 2026",
      status: "Paid",
      reference: "HMS-2026-0001",
    },
    {
      id: "PAY002",
      description: "Hostel Accommodation Fee",
      amount: 450000,
      paymentMethod: "Bank Transfer",
      paymentDate: "01 August 2026",
      status: "Paid",
      reference: "HMS-2026-0002",
    },
    {
      id: "PAY003",
      description: "Hostel Accommodation Fee",
      amount: 450000,
      paymentMethod: "Mobile Money",
      paymentDate: "01 July 2026",
      status: "Paid",
      reference: "HMS-2026-0003",
    },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-TZ", {
      style: "currency",
      currency: "TZS",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-sm font-medium text-blue-500">
            Student Portal
          </p>

          <h1 className="mt-1 text-2xl font-bold text-blue-950">
            Payments
          </h1>

          <p className="mt-1 text-sm text-blue-900/60">
            View your hostel payments and payment history.
          </p>
        </div>


        {/* Payment Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <CreditCard className="h-4 w-4" />
          Make Payment
        </button>

      </div>


      {/* Payment Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Total */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-blue-900/50">
                Total Fee
              </p>

              <p className="mt-2 text-xl font-bold text-blue-950">
                {formatCurrency(paymentSummary.totalAmount)}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Wallet className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>


        {/* Paid */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-blue-900/50">
                Paid
              </p>

              <p className="mt-2 text-xl font-bold text-blue-950">
                {formatCurrency(paymentSummary.paidAmount)}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
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

              <p className="mt-2 text-xl font-bold text-blue-950">
                {formatCurrency(paymentSummary.pendingAmount)}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Clock3 className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>


        {/* Status */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-blue-900/50">
                Payment Status
              </p>

              <p className="mt-2 text-xl font-bold text-blue-950">
                {paymentSummary.paymentStatus}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Receipt className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>

      </div>


      {/* Next Payment */}
      <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600">
              <CalendarDays className="h-6 w-6 text-white" />
            </div>

            <div>
              <p className="text-sm font-medium text-blue-900/50">
                Next Payment Date
              </p>

              <h2 className="mt-1 text-lg font-bold text-blue-950">
                {paymentSummary.nextPaymentDate}
              </h2>

              <p className="mt-1 text-sm text-blue-900/50">
                Your next hostel accommodation payment is due on this date.
              </p>
            </div>

          </div>


          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
            <CheckCircle2 className="h-4 w-4" />
            Current payment cleared
          </span>

        </div>

      </div>


      {/* Payment History */}
      <div className="rounded-xl border border-blue-100 bg-white shadow-sm">

        {/* Header */}
        <div className="flex flex-col gap-3 border-b border-blue-100 p-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <Receipt className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h2 className="font-bold text-blue-950">
                Payment History
              </h2>

              <p className="text-sm text-blue-900/50">
                Your recent hostel payments.
              </p>
            </div>

          </div>


          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 px-3 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50"
          >
            <ArrowDownToLine className="h-4 w-4" />
            Download Statement
          </button>

        </div>


        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">

          <table className="w-full text-left">

            <thead className="border-b border-blue-100 bg-blue-50/50">

              <tr>

                <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-blue-500">
                  Description
                </th>

                <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-blue-500">
                  Amount
                </th>

                <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-blue-500">
                  Method
                </th>

                <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-blue-500">
                  Date
                </th>

                <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-blue-500">
                  Status
                </th>

                <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-blue-500">
                  Reference
                </th>

              </tr>

            </thead>


            <tbody className="divide-y divide-blue-100">

              {payments.map((payment) => (
                <tr
                  key={payment.id}
                  className="transition hover:bg-blue-50/40"
                >

                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                        <Building2 className="h-4 w-4 text-blue-600" />
                      </div>

                      <span className="text-sm font-semibold text-blue-950">
                        {payment.description}
                      </span>

                    </div>

                  </td>


                  <td className="px-5 py-4 text-sm font-semibold text-blue-950">
                    {formatCurrency(payment.amount)}
                  </td>


                  <td className="px-5 py-4 text-sm text-blue-900/70">
                    {payment.paymentMethod}
                  </td>


                  <td className="px-5 py-4 text-sm text-blue-900/70">
                    {payment.paymentDate}
                  </td>


                  <td className="px-5 py-4">

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">

                      <CheckCircle2 className="h-3.5 w-3.5" />

                      {payment.status}

                    </span>

                  </td>


                  <td className="px-5 py-4 text-xs font-medium text-blue-900/60">
                    {payment.reference}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>


        {/* Mobile Cards */}
        <div className="space-y-3 p-4 md:hidden">

          {payments.map((payment) => (
            <div
              key={payment.id}
              className="rounded-xl border border-blue-100 p-4"
            >

              <div className="flex items-start justify-between gap-3">

                <div className="flex min-w-0 items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>

                  <div className="min-w-0">

                    <p className="truncate text-sm font-bold text-blue-950">
                      {payment.description}
                    </p>

                    <p className="mt-1 text-xs text-blue-900/50">
                      {payment.reference}
                    </p>

                  </div>

                </div>


                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                  <CheckCircle2 className="h-3 w-3" />
                  {payment.status}
                </span>

              </div>


              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-blue-100 pt-4">

                <div>
                  <p className="text-xs text-blue-900/50">
                    Amount
                  </p>

                  <p className="mt-1 text-sm font-bold text-blue-950">
                    {formatCurrency(payment.amount)}
                  </p>
                </div>


                <div>
                  <p className="text-xs text-blue-900/50">
                    Payment Method
                  </p>

                  <p className="mt-1 text-sm font-medium text-blue-950">
                    {payment.paymentMethod}
                  </p>
                </div>


                <div className="col-span-2">

                  <p className="text-xs text-blue-900/50">
                    Payment Date
                  </p>

                  <p className="mt-1 text-sm font-medium text-blue-950">
                    {payment.paymentDate}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>


      {/* Payment Notice */}
      <div className="rounded-xl border border-blue-100 bg-blue-600 p-5 text-white">

        <div className="flex items-start gap-3">

          <CreditCard className="mt-0.5 h-5 w-5 shrink-0" />

          <div>

            <h3 className="font-bold">
              Payment Information
            </h3>

            <p className="mt-1 text-sm leading-6 text-blue-100">
              Keep your payment references and receipts for future use.
              Payment records will be automatically updated once the
              payment is confirmed by the hostel management.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Payments;