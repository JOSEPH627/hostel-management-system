import { useState } from "react";
import {
  Building2,
  Menu,
  X,
  Home,
  Info,
  LayoutDashboard,
  Phone,
  LogIn,
} from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            onClick={closeMenu}
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
                Management System
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">

            <a
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-blue-900 transition hover:text-blue-600"
            >
              <Home className="h-4 w-4" />
              Home
            </a>

            <a
              href="#about"
              className="flex items-center gap-2 text-sm font-medium text-blue-900 transition hover:text-blue-600"
            >
              <Info className="h-4 w-4" />
              About
            </a>

            <a
              href="#features"
              className="flex items-center gap-2 text-sm font-medium text-blue-900 transition hover:text-blue-600"
            >
              <LayoutDashboard className="h-4 w-4" />
              Features
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 text-sm font-medium text-blue-900 transition hover:text-blue-600"
            >
              <Phone className="h-4 w-4" />
              Contact
            </a>

            <a
              href="/login"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <LogIn className="h-4 w-4" />
              Login
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-blue-700 transition hover:bg-blue-50 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-blue-100 py-4 md:hidden">

            <div className="flex flex-col gap-2">

              <a
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-blue-900 transition hover:bg-blue-50"
              >
                <Home className="h-5 w-5 text-blue-600" />
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-blue-900 transition hover:bg-blue-50"
              >
                <Info className="h-5 w-5 text-blue-600" />
                About
              </a>

              <a
                href="#features"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-blue-900 transition hover:bg-blue-50"
              >
                <LayoutDashboard className="h-5 w-5 text-blue-600" />
                Features
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-blue-900 transition hover:bg-blue-50"
              >
                <Phone className="h-5 w-5 text-blue-600" />
                Contact
              </a>

              <a
                href="/login"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <LogIn className="h-5 w-5" />
                Login
              </a>

            </div>

          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;