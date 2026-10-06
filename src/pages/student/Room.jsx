import {
  BedDouble,
  Building2,
  Users,
  MapPin,
  CalendarDays,
  UserCircle,
  CheckCircle2,
  DoorOpen,
} from "lucide-react";

function Room() {
  const room = {
    roomNumber: "A-102",
    floor: "1st Floor",
    roomType: "Standard",
    capacity: 4,
    occupied: 3,
    bed: "Bed 1",
    allocationDate: "01 September 2026",
    status: "Active",
    hostel: "HM Hostel",
    location: "Dar es Salaam, Tanzania",
  };

  const roommates = [
    {
      id: "STU002",
      name: "Neema Joseph",
      bed: "Bed 2",
    },
    {
      id: "STU003",
      name: "John Michael",
      bed: "Bed 3",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div>
        <p className="text-sm font-medium text-blue-500">
          Student Portal
        </p>

        <h1 className="mt-1 text-2xl font-bold text-blue-950">
          My Room
        </h1>

        <p className="mt-1 text-sm text-blue-900/60">
          View your current room allocation and roommate information.
        </p>
      </div>


      {/* Room Overview */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* Main Room Card */}
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm lg:col-span-2">

          {/* Room Header */}
          <div className="flex flex-col gap-4 border-b border-blue-100 pb-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-600">
                <BedDouble className="h-7 w-7 text-white" />
              </div>

              <div>
                <p className="text-sm text-blue-900/50">
                  Room Number
                </p>

                <h2 className="text-2xl font-bold text-blue-950">
                  {room.roomNumber}
                </h2>
              </div>

            </div>


            {/* Status */}
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">

              <CheckCircle2 className="h-4 w-4" />

              {room.status}

            </span>

          </div>


          {/* Room Details */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2">

            {/* Room Type */}
            <div className="flex items-start gap-3">

              <DoorOpen className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />

              <div>
                <p className="text-xs text-blue-900/50">
                  Room Type
                </p>

                <p className="mt-1 text-sm font-semibold text-blue-950">
                  {room.roomType}
                </p>
              </div>

            </div>


            {/* Floor */}
            <div className="flex items-start gap-3">

              <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />

              <div>
                <p className="text-xs text-blue-900/50">
                  Floor
                </p>

                <p className="mt-1 text-sm font-semibold text-blue-950">
                  {room.floor}
                </p>
              </div>

            </div>


            {/* Your Bed */}
            <div className="flex items-start gap-3">

              <BedDouble className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />

              <div>
                <p className="text-xs text-blue-900/50">
                  Your Bed
                </p>

                <p className="mt-1 text-sm font-semibold text-blue-950">
                  {room.bed}
                </p>
              </div>

            </div>


            {/* Allocation Date */}
            <div className="flex items-start gap-3">

              <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />

              <div>
                <p className="text-xs text-blue-900/50">
                  Allocation Date
                </p>

                <p className="mt-1 text-sm font-semibold text-blue-950">
                  {room.allocationDate}
                </p>
              </div>

            </div>


            {/* Capacity */}
            <div className="flex items-start gap-3">

              <Users className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />

              <div>
                <p className="text-xs text-blue-900/50">
                  Room Capacity
                </p>

                <p className="mt-1 text-sm font-semibold text-blue-950">
                  {room.capacity} Students
                </p>
              </div>

            </div>


            {/* Location */}
            <div className="flex items-start gap-3">

              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />

              <div>
                <p className="text-xs text-blue-900/50">
                  Location
                </p>

                <p className="mt-1 text-sm font-semibold text-blue-950">
                  {room.location}
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* Occupancy Card */}
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Users className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h2 className="font-bold text-blue-950">
                Room Occupancy
              </h2>

              <p className="text-xs text-blue-900/50">
                Current room status
              </p>
            </div>

          </div>


          {/* Occupancy Number */}
          <div className="mt-6">

            <div className="flex items-end justify-between">

              <div>
                <p className="text-3xl font-bold text-blue-950">
                  {room.occupied}
                </p>

                <p className="text-sm text-blue-900/50">
                  of {room.capacity} students
                </p>
              </div>

              <p className="text-sm font-semibold text-blue-600">
                {Math.round((room.occupied / room.capacity) * 100)}%
              </p>

            </div>


            {/* Progress Bar */}
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-blue-100">

              <div
                className="h-full rounded-full bg-blue-600"
                style={{
                  width: `${(room.occupied / room.capacity) * 100}%`,
                }}
              />

            </div>

          </div>


          {/* Available Beds */}
          <div className="mt-6 rounded-lg bg-blue-50 p-4">

            <p className="text-xs text-blue-900/50">
              Available Beds
            </p>

            <p className="mt-1 text-xl font-bold text-blue-950">
              {room.capacity - room.occupied}
            </p>

          </div>

        </div>

      </div>


      {/* Roommates */}
      <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">

        <div className="flex items-center gap-3 border-b border-blue-100 pb-4">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
            <Users className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h2 className="font-bold text-blue-950">
              Roommates
            </h2>

            <p className="text-sm text-blue-900/50">
              Students currently sharing room {room.roomNumber}.
            </p>
          </div>

        </div>


        <div className="mt-5 grid gap-4 sm:grid-cols-2">

          {roommates.map((roommate) => (
            <div
              key={roommate.id}
              className="flex items-center justify-between rounded-xl border border-blue-100 p-4"
            >

              <div className="flex min-w-0 items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                  {roommate.name
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </div>

                <div className="min-w-0">

                  <p className="truncate text-sm font-bold text-blue-950">
                    {roommate.name}
                  </p>

                  <p className="text-xs text-blue-900/50">
                    {roommate.id}
                  </p>

                </div>

              </div>


              <div className="ml-3 flex shrink-0 items-center gap-2 rounded-lg bg-blue-50 px-3 py-2">

                <UserCircle className="h-4 w-4 text-blue-500" />

                <span className="text-xs font-semibold text-blue-700">
                  {roommate.bed}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>


      {/* Important Information */}
      <div className="rounded-xl border border-blue-100 bg-blue-600 p-5 text-white">

        <div className="flex items-start gap-3">

          <Building2 className="mt-0.5 h-5 w-5 shrink-0" />

          <div>

            <h3 className="font-bold">
              Room Information
            </h3>

            <p className="mt-1 text-sm leading-6 text-blue-100">
              Please keep your room clean and report any maintenance
              problems through the Requests section of your student portal.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Room;