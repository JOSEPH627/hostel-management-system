import { useState } from "react";
import {
  X,
  UserPlus,
  UserCircle,
  Mail,
  Phone,
  Hash,
  BedDouble,
  GraduationCap,
  CalendarDays,
  Save,
} from "lucide-react";

function StudentForm({ student, onClose, onSave }) {
  const isEditing = Boolean(student);

  const [formData, setFormData] = useState({
    name: student?.name || "",
    email: student?.email || "",
    phone: student?.phone || "",
    room: student?.room || "",
    status: student?.status || "Active",
    payment: student?.payment || "Pending",
    gender: student?.gender || "",
    program: student?.program || "",
    year: student?.year || "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const studentData = {
      id:
        student?.id ||
        `STU${String(Date.now()).slice(-5)}`,

      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      room: formData.room,
      status: formData.status,
      payment: formData.payment,
      gender: formData.gender,
      program: formData.program,
      year: formData.year,
    };

    onSave(studentData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-blue-950/40 px-4 py-6">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* =====================================
            HEADER
        ====================================== */}
        <div className="flex items-center justify-between border-b border-blue-100 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              {isEditing ? (
                <UserCircle className="h-5 w-5 text-blue-600" />
              ) : (
                <UserPlus className="h-5 w-5 text-blue-600" />
              )}
            </div>

            <div>
              <h2 className="font-bold text-blue-950">
                {isEditing ? "Edit Student" : "Add Student"}
              </h2>

              <p className="text-xs text-blue-900/50">
                {isEditing
                  ? "Update student information."
                  : "Register a new hostel student."}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-400 transition hover:bg-blue-50 hover:text-blue-600"
            aria-label="Close form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* =====================================
            FORM
        ====================================== */}
        <form
          onSubmit={handleSubmit}
          className="max-h-[75vh] space-y-5 overflow-y-auto p-6"
        >
          {/* Student ID */}
          {isEditing && (
            <div className="rounded-lg bg-blue-50 p-4">
              <div className="flex items-center gap-3">
                <Hash className="h-5 w-5 text-blue-500" />

                <div>
                  <p className="text-xs text-blue-900/50">
                    Student ID
                  </p>

                  <p className="text-sm font-bold text-blue-950">
                    {student.id}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Full Name
            </label>

            <div className="relative">
              <UserCircle className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter student's full name"
                required
                className="w-full rounded-lg border border-blue-200 py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-blue-950"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="student@example.com"
                  required
                  className="w-full rounded-lg border border-blue-200 py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-blue-950"
              >
                Phone Number
              </label>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+255 7XX XXX XXX"
                  required
                  className="w-full rounded-lg border border-blue-200 py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
          </div>

          {/* Gender + Year */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Gender */}
            <div>
              <label
                htmlFor="gender"
                className="mb-2 block text-sm font-semibold text-blue-950"
              >
                Gender
              </label>

              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Year */}
            <div>
              <label
                htmlFor="year"
                className="mb-2 block text-sm font-semibold text-blue-950"
              >
                Year of Study
              </label>

              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none rounded-lg border border-blue-200 bg-white py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Select year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="5th Year">5th Year</option>
                </select>
              </div>
            </div>
          </div>

          {/* Program */}
          <div>
            <label
              htmlFor="program"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Program
            </label>

            <div className="relative">
              <GraduationCap className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <input
                id="program"
                name="program"
                type="text"
                value={formData.program}
                onChange={handleChange}
                placeholder="Example: Bachelor of Information Technology"
                required
                className="w-full rounded-lg border border-blue-200 py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Room */}
          <div>
            <label
              htmlFor="room"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Room
            </label>

            <div className="relative">
              <BedDouble className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <select
                id="room"
                name="room"
                value={formData.room}
                onChange={handleChange}
                required
                className="w-full appearance-none rounded-lg border border-blue-200 bg-white py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select room</option>
                <option value="A-101">A-101</option>
                <option value="A-102">A-102</option>
                <option value="A-103">A-103</option>
                <option value="B-201">B-201</option>
                <option value="B-204">B-204</option>
                <option value="B-205">B-205</option>
                <option value="C-301">C-301</option>
                <option value="C-302">C-302</option>
                <option value="C-303">C-303</option>
              </select>
            </div>
          </div>

          {/* Status + Payment */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="mb-2 block text-sm font-semibold text-blue-950"
              >
                Student Status
              </label>

              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Payment */}
            <div>
              <label
                htmlFor="payment"
                className="mb-2 block text-sm font-semibold text-blue-950"
              >
                Payment Status
              </label>

              <select
                id="payment"
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 border-t border-blue-100 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-blue-200 px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <Save className="h-4 w-4" />

              {isEditing ? "Save Changes" : "Add Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;