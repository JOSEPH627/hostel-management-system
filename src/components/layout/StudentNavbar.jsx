import {
  Building2,
  Bell,
  UserCircle,
  ChevronDown,
  Menu,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

function StudentNavbar({ onMenuClick }) {
  const { currentUser } = useAuth();

  return (
    <header className="sticky top-0 z-30 border-b border-blue-100 bg-white">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">

        {/* Left Side */}
        <div className="flex min-w-0 items-center gap-3">

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-blue-600 transition hover:bg-blue-50 md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <a
            href="/student/dashboard"
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
              <Building2 className="h-5 w-5 text-white" />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-blue-950">
                HM Hostel
              </h1>

              <p className="text-[10px] text-blue-500">
                Student Portal
              </p>
            </div>
          </a>
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

          {/* Student Profile */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-blue-50"
          >
            <UserCircle className="h-9 w-9 text-blue-500" />

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-blue-950">
                {currentUser?.name || "Student"}
              </p>

              <p className="text-xs text-blue-900/50">
                Student
              </p>
            </div>

            <ChevronDown className="hidden h-4 w-4 text-blue-400 sm:block" />
          </button>

        </div>
      </div>
    </header>
  );
}

export default StudentNavbar;