import { useState } from "react";
import { Outlet } from "react-router-dom";

import StudentSidebar from "../components/layout/StudentSidebar";
import StudentNavbar from "../components/layout/StudentNavbar";

function StudentLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div className="min-h-screen bg-blue-50">

      {/* Student Sidebar */}
      <StudentSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="md:ml-64">

        {/* Student Navbar */}
        <StudentNavbar
          onMenuClick={openSidebar}
        />

        {/* Page Content */}
        <main className="p-4 sm:p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default StudentLayout;