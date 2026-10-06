import {
  BedDouble,
  CreditCard,
  ClipboardCheck,
  Clock3,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  CalendarDays,
  Building2,
  FileText,
  Bell,
} from "lucide-react";

function Dashboard() {
  const stats = [
    {
      title: "Room",
      value: "A-102",
      subtitle: "Bed 1",
      icon: BedDouble,
    },
    {
      title: "Payment",
      value: "Paid",
      subtitle: "September 2026",
      icon: CreditCard,
    },
    {
      title: "Allocation",
      value: "Active",
      subtitle: "Since 01 Sep 2026",
      icon: ClipboardCheck,
    },
    {
      title: "Requests",
      value: "2",
      subtitle: "Pending requests",
      icon: Clock3,
    },
  ];

  const recentRequests = [
    {
      id: "REQ001",
      title: "Room Maintenance",
      description: "Request for room maintenance",
      date: "05 Sep 2026",
      status: "Pending",
    },
    {
      id: "REQ002",
      title: "Room Change",
      description: "Request for room change",
      date: "03 Sep 2026",
      status: "Approved",
    },
  ];

  const notifications = [
    {
      id: "NOT001",
      title: "Payment Received",
      message: "Your September hostel payment has been received.",
      date: "07 Sep 2026",
    },
    {
      id: "NOT002",
      title: "Allocation Confirmed",
      message: "Your room allocation A-102 has been confirmed.",
      date: "01 Sep 2026",
    },
    {
      id: "NOT003",
      title: "Hostel Notice",
      message: "Please remember to follow hostel rules and regulations.",
      date: "30 Aug 2026",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Welcome Header */}
      <section className="rounded-2xl bg-blue-600 p-6 text-white shadow-sm sm:p-8">

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="mb-1 text-sm font-medium text-blue-100">
              Welcome back
            </p>

            <h1 className="text-2xl font-bold sm:text-3xl">
              Amani Hassan
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-blue-100">
              Here is an overview of your hostel accommodation,
              payments, requests, and recent activities.
            </p>
          </div>

          <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 sm:flex">
            <Building2 className="h-8 w-8 text-white" />
          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">

                <div>
                  <p className="text-sm font-medium text-blue-900/60">
                    {stat.title}
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-blue-950">
                    {stat.value}
                  </h2>

                  <p className="mt-1 text-xs text-blue-900/50">
                    {stat.subtitle}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>

              </div>
            </div>
          );
        })}

      </section>

      {/* Main Grid */}
      <section className="grid gap-6 xl:grid-cols-3">

        {/* Room Information */}
        <div className="rounded-2xl border border-blue-100 bg-white shadow-sm xl:col-span-2">

          <div className="flex items-center justify-between border-b border-blue-100 p-5">

            <div>
              <h2 className="text-base font-bold text-blue-950">
                My Room
              </h2>

              <p className="mt-1 text-sm text-blue-900/50">
                Your current accommodation details
              </p>
            </div>

            <BedDouble className="h-5 w-5 text-blue-500" />

          </div>

          <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl bg-blue-50 p-4">
              <p className="text-xs font-medium text-blue-900/50">
                Room Number
              </p>

              <p className="mt-2 text-lg font-bold text-blue-950">
                A-102
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <p className="text-xs font-medium text-blue-900/50">
                Room Type
              </p>

              <p className="mt-2 text-lg font-bold text-blue-950">
                Standard
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <p className="text-xs font-medium text-blue-900/50">
                Bed
              </p>

              <p className="mt-2 text-lg font-bold text-blue-950">
                Bed 1
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <p className="text-xs font-medium text-blue-900/50">
                Floor
              </p>

              <p className="mt-2 text-lg font-bold text-blue-950">
                1st Floor
              </p>
            </div>

          </div>

          <div className="border-t border-blue-100 p-5">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-blue-950">
                    Allocation Active
                  </p>

                  <p className="text-xs text-blue-900/50">
                    Allocated on 01 September 2026
                  </p>
                </div>

              </div>

              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-blue-200 px-4 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                View Room
                <ArrowRight className="h-4 w-4" />
              </button>

            </div>

          </div>

        </div>

        {/* Payment Summary */}
        <div className="rounded-2xl border border-blue-100 bg-white shadow-sm">

          <div className="border-b border-blue-100 p-5">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-base font-bold text-blue-950">
                  Payment
                </h2>

                <p className="mt-1 text-sm text-blue-900/50">
                  Current payment status
                </p>
              </div>

              <CreditCard className="h-5 w-5 text-blue-500" />

            </div>

          </div>

          <div className="space-y-5 p-5">

            <div className="rounded-xl bg-blue-50 p-5 text-center">

              <CheckCircle2 className="mx-auto h-8 w-8 text-blue-600" />

              <p className="mt-3 text-sm font-semibold text-blue-950">
                Payment Completed
              </p>

              <p className="mt-1 text-xs text-blue-900/50">
                September 2026
              </p>

              <p className="mt-3 text-2xl font-bold text-blue-950">
                TZS 450,000
              </p>

            </div>

            <div className="flex items-center justify-between text-sm">

              <span className="text-blue-900/60">
                Payment method
              </span>

              <span className="font-semibold text-blue-950">
                Mobile Money
              </span>

            </div>

            <div className="flex items-center justify-between text-sm">

              <span className="text-blue-900/60">
                Payment date
              </span>

              <span className="font-semibold text-blue-950">
                01 Sep 2026
              </span>

            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View Payments
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </div>

      </section>

      {/* Bottom Grid */}
      <section className="grid gap-6 lg:grid-cols-2">

        {/* Recent Requests */}
        <div className="rounded-2xl border border-blue-100 bg-white shadow-sm">

          <div className="flex items-center justify-between border-b border-blue-100 p-5">

            <div>
              <h2 className="text-base font-bold text-blue-950">
                Recent Requests
              </h2>

              <p className="mt-1 text-sm text-blue-900/50">
                Your latest hostel requests
              </p>
            </div>

            <FileText className="h-5 w-5 text-blue-500" />

          </div>

          <div className="divide-y divide-blue-100">

            {recentRequests.map((request) => (
              <div
                key={request.id}
                className="p-5"
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="flex min-w-0 gap-3">

                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>

                    <div className="min-w-0">

                      <p className="truncate text-sm font-semibold text-blue-950">
                        {request.title}
                      </p>

                      <p className="mt-1 text-xs text-blue-900/50">
                        {request.description}
                      </p>

                      <div className="mt-2 flex items-center gap-2 text-xs text-blue-900/40">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {request.date}
                      </div>

                    </div>

                  </div>

                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      request.status === "Approved"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {request.status}
                  </span>

                </div>

              </div>
            ))}

          </div>

          <div className="border-t border-blue-100 p-4">

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              View All Requests
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </div>

        {/* Notifications */}
        <div className="rounded-2xl border border-blue-100 bg-white shadow-sm">

          <div className="flex items-center justify-between border-b border-blue-100 p-5">

            <div>
              <h2 className="text-base font-bold text-blue-950">
                Recent Notifications
              </h2>

              <p className="mt-1 text-sm text-blue-900/50">
                Latest updates from the hostel
              </p>
            </div>

            <Bell className="h-5 w-5 text-blue-500" />

          </div>

          <div className="divide-y divide-blue-100">

            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-5"
              >

                <div className="flex gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <Bell className="h-4 w-4 text-blue-600" />
                  </div>

                  <div className="min-w-0">

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">

                      <p className="text-sm font-semibold text-blue-950">
                        {notification.title}
                      </p>

                      <span className="text-[11px] text-blue-900/40">
                        {notification.date}
                      </span>

                    </div>

                    <p className="mt-1 text-xs leading-5 text-blue-900/50">
                      {notification.message}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

          <div className="border-t border-blue-100 p-4">

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              View All Notifications
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </div>

      </section>

      {/* Quick Actions */}
      <section className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">

        <div className="mb-4">

          <h2 className="text-base font-bold text-blue-950">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-blue-900/50">
            Quickly access common student actions
          </p>

        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          <button
            type="button"
            className="flex items-center gap-3 rounded-xl border border-blue-100 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
              <BedDouble className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-950">
                My Room
              </p>

              <p className="text-xs text-blue-900/50">
                View room details
              </p>
            </div>
          </button>

          <button
            type="button"
            className="flex items-center gap-3 rounded-xl border border-blue-100 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
              <CreditCard className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-950">
                Payments
              </p>

              <p className="text-xs text-blue-900/50">
                View payment history
              </p>
            </div>
          </button>

          <button
            type="button"
            className="flex items-center gap-3 rounded-xl border border-blue-100 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-950">
                New Request
              </p>

              <p className="text-xs text-blue-900/50">
                Submit a request
              </p>
            </div>
          </button>

          <button
            type="button"
            className="flex items-center gap-3 rounded-xl border border-blue-100 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
              <AlertCircle className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-950">
                Help & Support
              </p>

              <p className="text-xs text-blue-900/50">
                Contact hostel management
              </p>
            </div>
          </button>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;