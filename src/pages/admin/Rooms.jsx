import { useMemo, useState } from "react";
import {
  BedDouble,
  Plus,
  Search,
  Eye,
  Edit3,
  Trash2,
  Users,
  CheckCircle2,
  AlertCircle,
  Wrench,
  X,
} from "lucide-react";

import roomsData from "../../data/rooms";
import RoomForm from "../../components/rooms/RoomForm";

function Rooms() {
  const [rooms, setRooms] = useState(roomsData);
  const [search, setSearch] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomToEdit, setRoomToEdit] = useState(null);

  /* -----------------------------
     FILTER ROOMS
  ----------------------------- */
  const filteredRooms = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return rooms;
    }

    return rooms.filter(
      (room) =>
        room.room.toLowerCase().includes(query) ||
        room.floor.toLowerCase().includes(query) ||
        room.type.toLowerCase().includes(query) ||
        room.status.toLowerCase().includes(query)
    );
  }, [rooms, search]);

  /* -----------------------------
     ROOM STATISTICS
  ----------------------------- */
  const totalRooms = rooms.length;

  const availableRooms = rooms.filter(
    (room) => room.status === "Available"
  ).length;

  const fullRooms = rooms.filter(
    (room) => room.status === "Full"
  ).length;

  const maintenanceRooms = rooms.filter(
    (room) => room.status === "Maintenance"
  ).length;

  const totalCapacity = rooms.reduce(
    (total, room) => total + Number(room.capacity || 0),
    0
  );

  const totalOccupied = rooms.reduce(
    (total, room) => total + Number(room.occupied || 0),
    0
  );

  const totalAvailableBeds = Math.max(
    0,
    totalCapacity - totalOccupied
  );

  /* -----------------------------
     OPEN ADD FORM
  ----------------------------- */
  const handleOpenAdd = () => {
    setRoomToEdit(null);
    setIsFormOpen(true);
  };

  /* -----------------------------
     OPEN EDIT FORM
  ----------------------------- */
  const handleEdit = (room) => {
    setRoomToEdit(room);
    setIsFormOpen(true);
  };

  /* -----------------------------
     SAVE ROOM
  ----------------------------- */
  const handleSaveRoom = (roomData) => {
    setRooms((currentRooms) => {
      const existingRoom = currentRooms.some(
        (room) => room.id === roomData.id
      );

      if (existingRoom) {
        return currentRooms.map((room) =>
          room.id === roomData.id ? roomData : room
        );
      }

      return [...currentRooms, roomData];
    });

    setIsFormOpen(false);
    setRoomToEdit(null);
  };

  /* -----------------------------
     DELETE ROOM
  ----------------------------- */
  const handleDelete = (roomId) => {
    const room = rooms.find((item) => item.id === roomId);

    if (!room) {
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete room ${room.room}?`
    );

    if (!confirmed) {
      return;
    }

    setRooms((currentRooms) =>
      currentRooms.filter((item) => item.id !== roomId)
    );

    if (selectedRoom?.id === roomId) {
      setSelectedRoom(null);
    }
  };

  /* -----------------------------
     CLOSE FORM
  ----------------------------- */
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setRoomToEdit(null);
  };

  return (
    <div className="space-y-6">
      {/* =====================================
          PAGE HEADER
      ====================================== */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-500">
            Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-blue-950">
            Rooms
          </h1>

          <p className="mt-1 text-sm text-blue-900/60">
            Manage hostel rooms, capacity and occupancy.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenAdd}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add Room
        </button>
      </div>

      {/* =====================================
          SUMMARY CARDS
      ====================================== */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total Rooms */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Total Rooms
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {totalRooms}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <BedDouble className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Available */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Available Rooms
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {availableRooms}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Full */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Full Rooms
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {fullRooms}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Maintenance */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-900/50">
                Maintenance
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {maintenanceRooms}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Wrench className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================
          CAPACITY OVERVIEW
      ====================================== */}
      <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-bold text-blue-950">
              Hostel Capacity
            </h2>

            <p className="mt-1 text-sm text-blue-900/50">
              Current bed occupancy across all rooms.
            </p>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-2xl font-bold text-blue-950">
              {totalOccupied} / {totalCapacity}
            </p>

            <p className="text-xs text-blue-900/50">
              {totalAvailableBeds} beds available
            </p>
          </div>
        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-blue-50">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{
              width: `${
                totalCapacity > 0
                  ? Math.min(
                      100,
                      (totalOccupied / totalCapacity) * 100
                    )
                  : 0
              }%`,
            }}
          />
        </div>

        <div className="mt-2 flex justify-between text-xs text-blue-900/50">
          <span>Occupied</span>

          <span>
            {totalCapacity > 0
              ? Math.round(
                  (totalOccupied / totalCapacity) * 100
                )
              : 0}
            %
          </span>
        </div>
      </div>

      {/* =====================================
          ROOMS TABLE
      ====================================== */}
      <div className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
        {/* Table Header */}
        <div className="border-b border-blue-100 p-4 sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-bold text-blue-950">
                All Rooms
              </h2>

              <p className="mt-1 text-xs text-blue-900/50">
                {filteredRooms.length} room
                {filteredRooms.length !== 1 ? "s" : ""} found
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
                placeholder="Search rooms..."
                className="w-full rounded-lg border border-blue-200 bg-white py-2.5 pl-9 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full">
            <thead>
              <tr className="border-b border-blue-100 bg-blue-50/60">
                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Room
                </th>

                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Floor
                </th>

                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Type
                </th>

                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Capacity
                </th>

                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Occupancy
                </th>

                <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Status
                </th>

                <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-blue-900/50">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredRooms.map((room) => {
                const availableBeds = Math.max(
                  0,
                  Number(room.capacity) -
                    Number(room.occupied)
                );

                return (
                  <tr
                    key={room.id}
                    className="border-b border-blue-50 transition hover:bg-blue-50/30"
                  >
                    {/* Room */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                          <BedDouble className="h-5 w-5 text-blue-600" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-blue-950">
                            {room.room}
                          </p>

                          <p className="text-xs text-blue-900/50">
                            {room.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Floor */}
                    <td className="px-5 py-4 text-sm font-medium text-blue-900">
                      {room.floor}
                    </td>

                    {/* Type */}
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                        {room.type}
                      </span>
                    </td>

                    {/* Capacity */}
                    <td className="px-5 py-4 text-sm font-medium text-blue-900">
                      {room.capacity} beds
                    </td>

                    {/* Occupancy */}
                    <td className="px-5 py-4">
                      <div className="min-w-[130px]">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-blue-950">
                            {room.occupied}/{room.capacity}
                          </span>

                          <span className="text-blue-900/50">
                            {availableBeds} free
                          </span>
                        </div>

                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-blue-100">
                          <div
                            className="h-full rounded-full bg-blue-600"
                            style={{
                              width: `${
                                room.capacity > 0
                                  ? Math.min(
                                      100,
                                      (room.occupied /
                                        room.capacity) *
                                        100
                                    )
                                  : 0
                              }%`,
                            }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                          room.status === "Available"
                            ? "bg-blue-50 text-blue-700"
                            : room.status === "Full"
                            ? "bg-blue-100 text-blue-900"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {room.status === "Available" && (
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        )}

                        {room.status === "Full" && (
                          <AlertCircle className="h-3.5 w-3.5" />
                        )}

                        {room.status === "Maintenance" && (
                          <Wrench className="h-3.5 w-3.5" />
                        )}

                        {room.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-1">
                        {/* View */}
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedRoom(room)
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                          aria-label={`View ${room.room}`}
                        >
                          <Eye className="h-4 w-4" />
                        </button>

                        {/* Edit */}
                        <button
                          type="button"
                          onClick={() => handleEdit(room)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-500 transition hover:bg-blue-50 hover:text-blue-700"
                          aria-label={`Edit ${room.room}`}
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>

                        {/* Delete */}
                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(room.id)
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-400 transition hover:bg-blue-50 hover:text-blue-700"
                          aria-label={`Delete ${room.room}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {/* Empty */}
              {filteredRooms.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-5 py-12 text-center"
                  >
                    <BedDouble className="mx-auto h-10 w-10 text-blue-200" />

                    <p className="mt-3 text-sm font-semibold text-blue-950">
                      No rooms found
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

      {/* =====================================
          VIEW ROOM MODAL
      ====================================== */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/40 px-4 py-6">
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-blue-100 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <BedDouble className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <h2 className="font-bold text-blue-950">
                    Room {selectedRoom.room}
                  </h2>

                  <p className="text-xs text-blue-900/50">
                    Room details
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedRoom(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-400 transition hover:bg-blue-50 hover:text-blue-600"
                aria-label="Close room details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Details */}
            <div className="space-y-4 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="text-xs text-blue-900/50">
                    Room
                  </p>

                  <p className="mt-1 font-bold text-blue-950">
                    {selectedRoom.room}
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="text-xs text-blue-900/50">
                    Floor
                  </p>

                  <p className="mt-1 font-bold text-blue-950">
                    {selectedRoom.floor}
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="text-xs text-blue-900/50">
                    Type
                  </p>

                  <p className="mt-1 font-bold text-blue-950">
                    {selectedRoom.type}
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="text-xs text-blue-900/50">
                    Status
                  </p>

                  <p className="mt-1 font-bold text-blue-950">
                    {selectedRoom.status}
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-blue-100 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-blue-900/50">
                      Occupancy
                    </p>

                    <p className="mt-1 text-lg font-bold text-blue-950">
                      {selectedRoom.occupied} /{" "}
                      {selectedRoom.capacity}
                    </p>
                  </div>

                  <Users className="h-6 w-6 text-blue-500" />
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-blue-50">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{
                      width: `${
                        selectedRoom.capacity > 0
                          ? Math.min(
                              100,
                              (selectedRoom.occupied /
                                selectedRoom.capacity) *
                                100
                            )
                          : 0
                      }%`,
                    }}
                  />
                </div>

                <p className="mt-2 text-xs text-blue-900/50">
                  {Math.max(
                    0,
                    selectedRoom.capacity -
                      selectedRoom.occupied
                  )}{" "}
                  beds available
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-blue-100 p-4">
              <button
                type="button"
                onClick={() => setSelectedRoom(null)}
                className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================
          ADD / EDIT ROOM FORM
      ====================================== */}
      {isFormOpen && (
        <RoomForm
          room={roomToEdit}
          onClose={handleCloseForm}
          onSave={handleSaveRoom}
        />
      )}
    </div>
  );
}

export default Rooms;