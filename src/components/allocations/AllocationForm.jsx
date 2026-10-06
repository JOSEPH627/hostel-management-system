import { useState } from "react";
import {
  X,
  ClipboardList,
  UserCircle,
  BedDouble,
  CalendarDays,
  Save,
  Hash,
} from "lucide-react";

function AllocationForm({ allocation, onClose, onSave }) {
  const isEditing = Boolean(allocation);

  const [formData, setFormData] = useState({
    studentId: allocation?.studentId || "",
    studentName: allocation?.studentName || "",
    room: allocation?.room || "",
    bed: allocation?.bed || "",
    allocationDate: allocation?.allocationDate || "",
    status: allocation?.status || "Active",
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

    const allocationData = {
      id:
        allocation?.id ||
        `ALC${String(Date.now()).slice(-5)}`,

      studentId: formData.studentId,
      studentName: formData.studentName,
      room: formData.room,
      bed: formData.bed,
      allocationDate: formData.allocationDate,
      status: formData.status,
    };

    onSave(allocationData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-blue-950/40 px-4 py-6">
      <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-blue-100 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <ClipboardList className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h2 className="font-bold text-blue-950">
                {isEditing
                  ? "Edit Allocation"
                  : "Add Allocation"}
              </h2>

              <p className="text-xs text-blue-900/50">
                {isEditing
                  ? "Update student room allocation."
                  : "Assign a student to a hostel room."}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-400 transition hover:bg-blue-50 hover:text-blue-600"
            aria-label="Close allocation form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-h-[75vh] space-y-5 overflow-y-auto p-6"
        >
          {/* Allocation ID */}
          {isEditing && (
            <div className="rounded-lg bg-blue-50 p-4">
              <div className="flex items-center gap-3">
                <Hash className="h-5 w-5 text-blue-500" />

                <div>
                  <p className="text-xs text-blue-900/50">
                    Allocation ID
                  </p>

                  <p className="text-sm font-bold text-blue-950">
                    {allocation.id}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Student ID */}
          <div>
            <label
              htmlFor="studentId"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Student ID
            </label>

            <div className="relative">
              <Hash className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <input
                id="studentId"
                name="studentId"
                type="text"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="Example: STU001"
                required
                className="w-full rounded-lg border border-blue-200 py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Student Name */}
          <div>
            <label
              htmlFor="studentName"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Student Name
            </label>

            <div className="relative">
              <UserCircle className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <input
                id="studentName"
                name="studentName"
                type="text"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter student name"
                required
                className="w-full rounded-lg border border-blue-200 py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Room + Bed */}
          <div className="grid gap-5 sm:grid-cols-2">
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
                  <option value="">
                    Select room
                  </option>

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

            {/* Bed */}
            <div>
              <label
                htmlFor="bed"
                className="mb-2 block text-sm font-semibold text-blue-950"
              >
                Bed
              </label>

              <select
                id="bed"
                name="bed"
                value={formData.bed}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">
                  Select bed
                </option>

                <option value="Bed 1">Bed 1</option>
                <option value="Bed 2">Bed 2</option>
                <option value="Bed 3">Bed 3</option>
                <option value="Bed 4">Bed 4</option>
              </select>
            </div>
          </div>

          {/* Allocation Date */}
          <div>
            <label
              htmlFor="allocationDate"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Allocation Date
            </label>

            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <input
                id="allocationDate"
                name="allocationDate"
                type="date"
                value={formData.allocationDate}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-blue-200 py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Allocation Status
            </label>

            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            >
              <option value="Active">Active</option>
              <option value="Ended">Ended</option>
            </select>
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

              {isEditing
                ? "Save Changes"
                : "Add Allocation"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AllocationForm;