import {
  X,
  ClipboardList,
  UserCircle,
  Hash,
  BedDouble,
  CalendarDays,
  CheckCircle2,
  Building2,
} from "lucide-react";

function AllocationDetails({ allocation, onClose }) {
  if (!allocation) {
    return null;
  }

  const formattedDate = new Date(
    `${allocation.allocationDate}T00:00:00`
  ).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-blue-950/40 px-4 py-6">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-blue-100 px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
              Allocation Management
            </p>

            <h2 className="mt-1 text-lg font-bold text-blue-950">
              Allocation Details
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-400 transition hover:bg-blue-50 hover:text-blue-600"
            aria-label="Close allocation details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[75vh] overflow-y-auto p-6">
          {/* Summary */}
          <div className="rounded-xl bg-blue-50 p-6">
            <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-600">
                <ClipboardList className="h-9 w-9 text-white" />
              </div>

              <div className="mt-4 sm:ml-5 sm:mt-0">
                <h3 className="text-xl font-bold text-blue-950">
                  {allocation.studentName}
                </h3>

                <p className="mt-1 text-sm text-blue-900/50">
                  Allocation ID: {allocation.id}
                </p>

                <span
                  className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    allocation.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {allocation.status}
                </span>
              </div>
            </div>
          </div>

          {/* Student Information */}
          <section className="mt-6">
            <div className="flex items-center gap-3 border-b border-blue-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                <UserCircle className="h-5 w-5 text-blue-600" />
              </div>

              <div>
                <h3 className="font-bold text-blue-950">
                  Student Information
                </h3>

                <p className="text-sm text-blue-900/50">
                  Student assigned to this allocation.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <UserCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

                <div>
                  <p className="text-xs text-blue-900/50">
                    Student Name
                  </p>

                  <p className="mt-1 text-sm font-semibold text-blue-950">
                    {allocation.studentName}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Hash className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

                <div>
                  <p className="text-xs text-blue-900/50">
                    Student ID
                  </p>

                  <p className="mt-1 text-sm font-semibold text-blue-950">
                    {allocation.studentId}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Room Information */}
          <section className="mt-7">
            <div className="flex items-center gap-3 border-b border-blue-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                <BedDouble className="h-5 w-5 text-blue-600" />
              </div>

              <div>
                <h3 className="font-bold text-blue-950">
                  Room Information
                </h3>

                <p className="text-sm text-blue-900/50">
                  Room and bed assigned to the student.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="flex items-center gap-3">
                  <BedDouble className="h-5 w-5 text-blue-600" />

                  <div>
                    <p className="text-xs text-blue-900/50">
                      Room
                    </p>

                    <p className="mt-1 font-bold text-blue-950">
                      {allocation.room}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-blue-50 p-4">
                <div className="flex items-center gap-3">
                  <Hash className="h-5 w-5 text-blue-600" />

                  <div>
                    <p className="text-xs text-blue-900/50">
                      Bed
                    </p>

                    <p className="mt-1 font-bold text-blue-950">
                      {allocation.bed}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-blue-50 p-4">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-blue-600" />

                  <div>
                    <p className="text-xs text-blue-900/50">
                      Hostel
                    </p>

                    <p className="mt-1 font-bold text-blue-950">
                      HM Hostel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Allocation Information */}
          <section className="mt-7">
            <div className="flex items-center gap-3 border-b border-blue-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                <CalendarDays className="h-5 w-5 text-blue-600" />
              </div>

              <div>
                <h3 className="font-bold text-blue-950">
                  Allocation Information
                </h3>

                <p className="text-sm text-blue-900/50">
                  Details about this room allocation.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

                <div>
                  <p className="text-xs text-blue-900/50">
                    Allocation Date
                  </p>

                  <p className="mt-1 text-sm font-semibold text-blue-950">
                    {formattedDate}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

                <div>
                  <p className="text-xs text-blue-900/50">
                    Status
                  </p>

                  <p className="mt-1 text-sm font-semibold text-blue-950">
                    {allocation.status}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-blue-100 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllocationDetails;