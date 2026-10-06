import { useState } from "react";
import {
  X,
  BedDouble,
  Hash,
  Layers3,
  Users,
  Save,
} from "lucide-react";

function RoomForm({ room, onClose, onSave }) {
  const [formData, setFormData] = useState({
    room: room?.room || "",
    floor: room?.floor || "",
    type: room?.type || "Standard",
    capacity: room?.capacity || "",
    occupied: room?.occupied || 0,
    status: room?.status || "Available",
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

    const capacity = Number(formData.capacity);
    let occupied = Number(formData.occupied);

    if (occupied > capacity) {
      occupied = capacity;
    }

    let status = formData.status;

    if (occupied === capacity) {
      status = "Full";
    } else if (status === "Full") {
      status = "Available";
    }

    const roomData = {
      id: room?.id || `RM${Date.now().toString().slice(-5)}`,
      room: formData.room.trim(),
      floor: formData.floor,
      type: formData.type,
      capacity,
      occupied,
      status,
    };

    onSave(roomData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-blue-950/40 px-4 py-6">
      <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-blue-100 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <BedDouble className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h2 className="font-bold text-blue-950">
                {room ? "Edit Room" : "Add Room"}
              </h2>

              <p className="text-xs text-blue-900/50">
                {room
                  ? "Update room information."
                  : "Create a new hostel room."}
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          {/* Room Number */}
          <div>
            <label
              htmlFor="room"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Room Number
            </label>

            <div className="relative">
              <Hash className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <input
                id="room"
                name="room"
                type="text"
                value={formData.room}
                onChange={handleChange}
                placeholder="Example: A-104"
                required
                className="w-full rounded-lg border border-blue-200 py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Floor */}
          <div>
            <label
              htmlFor="floor"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Floor
            </label>

            <div className="relative">
              <Layers3 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <select
                id="floor"
                name="floor"
                value={formData.floor}
                onChange={handleChange}
                required
                className="w-full appearance-none rounded-lg border border-blue-200 bg-white py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select floor</option>
                <option value="Ground Floor">Ground Floor</option>
                <option value="1st Floor">1st Floor</option>
                <option value="2nd Floor">2nd Floor</option>
                <option value="3rd Floor">3rd Floor</option>
                <option value="4th Floor">4th Floor</option>
              </select>
            </div>
          </div>

          {/* Room Type */}
          <div>
            <label
              htmlFor="type"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Room Type
            </label>

            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            >
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </select>
          </div>

          {/* Capacity + Occupied */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="capacity"
                className="mb-2 block text-sm font-semibold text-blue-950"
              >
                Capacity
              </label>

              <div className="relative">
                <Users className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

                <input
                  id="capacity"
                  name="capacity"
                  type="number"
                  min="1"
                  max="20"
                  value={formData.capacity}
                  onChange={handleChange}
                  placeholder="4"
                  required
                  className="w-full rounded-lg border border-blue-200 py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="occupied"
                className="mb-2 block text-sm font-semibold text-blue-950"
              >
                Occupied Beds
              </label>

              <input
                id="occupied"
                name="occupied"
                type="number"
                min="0"
                max={formData.capacity || 20}
                value={formData.occupied}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-blue-200 px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Room Status
            </label>

            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            >
              <option value="Available">Available</option>
              <option value="Full">Full</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          {/* Summary */}
          <div className="rounded-lg bg-blue-50 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-blue-900/60">
                Available Beds
              </span>

              <span className="font-bold text-blue-950">
                {Math.max(
                  0,
                  Number(formData.capacity || 0) -
                    Number(formData.occupied || 0)
                )}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
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
              {room ? "Save Changes" : "Add Room"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RoomForm;