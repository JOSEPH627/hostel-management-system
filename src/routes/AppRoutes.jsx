import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public
import Home from "../pages/public/Home";

// Authentication
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";

// Admin Layout
import AdminLayout from "../layouts/AdminLayout";

// Admin Pages
import Dashboard from "../pages/admin/Dashboard";
import Students from "../pages/admin/Students";
import Rooms from "../pages/admin/Rooms";
import Allocations from "../pages/admin/Allocations";
import Payments from "../pages/admin/Payments";
import Expenses from "../pages/admin/Expenses";
import Reports from "../pages/admin/Reports";
import Notifications from "../pages/admin/Notifications";
import Settings from "../pages/admin/Settings";

// Student Layout
import StudentLayout from "../layouts/StudentLayout";

// Student Pages
import StudentDashboard from "../pages/student/Dashboard";
import StudentProfile from "../pages/student/Profile";
import StudentRoom from "../pages/student/Room";
import StudentPayments from "../pages/student/Payments";
import StudentRequests from "../pages/student/Requests";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* =========================
            PUBLIC ROUTES
        ========================== */}

        <Route path="/" element={<Home />} />

        {/* =========================
            AUTH ROUTES
        ========================== */}

        <Route path="/login" element={<Login />} />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* =========================
            ADMIN ROUTES
        ========================== */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="students"
            element={<Students />}
          />

          <Route
            path="rooms"
            element={<Rooms />}
          />

          <Route
            path="allocations"
            element={<Allocations />}
          />

          <Route
            path="payments"
            element={<Payments />}
          />

          <Route
            path="expenses"
            element={<Expenses />}
          />

          <Route
            path="reports"
            element={<Reports />}
          />

          <Route
            path="notifications"
            element={<Notifications />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>

        {/* =========================
            STUDENT ROUTES
        ========================== */}

        <Route path="/student" element={<StudentLayout />}>
          <Route
            path="dashboard"
            element={<StudentDashboard />}
          />

          <Route
            path="profile"
            element={<StudentProfile />}
          />

          <Route
            path="room"
            element={<StudentRoom />}
          />

          <Route
            path="payments"
            element={<StudentPayments />}
          />

          <Route
            path="requests"
            element={<StudentRequests />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;