import {
  X,
  UserCircle,
  Mail,
  Phone,
  Hash,
  BedDouble,
  GraduationCap,
  CalendarDays,
  CreditCard,
  CheckCircle2,
  MapPin,
} from "lucide-react";

function StudentDetails({ student, onClose }) {
  if (!student) {
    return null;
  }

  const initials = student.name
    .split(" ")
    .map((name) => name[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-blue-950/40 px-4 py-6">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-blue-100 px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
              Student Management
            </p>

            <h2 className="mt-1 text-lg font-bold text-blue-950">
              Student Details
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-400 transition hover:bg-blue-50 hover:text-blue-600"
            aria-label="Close student details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[75vh] overflow-y-auto p-6">
          {/* Profile Summary */}
          <div className="flex flex-col items-center rounded-xl bg-blue-50 p-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
              {initials}
            </div>

            <div className="mt-4 sm:ml-5 sm:mt-0">
              <h3 className="text-xl font-bold text-blue-950">
                {student.name}
              </h3>

              <p className="mt-1 text-sm text-blue-900/50">
                Student ID: {student.id}
              </p>

              <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    student.status === "Active"
                      ? "bg-white text-blue-700"
                      : "bg-blue-100 text-blue-900/60"
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {student.status}
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    student.payment === "Paid"
                      ? "bg-white text-blue-700"
                      : "bg-blue-100 text-blue-900/60"
                  }`}
                >
                  <CreditCard className="h-3.5 w-3.5" />
                  {student.payment}
                </span>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <section className="mt-6">
            <div className="mb-4 flex items-center gap-3 border-b border-blue-100 pb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                <UserCircle className="h-5 w-5 text-blue-600" />
              </div>

              <div>
                <h3 className="font-bold text-blue-950">
                  Personal Information
                </h3>

                <p className="text-xs text-blue-900/50">
                  Student contact and personal details.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Student ID */}
              <div className="flex items-start gap-3">
                <Hash className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

                <div>
                  <p className="text-xs text-blue-900/50">
                    Student ID
                  </p>

                  <p className="mt-1 text-sm font-semibold text-blue-950">
                    {student.id}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

                <div className="min-w-0">
                  <p className="text-xs text-blue-900/50">
                    Email Address
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-blue-950">
                    {student.email || "Not provided"}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

                <div>
                  <p className="text-xs text-blue-900/50">
                    Phone Number
                  </p>

                  <p className="mt-1 text-sm font-semibold text-blue-950">
                    {student.phone || "Not provided"}
                  </p>
                </div>
              </div>

              {/* Gender */}
              <div className="flex items-start gap-3">
                <UserCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

                <div>
                  <p className="text-xs text-blue-900/50">
                    Gender
                  </p>

                  <p className="mt-1 text-sm font-semibold text-blue-950">
                    {student.gender || "Not provided"}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Academic Information */}
          <section className="mt-7">
            <div className="mb-4 flex items-center gap-3 border-b border-blue-100 pb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                <GraduationCap className="h-5 w-5 text-blue-600" />
              </div>

              <div>
                <h3 className="font-bold text-blue-950">
                  Academic Information
                </h3>

                <p className="text-xs text-blue-900/50">
                  Student education details.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Program */}
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

                <div>
                  <p className="text-xs text-blue-900/50">
                    Program
                  </p>

                  <p className="mt-1 text-sm font-semibold text-blue-950">
                    {student.program || "Not provided"}
                  </p>
                </div>
              </div>

              {/* Year */}
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

                <div>
                  <p className="text-xs text-blue-900/50">
                    Year of Study
                  </p>

                  <p className="mt-1 text-sm font-semibold text-blue-950">
                    {student.year || "Not provided"}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Hostel Information */}
          <section className="mt-7">
            <div className="mb-4 flex items-center gap-3 border-b border-blue-100 pb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                <BedDouble className="h-5 w-5 text-blue-600" />
              </div>

              <div>
                <h3 className="font-bold text-blue-950">
                  Hostel Information
                </h3>

                <p className="text-xs text-blue-900/50">
                  Current room allocation.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {/* Room */}
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="flex items-center gap-3">
                  <BedDouble className="h-5 w-5 text-blue-600" />

                  <div>
                    <p className="text-xs text-blue-900/50">
                      Room
                    </p>

                    <p className="mt-1 font-bold text-blue-950">
                      {student.room || "Not allocated"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Allocation */}
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-blue-600" />

                  <div>
                    <p className="text-xs text-blue-900/50">
                      Allocation
                    </p>

                    <p className="mt-1 font-bold text-blue-950">
                      Current
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />

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
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-blue-100 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-blue-200 px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;