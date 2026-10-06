import { useMemo, useState } from "react";
import {
  ClipboardList,
  Plus,
  Search,
  Filter,
  X,
  CheckCircle2,
  Clock3,
  BedDouble,
} from "lucide-react";

import allocationsData from "../../data/allocations";
import AllocationTable from "../../components/allocations/AllocationTable";
import AllocationForm from "../../components/allocations/AllocationForm";
import AllocationDetails from "../../components/allocations/AllocationDetails";

function Allocations() {
  const [allocations, setAllocations] = useState(allocationsData);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [isFormOpen, setIsFormOpen] = useState(false);

  const [selectedAllocation, setSelectedAllocation] = useState(null);
  const [viewAllocation, setViewAllocation] = useState(null);

  /*
   * Filter allocations
   */
  const filteredAllocations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return allocations.filter((allocation) => {
      const matchesSearch =
        !query ||
        allocation.studentName
          .toLowerCase()
          .includes(query) ||
        allocation.studentId
          .toLowerCase()
          .includes(query) ||
        allocation.room
          .toLowerCase()
          .includes(query) ||
        allocation.bed
          .toLowerCase()
          .includes(query) ||
        allocation.id
          .toLowerCase()
          .includes(query);

      const matchesStatus =
        statusFilter === "All" ||
        allocation.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [allocations, search, statusFilter]);

  /*
   * Open Add form
   */
  const handleAddAllocation = () => {
    setSelectedAllocation(null);
    setIsFormOpen(true);
  };

  /*
   * Open Edit form
   */
  const handleEditAllocation = (allocation) => {
    setSelectedAllocation(allocation);
    setIsFormOpen(true);
  };

  /*
   * Save Add / Edit
   */
  const handleSaveAllocation = (allocationData) => {
    if (selectedAllocation) {
      setAllocations((currentAllocations) =>
        currentAllocations.map((allocation) =>
          allocation.id === allocationData.id
            ? allocationData
            : allocation
        )
      );
    } else {
      setAllocations((currentAllocations) => [
        ...currentAllocations,
        allocationData,
      ]);
    }

    setIsFormOpen(false);
    setSelectedAllocation(null);
  };

  /*
   * View allocation
   */
  const handleViewAllocation = (allocation) => {
    setViewAllocation(allocation);
  };

  /*
   * Delete allocation
   */
  const handleDeleteAllocation = (allocation) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete the allocation for ${allocation.studentName}?`
    );

    if (!confirmed) {
      return;
    }

    setAllocations((currentAllocations) =>
      currentAllocations.filter(
        (item) => item.id !== allocation.id
      )
    );

    if (viewAllocation?.id === allocation.id) {
      setViewAllocation(null);
    }
  };

  /*
   * Clear filters
   */
  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All");
  };

  const hasActiveFilters =
    search.trim() !== "" ||
    statusFilter !== "All";

  /*
   * Statistics
   */
  const totalAllocations = allocations.length;

  const activeAllocations = allocations.filter(
    (allocation) => allocation.status === "Active"
  ).length;

  const endedAllocations = allocations.filter(
    (allocation) => allocation.status === "Ended"
  ).length;

  /*
   * This is currently based on the room data we already have.
   * Later, allocations and rooms will be connected dynamically.
   */
  const totalBeds = 30;
  const allocatedBeds = allocations.filter(
    (allocation) => allocation.status === "Active"
  ).length;

  const availableBeds = Math.max(
    totalBeds - allocatedBeds,
    0
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-500">
            Hostel Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-blue-950">
            Allocations
          </h1>

          <p className="mt-1 text-sm text-blue-900/60">
            Manage student room and bed allocations.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddAllocation}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add Allocation
        </button>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Total Allocations
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {totalAllocations}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <ClipboardList className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Active */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Active
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {activeAllocations}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>

        {/* Ended */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Ended
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {endedAllocations}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100">
              <Clock3 className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Available Beds */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Available Beds
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {availableBeds}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <BedDouble className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search student, ID, room or bed..."
              className="w-full rounded-lg border border-blue-200 py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <div className="relative min-w-[180px]">
              <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-400" />

              <select
                value={statusFilter}
                onChange={(event) =>
                  setStatusFilter(event.target.value)
                }
                className="w-full appearance-none rounded-lg border border-blue-200 bg-white py-3 pl-10 pr-8 text-sm font-medium text-blue-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                <option value="All">
                  All Statuses
                </option>

                <option value="Active">
                  Active
                </option>

                <option value="Ended">
                  Ended
                </option>
              </select>
            </div>

            {/* Clear */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-blue-200 text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                aria-label="Clear filters"
                title="Clear filters"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Result Count */}
        <div className="mt-3">
          <p className="text-xs text-blue-900/50">
            Showing{" "}
            <span className="font-semibold text-blue-700">
              {filteredAllocations.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-blue-700">
              {totalAllocations}
            </span>{" "}
            allocations
          </p>
        </div>
      </div>

      {/* Table */}
      <AllocationTable
        allocations={filteredAllocations}
        onView={handleViewAllocation}
        onEdit={handleEditAllocation}
        onDelete={handleDeleteAllocation}
      />

      {/* Add / Edit Modal */}
      {isFormOpen && (
        <AllocationForm
          allocation={selectedAllocation}
          onClose={() => {
            setIsFormOpen(false);
            setSelectedAllocation(null);
          }}
          onSave={handleSaveAllocation}
        />
      )}

      {/* View Modal */}
      {viewAllocation && (
        <AllocationDetails
          allocation={viewAllocation}
          onClose={() => setViewAllocation(null)}
        />
      )}
    </div>
  );
}

export default Allocations;