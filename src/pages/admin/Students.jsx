import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Eye,
  Edit3,
  Trash2,
  Users,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import studentsData from "../../data/students";
import StudentForm from "../../components/students/StudentForm";

function Students() {
  const [students, setStudents] = useState(studentsData);
  const [search, setSearch] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return students;
    }

    return students.filter(
      (student) =>
        student.name.toLowerCase().includes(query) ||
        student.email.toLowerCase().includes(query) ||
        student.id.toLowerCase().includes(query) ||
        student.room.toLowerCase().includes(query)
    );
  }, [students, search]);

  const handleDelete = (studentId) => {
    const student = students.find(
      (item) => item.id === studentId
    );

    if (!student) {
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete ${student.name}?`
    );

    if (!confirmed) {
      return;
    }

    setStudents((currentStudents) =>
      currentStudents.filter(
        (item) => item.id !== studentId
      )
    );
  };

  const handleAddStudent = (newStudent) => {
    setStudents((currentStudents) => [
      ...currentStudents,
      newStudent,
    ]);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-500">
            Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-blue-950">
            Students
          </h1>

          <p className="mt-1 text-sm text-blue-900/60">
            Manage students registered at HM Hostel.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsFormOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add Student
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        {/* Total Students */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Total Students
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {students.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Active Students */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Active Students
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {
                  students.filter(
                    (student) => student.status === "Active"
                  ).length
                }
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Pending Payments */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Pending Payments
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {
                  students.filter(
                    (student) => student.payment === "Pending"
                  ).length
                }
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Clock3 className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
        {/* Table Header */}
        <div className="border-b border-blue-100 p-4 sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-bold text-blue-950">
                All Students
              </h2>

              <p className="mt-1 text-xs text-blue-900/50">
                {filteredStudents.length} student
                {filteredStudents.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-400" />

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search students..."
                className="w-full rounded-lg border border-blue-200 bg-white py-2.5 pl-9 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full">
            <thead>
              <tr className="border-b border-blue-100 bg-blue-50/60">
                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Student
                </th>

                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Student ID
                </th>

                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Room
                </th>

                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Status
                </th>

                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Payment
                </th>

                <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-blue-50 transition hover:bg-blue-50/30"
                >
                  {/* Student */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
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

                        <p className="truncate text-xs text-blue-900/50">
                          {student.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Student ID */}
                  <td className="px-5 py-4 text-sm font-medium text-blue-900">
                    {student.id}
                  </td>

                  {/* Room */}
                  <td className="px-5 py-4 text-sm font-medium text-blue-900">
                    {student.room}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                        student.status === "Active"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-blue-100 text-blue-900/60"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>

                  {/* Payment */}
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                        student.payment === "Paid"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-blue-100 text-blue-900/60"
                      }`}
                    >
                      {student.payment}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1">
                      {/* View */}
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                        aria-label={`View ${student.name}`}
                      >
                        <Eye className="h-4 w-4" />
                      </button>

                      {/* Edit */}
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                        aria-label={`Edit ${student.name}`}
                      >
                        <Edit3 className="h-4 w-4" />
                      </button>

                      {/* Delete */}
                      <button
                        type="button"
                        onClick={() => handleDelete(student.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-400 transition hover:bg-blue-50 hover:text-blue-700"
                        aria-label={`Delete ${student.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {/* Empty State */}
              {filteredStudents.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-12 text-center"
                  >
                    <Users className="mx-auto h-10 w-10 text-blue-200" />

                    <p className="mt-3 text-sm font-semibold text-blue-950">
                      No students found
                    </p>

                    <p className="mt-1 text-xs text-blue-900/50">
                      Try a different search term.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Student Modal */}
      {isFormOpen && (
        <StudentForm
          onClose={() => setIsFormOpen(false)}
          onAddStudent={handleAddStudent}
        />
      )}
    </div>
  );
}

export default Students;