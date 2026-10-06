import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import AdminNavbar from "../components/layout/AdminNavbar";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Sidebar />

      <div className="md:ml-64">
        <AdminNavbar />

        <main className="p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;