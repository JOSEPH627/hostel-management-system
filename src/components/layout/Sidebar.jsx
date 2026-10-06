import { useState } from "react";
import {
  Building2,
  LayoutDashboard,
  Users,
  BedDouble,
  ClipboardList,
  CreditCard,
  Receipt,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  UserCircle,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

const navigationItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Students",
    path: "/admin/students",
    icon: Users,
  },
  {
    name: "Rooms",
    path: "/admin/rooms",
    icon: BedDouble,
  },
  {
    name: "Allocations",
    path: "/admin/allocations",
    icon: ClipboardList,
  },
  {
    name: "Payments",
    path: "/admin/payments",
    icon: CreditCard,
  },
  {
    name: "Expenses",
    path: "/admin/expenses",
    icon: Receipt,
  },
  {
    name: "Reports",
    path: "/admin/reports",
    icon: BarChart3,
  },
  {
    name: "Notifications",
    path: "/admin/notifications",
    icon: Bell,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { currentUser, logout } = useAuth();

  const closeMobileSidebar = () => {
    setIsMobileOpen(false);
  };

  const handleSignOut = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        className="fixed left-4 top-4 z-40 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md md:hidden"
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <button
          type="button"
          onClick={closeMobileSidebar}
          className="fixed inset-0 z-40 bg-blue-950/40 md:hidden"
          aria-label="Close navigation menu"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-blue-100 bg-white transition-transform duration-300 md:translate-x-0 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-blue-100 px-5">
          <a
            href="/admin/dashboard"
            onClick={closeMobileSidebar}
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
                Management
              </p>
            </div>
          </a>

          {/* Close Button */}
          <button
            type="button"
            onClick={closeMobileSidebar}
            className="rounded-lg p-2 text-blue-600 hover:bg-blue-50 md:hidden"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Admin Information */}
        <div className="border-b border-blue-100 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-3">

            {/* Admin Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600">
              <UserCircle className="h-6 w-6 text-white" />
            </div>

            {/* Admin Name */}
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-blue-950">
                {currentUser?.name || "Hostel Manager"}
              </p>

              <p className="truncate text-xs text-blue-900/50">
                Administrator
              </p>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-blue-400">
            Main Menu
          </p>

          <div className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={closeMobileSidebar}
                  className="group flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-blue-900 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-blue-400 transition group-hover:text-blue-600" />

                    {item.name}
                  </span>

                  <ChevronRight className="h-4 w-4 text-blue-200 transition group-hover:text-blue-400" />
                </a>
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

export default Sidebar;