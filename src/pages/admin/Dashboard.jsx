import { useState } from "react";
import {
  Users,
  BedDouble,
  CreditCard,
  UserPlus,
  ArrowRight,
  Activity,
  CheckCircle2,
  Clock3,
  AlertCircle,
} from "lucide-react";

import StudentForm from "../../components/students/StudentForm";

function Dashboard() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [students, setStudents] = useState([
    {
      id: "STU001",
      name: "Amani Hassan",
      room: "A-102",
      status: "Active",
    },
    {
      id: "STU002",
      name: "Neema Joseph",
      room: "A-103",
      status: "Active",
    },
    {
      id: "STU003",
      name: "John Michael",
      room: "B-204",
      status: "Active",
    },
  ]);

  const handleAddStudent = (newStudent) => {
    setStudents((currentStudents) => [
      ...currentStudents,
      newStudent,
    ]);

    setIsFormOpen(false);
  };

  const totalStudents = students.length;
  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-500">
            Overview
          </p>

          <h1 className="mt-1 text-2xl font-bold text-blue-950">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-blue-900/60">
            Welcome back to HM Hostel Management System.
          </p>
        </div>

        {/* ADD STUDENT BUTTON */}
        <button
          type="button"
          onClick={() => setIsFormOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <UserPlus className="h-4 w-4" />
          Add Student
        </button>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Students */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Total Students
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {totalStudents}
              </p>

              <p className="mt-1 text-xs text-blue-600">
                {activeStudents} active
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Rooms */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Total Rooms
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                9
              </p>

              <p className="mt-1 text-xs text-blue-600">
                6 available
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <BedDouble className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Payments */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Payments
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                24
              </p>

              <p className="mt-1 text-xs text-blue-600">
                This month
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <CreditCard className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Occupancy */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Occupancy
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                78%
              </p>

              <p className="mt-1 text-xs text-blue-600">
                Hostel capacity
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Activity className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Students */}
        <div className="rounded-xl border border-blue-100 bg-white shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between border-b border-blue-100 p-5">
            <div>
              <h2 className="font-bold text-blue-950">
                Recent Students
              </h2>

              <p className="mt-1 text-xs text-blue-900/50">
                Recently registered students
              </p>
            </div>

            <a
              href="/admin/students"
              className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="divide-y divide-blue-50">
            {students.slice(-5).reverse().map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between gap-4 p-5"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    {student.name
                      .split(" ")
                      .map((name) => name[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-blue-950">
                      {student.name}
                    </p>

                    <p className="text-xs text-blue-900/50">
                      {student.id} • Room {student.room}
                    </p>
                  </div>
                </div>

                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {student.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl border border-blue-100 bg-white shadow-sm">
          <div className="border-b border-blue-100 p-5">
            <h2 className="font-bold text-blue-950">
              Quick Actions
            </h2>

            <p className="mt-1 text-xs text-blue-900/50">
              Common management tasks
            </p>
          </div>

          <div className="space-y-2 p-4">
            <button
              type="button"
              onClick={() => setIsFormOpen(true)}
              className="flex w-full items-center gap-3 rounded-lg border border-blue-100 p-3 text-left transition hover:bg-blue-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                <UserPlus className="h-4 w-4 text-blue-600" />
              </div>

              <div>
                <p className="text-sm font-semibold text-blue-950">
                  Add Student
                </p>

                <p className="text-xs text-blue-900/50">
                  Register a new student
                </p>
              </div>
            </button>

            <a
              href="/admin/rooms"
              className="flex items-center gap-3 rounded-lg border border-blue-100 p-3 transition hover:bg-blue-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                <BedDouble className="h-4 w-4 text-blue-600" />
              </div>

              <div>
                <p className="text-sm font-semibold text-blue-950">
                  Manage Rooms
                </p>

                <p className="text-xs text-blue-900/50">
                  View hostel rooms
                </p>
              </div>
            </a>

            <a
              href="/admin/payments"
              className="flex items-center gap-3 rounded-lg border border-blue-100 p-3 transition hover:bg-blue-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                <CreditCard className="h-4 w-4 text-blue-600" />
              </div>

              <div>
                <p className="text-sm font-semibold text-blue-950">
                  View Payments
                </p>

                <p className="text-xs text-blue-900/50">
                  Check student payments
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
              <Clock3 className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-blue-950">
                Pending Payments
              </h3>

              <p className="mt-1 text-sm text-blue-900/60">
                2 students have pending hostel payments.
              </p>

              <a
                href="/admin/payments"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Review Payments
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
              <AlertCircle className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold text-blue-950">
                Room Maintenance
              </h3>

              <p className="mt-1 text-sm text-blue-900/60">
                Room C-303 is currently under maintenance.
              </p>

              <a
                href="/admin/rooms"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                View Rooms
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Student Form Modal */}
      {isFormOpen && (
        <StudentForm
          onClose={() => setIsFormOpen(false)}
          onAddStudent={handleAddStudent}
        />
      )}
    </div>
  );
}

export default Dashboard;