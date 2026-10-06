import {
  Bell,
  UserCircle,
  ChevronDown,
} from "lucide-react";

function AdminNavbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-blue-100 bg-white">
      <nav className="flex h-16 items-center justify-between px-4 sm:px-6">

        {/* Page Title */}
        <div>
          <p className="text-sm font-semibold text-blue-950">
            Admin Dashboard
          </p>

          <p className="hidden text-xs text-blue-900/50 sm:block">
            Hostel Management System
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* Notifications */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-blue-600 transition hover:bg-blue-50"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />

            <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[9px] font-bold text-white">
              2
            </span>
          </button>

          {/* Divider */}
          <div className="mx-1 hidden h-8 w-px bg-blue-100 sm:block" />

          {/* Admin Profile */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-blue-50"
          >
            <UserCircle className="h-9 w-9 text-blue-500" />

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-blue-950">
                Hostel Manager
              </p>

              <p className="text-xs text-blue-900/50">
                Administrator
              </p>
            </div>

            <ChevronDown className="hidden h-4 w-4 text-blue-400 sm:block" />
          </button>

        </div>

      </nav>
    </header>
  );
}

export default AdminNavbar;