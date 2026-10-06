import {
  Search,
  Bell,
  CheckCircle,
  Clock,
  CreditCard,
  Wrench,
  ClipboardList,
  UserPlus,
  Check,
} from "lucide-react";

import notifications from "../../data/notifications";

function Notifications() {
  const unreadNotifications = notifications.filter(
    (notification) => notification.status === "Unread"
  );

  const readNotifications = notifications.filter(
    (notification) => notification.status === "Read"
  );

  const paymentNotifications = notifications.filter(
    (notification) => notification.type === "Payment"
  );

  const maintenanceNotifications = notifications.filter(
    (notification) => notification.type === "Maintenance"
  );

  const getNotificationIcon = (type) => {
    switch (type) {
      case "Payment":
        return CreditCard;

      case "Maintenance":
        return Wrench;

      case "Allocation":
        return ClipboardList;

      case "Student":
        return UserPlus;

      default:
        return Bell;
    }
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
            Notifications
          </h1>

          <p className="mt-1 text-sm text-blue-900/60">
            Stay updated with important hostel activities.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
        >
          <Check className="h-5 w-5" />
          Mark All as Read
        </button>

      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Total Notifications */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-blue-900/60">
                Total Notifications
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {notifications.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Bell className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>

        {/* Unread */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-blue-900/60">
                Unread
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {unreadNotifications.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>

        {/* Payment Notifications */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-blue-900/60">
                Payment Alerts
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {paymentNotifications.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <CreditCard className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>

        {/* Maintenance Notifications */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-blue-900/60">
                Maintenance Alerts
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {maintenanceNotifications.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Wrench className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>

      </div>

      {/* Notifications Card */}
      <div className="rounded-xl border border-blue-100 bg-white shadow-sm">

        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-blue-100 p-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h2 className="font-bold text-blue-950">
              All Notifications
            </h2>

            <p className="mt-1 text-sm text-blue-900/50">
              View recent updates and system alerts.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full lg:max-w-sm">

            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

            <input
              type="text"
              placeholder="Search notifications..."
              className="w-full rounded-lg border border-blue-200 bg-white py-2.5 pl-10 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

          </div>

        </div>

        {/* Notification List */}
        <div>

          {notifications.map((notification) => {

            const Icon = getNotificationIcon(
              notification.type
            );

            const isUnread =
              notification.status === "Unread";

            return (
              <div
                key={notification.id}
                className={`flex flex-col gap-4 border-b border-blue-50 p-5 transition hover:bg-blue-50/40 sm:flex-row sm:items-start ${
                  isUnread ? "bg-blue-50/30" : "bg-white"
                }`}
              >

                {/* Icon */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
                    isUnread
                      ? "bg-blue-100"
                      : "bg-blue-50"
                  }`}
                >
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

                    <div>

                      <div className="flex flex-wrap items-center gap-2">

                        <h3 className="text-sm font-bold text-blue-950">
                          {notification.title}
                        </h3>

                        {isUnread && (
                          <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                            New
                          </span>
                        )}

                      </div>

                      <p className="mt-1 text-sm leading-6 text-blue-900/60">
                        {notification.message}
                      </p>

                    </div>

                    {/* Date */}
                    <div className="shrink-0 sm:text-right">

                      <p className="text-xs font-medium text-blue-900/50">
                        {notification.date}
                      </p>

                      <p className="mt-1 text-xs text-blue-900/40">
                        {notification.time}
                      </p>

                    </div>

                  </div>

                  {/* Bottom Information */}
                  <div className="mt-3 flex flex-wrap items-center gap-3">

                    <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                      {notification.type}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        isUnread
                          ? "bg-blue-100 text-blue-700"
                          : "bg-blue-50 text-blue-900/50"
                      }`}
                    >
                      {isUnread ? (
                        <Clock className="h-3.5 w-3.5" />
                      ) : (
                        <CheckCircle className="h-3.5 w-3.5" />
                      )}

                      {notification.status}
                    </span>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* Footer */}
        <div className="flex flex-col gap-3 border-t border-blue-100 px-5 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">

          <p className="text-blue-900/50">

            Showing{" "}

            <span className="font-semibold text-blue-900">
              {notifications.length}
            </span>{" "}

            notifications

          </p>

          <p className="text-blue-900/40">

            <span className="font-semibold text-blue-600">
              {readNotifications.length}
            </span>{" "}

            read

          </p>

        </div>

      </div>

    </div>
  );
}

export default Notifications;