import {
  Eye,
  Edit3,
  Trash2,
  UserCircle,
  BedDouble,
  CheckCircle2,
  Clock3,
} from "lucide-react";

function AllocationTable({
  allocations,
  onView,
  onEdit,
  onDelete,
}) {
  if (allocations.length === 0) {
    return (
      <div className="rounded-xl border border-blue-100 bg-white p-10 text-center shadow-sm">
        <ClipboardEmptyIcon />

        <h3 className="mt-4 text-lg font-bold text-blue-950">
          No Allocations Found
        </h3>

        <p className="mt-2 text-sm text-blue-900/50">
          There are no allocations matching your search or filter.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px]">
          <thead>
            <tr className="border-b border-blue-100 bg-blue-50/70">
              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-500">
                Student
              </th>

              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-500">
                Student ID
              </th>

              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-500">
                Room
              </th>

              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-500">
                Bed
              </th>

              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-500">
                Allocation Date
              </th>

              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-blue-500">
                Status
              </th>

              <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wide text-blue-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-blue-50">
            {allocations.map((allocation) => (
              <tr
                key={allocation.id}
                className="transition hover:bg-blue-50/40"
              >
                {/* Student */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <UserCircle className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-blue-950">
                        {allocation.studentName}
                      </p>

                      <p className="text-xs text-blue-900/50">
                        Allocation
                      </p>
                    </div>
                  </div>
                </td>

                {/* Student ID */}
                <td className="px-5 py-4">
                  <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                    {allocation.studentId}
                  </span>
                </td>

                {/* Room */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <BedDouble className="h-4 w-4 text-blue-400" />

                    <span className="text-sm font-semibold text-blue-950">
                      {allocation.room}
                    </span>
                  </div>
                </td>

                {/* Bed */}
                <td className="px-5 py-4">
                  <span className="text-sm text-blue-900">
                    {allocation.bed}
                  </span>
                </td>

                {/* Date */}
                <td className="px-5 py-4">
                  <span className="text-sm text-blue-900">
                    {formatDate(allocation.allocationDate)}
                  </span>
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  {allocation.status === "Active" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                      <Clock3 className="h-3.5 w-3.5" />
                      Ended
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      type="button"
                      onClick={() => onView(allocation)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                      aria-label={`View ${allocation.studentName}`}
                      title="View"
                    >
                      <Eye className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onEdit(allocation)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                      aria-label={`Edit ${allocation.studentName}`}
                      title="Edit"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(allocation)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-red-400 transition hover:bg-red-50 hover:text-red-600"
                      aria-label={`Delete ${allocation.studentName}`}
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table footer */}
      <div className="border-t border-blue-100 px-5 py-3">
        <p className="text-xs text-blue-900/50">
          Showing{" "}
          <span className="font-semibold text-blue-700">
            {allocations.length}
          </span>{" "}
          allocation{allocations.length !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}

function formatDate(date) {
  if (!date) {
    return "Not provided";
  }

  const parsedDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function ClipboardEmptyIcon() {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
      <BedDouble className="h-7 w-7 text-blue-300" />
    </div>
  );
}

export default AllocationTable;