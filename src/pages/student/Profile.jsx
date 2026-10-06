import {
  UserCircle,
  Mail,
  Phone,
  Hash,
  GraduationCap,
  CalendarDays,
  MapPin,
  BedDouble,
  Edit3,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import studentData from "../../data/student";

function Profile() {
  const { currentUser } = useAuth();

  /*
   * Find the detailed student profile using
   * the ID of the student who is currently logged in.
   */
  const student =
    currentUser?.id === studentData.id
      ? studentData
      : null;

  if (!student) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="rounded-xl border border-blue-100 bg-white p-8 text-center shadow-sm">
          <UserCircle className="mx-auto h-12 w-12 text-blue-300" />

          <h1 className="mt-4 text-lg font-bold text-blue-950">
            Student Profile Not Found
          </h1>

          <p className="mt-2 text-sm text-blue-900/60">
            We could not find profile information for your account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-sm font-medium text-blue-500">
            Student Portal
          </p>

          <h1 className="mt-1 text-2xl font-bold text-blue-950">
            My Profile
          </h1>

          <p className="mt-1 text-sm text-blue-900/60">
            View and manage your personal information.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <Edit3 className="h-4 w-4" />
          Edit Profile
        </button>

      </div>

      {/* Profile Overview */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* Profile Card */}
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">

          <div className="flex flex-col items-center text-center">

            {/* Avatar */}
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
              {student.name
                .split(" ")
                .map((name) => name[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </div>

            <h2 className="mt-4 text-xl font-bold text-blue-950">
              {student.name}
            </h2>

            <p className="mt-1 text-sm text-blue-900/50">
              {student.id}
            </p>

            <span className="mt-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {student.status}
            </span>

          </div>

          {/* Contact Information */}
          <div className="mt-6 space-y-4 border-t border-blue-100 pt-6">

            {/* Email */}
            <div className="flex items-center gap-3">

              <Mail className="h-5 w-5 shrink-0 text-blue-400" />

              <div className="min-w-0">

                <p className="text-xs text-blue-900/50">
                  Email
                </p>

                <p className="truncate text-sm font-medium text-blue-950">
                  {student.email}
                </p>

              </div>

            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">

              <Phone className="h-5 w-5 shrink-0 text-blue-400" />

              <div>

                <p className="text-xs text-blue-900/50">
                  Phone
                </p>

                <p className="text-sm font-medium text-blue-950">
                  {student.phone}
                </p>

              </div>

            </div>

            {/* Join Date */}
            <div className="flex items-center gap-3">

              <CalendarDays className="h-5 w-5 shrink-0 text-blue-400" />

              <div>

                <p className="text-xs text-blue-900/50">
                  Joined Hostel
                </p>

                <p className="text-sm font-medium text-blue-950">
                  {student.joinDate}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Personal Information */}
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm lg:col-span-2">

          <div className="flex items-center gap-3 border-b border-blue-100 pb-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <UserCircle className="h-5 w-5 text-blue-600" />
            </div>

            <div>

              <h2 className="font-bold text-blue-950">
                Personal Information
              </h2>

              <p className="text-sm text-blue-900/50">
                Your personal and academic details.
              </p>

            </div>

          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">

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

            {/* Gender */}
            <div className="flex items-start gap-3">

              <UserCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

              <div>

                <p className="text-xs text-blue-900/50">
                  Gender
                </p>

                <p className="mt-1 text-sm font-semibold text-blue-950">
                  {student.gender}
                </p>

              </div>

            </div>

            {/* Program */}
            <div className="flex items-start gap-3">

              <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

              <div>

                <p className="text-xs text-blue-900/50">
                  Program
                </p>

                <p className="mt-1 text-sm font-semibold text-blue-950">
                  {student.program}
                </p>

              </div>

            </div>

            {/* Year of Study */}
            <div className="flex items-start gap-3">

              <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

              <div>

                <p className="text-xs text-blue-900/50">
                  Year of Study
                </p>

                <p className="mt-1 text-sm font-semibold text-blue-950">
                  {student.year}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Hostel Information */}
      <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">

        <div className="flex items-center gap-3 border-b border-blue-100 pb-4">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
            <BedDouble className="h-5 w-5 text-blue-600" />
          </div>

          <div>

            <h2 className="font-bold text-blue-950">
              Hostel Information
            </h2>

            <p className="text-sm text-blue-900/50">
              Your current hostel allocation.
            </p>

          </div>

        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {/* Room */}
          <div className="rounded-lg bg-blue-50 p-4">

            <div className="flex items-center gap-3">

              <BedDouble className="h-5 w-5 text-blue-600" />

              <div>

                <p className="text-xs text-blue-900/50">
                  Room
                </p>

                <p className="mt-1 font-bold text-blue-950">
                  {student.room.number}
                </p>

              </div>

            </div>

          </div>

          {/* Bed */}
          <div className="rounded-lg bg-blue-50 p-4">

            <div className="flex items-center gap-3">

              <Hash className="h-5 w-5 text-blue-600" />

              <div>

                <p className="text-xs text-blue-900/50">
                  Bed
                </p>

                <p className="mt-1 font-bold text-blue-950">
                  {student.room.bed}
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
                  Hostel Location
                </p>

                <p className="mt-1 font-bold text-blue-950">
                  {student.room.location}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;