import {
  Building2,
  LayoutDashboard,
  UserCircle,
  BedDouble,
  CreditCard,
  FileText,
  LogOut,
  X,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const navigationItems = [
  {
    name: "Dashboard",
    path: "/student/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Profile",
    path: "/student/profile",
    icon: UserCircle,
  },
  {
    name: "My Room",
    path: "/student/room",
    icon: BedDouble,
  },
  {
    name: "Payments",
    path: "/student/payments",
    icon: CreditCard,
  },
  {
    name: "Requests",
    path: "/student/requests",
    icon: FileText,
  },
];

function StudentSidebar({ isOpen, onClose }) {
  const { currentUser, logout } = useAuth();

  const handleSignOut = () => {
    logout();
    window.location.href = "/";
  };

  const studentName = currentUser?.name || "Student";

  const studentInitials = studentName
    .split(" ")
    .map((name) => name[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <button
          type="button"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-blue-950/40 md:hidden"
          aria-label="Close navigation menu"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-blue-100 bg-white transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-blue-100 px-5">
          <Link
            to="/student/dashboard"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <Building2 className="h-6 w-6 text-white" />
            </div>

            <div>
              <h1 className="text-base font-bold text-blue-950">
                HM Hostel
              </h1>

              <p className="text-[11px] text-blue-500">
                Student Portal
              </p>
            </div>
          </Link>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50 md:hidden"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Student Profile */}
        <div className="border-b border-blue-100 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-3">
            {/* Avatar */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              {studentInitials}
            </div>

            {/* Student Name */}
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-blue-950">
                {studentName}
              </p>

              <p className="truncate text-xs text-blue-900/50">
                Student
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-blue-400">
            Student Menu
          </p>

          <div className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-blue-900 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-blue-400 transition group-hover:text-blue-600" />

                    {item.name}
                  </span>

                  <ChevronRight className="h-4 w-4 text-blue-200 transition group-hover:text-blue-400" />
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Sign Out */}
        <div className="border-t border-blue-100 p-3">
          <button
            type="button"
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-blue-900 transition hover:bg-blue-50 hover:text-blue-600"
          >
            <LogOut className="h-5 w-5 text-blue-400" />

            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}

export default StudentSidebar;