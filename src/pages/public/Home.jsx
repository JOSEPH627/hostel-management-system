import {
  Building2,
  Users,
  BedDouble,
  CreditCard,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";

import hostelRoom from "../../assets/images/hostel-room.jpg";
import hostelBuilding from "../../assets/images/hostel-building.jpg";
import hostelCommonArea from "../../assets/images/hostel-common-area.jpg";

function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <section className="bg-blue-50">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">

            {/* Hero Text */}
            <div>
              <p className="mb-3 font-semibold uppercase tracking-wide text-blue-600">
                Hostel Management System
              </p>

              <h2 className="text-4xl font-bold leading-tight text-blue-950 md:text-5xl">
                Manage your hostel
                <span className="block text-blue-600">
                  easily and efficiently.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-blue-900/70">
                A modern platform for managing students, rooms,
                allocations, payments and hostel operations from
                one place.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Get Started
                </button>

                <button className="rounded-lg border border-blue-600 bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-lg">
              <img
                src={hostelRoom}
                alt="Hostel room"
                className="h-[350px] w-full object-cover"
              />
            </div>

          </div>
        </section>

        {/* Hostel Gallery */}
        <section className="mx-auto max-w-7xl px-6 py-16">

          <div className="mb-10 text-center">
            <p className="font-semibold text-blue-600">
              HOSTEL GALLERY
            </p>

            <h3 className="mt-2 text-3xl font-bold text-blue-950">
              Take a look at our hostel
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-blue-900/60">
              Explore our hostel environment, rooms and facilities.
            </p>
          </div>

          {/* Gallery Images */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Hostel Room */}
            <div className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
              <img
                src={hostelRoom}
                alt="Hostel room"
                className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="p-5">
                <h4 className="font-bold text-blue-950">
                  Comfortable Rooms
                </h4>

                <p className="mt-2 text-sm text-blue-900/60">
                  Clean and comfortable rooms designed for students.
                </p>
              </div>
            </div>

            {/* Hostel Building */}
            <div className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
              <img
                src={hostelBuilding}
                alt="Hostel building"
                className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="p-5">
                <h4 className="font-bold text-blue-950">
                  Hostel Building
                </h4>

                <p className="mt-2 text-sm text-blue-900/60">
                  A secure and organized environment for residents.
                </p>
              </div>
            </div>

            {/* Common Area */}
            <div className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
              <img
                src={hostelCommonArea}
                alt="Hostel common area"
                className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="p-5">
                <h4 className="font-bold text-blue-950">
                  Common Area
                </h4>

                <p className="mt-2 text-sm text-blue-900/60">
                  Shared spaces where students can relax and interact.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* Features */}
        <section
          id="features"
          className="mx-auto max-w-7xl px-6 py-16"
        >
          <div className="mb-10 text-center">
            <p className="font-semibold text-blue-600">
              OUR FEATURES
            </p>

            <h3 className="mt-2 text-3xl font-bold text-blue-950">
              Everything in one place
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-blue-900/60">
              Manage the most important hostel operations
              easily and efficiently.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Students */}
            <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <Users className="h-6 w-6 text-white" />
              </div>

              <h4 className="font-bold text-blue-950">
                Students
              </h4>

              <p className="mt-2 text-sm leading-6 text-blue-900/60">
                Manage student information and hostel residents.
              </p>
            </div>

            {/* Rooms */}
            <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <BedDouble className="h-6 w-6 text-white" />
              </div>

              <h4 className="font-bold text-blue-950">
                Rooms
              </h4>

              <p className="mt-2 text-sm leading-6 text-blue-900/60">
                Track rooms, capacity, occupancy and availability.
              </p>
            </div>

            {/* Payments */}
            <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <CreditCard className="h-6 w-6 text-white" />
              </div>

              <h4 className="font-bold text-blue-950">
                Payments
              </h4>

              <p className="mt-2 text-sm leading-6 text-blue-900/60">
                Keep track of hostel payments and financial records.
              </p>
            </div>

            {/* Management */}
            <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <Building2 className="h-6 w-6 text-white" />
              </div>

              <h4 className="font-bold text-blue-950">
                Management
              </h4>

              <p className="mt-2 text-sm leading-6 text-blue-900/60">
                Manage hostel operations from one central platform.
              </p>
            </div>

          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t border-blue-100 bg-blue-50 px-6 py-16"
        >
          <div className="mx-auto max-w-4xl text-center">

            <p className="font-semibold text-blue-600">
              ABOUT HM HOSTEL
            </p>

            <h3 className="mt-2 text-3xl font-bold text-blue-950">
              Simple hostel management
            </h3>

            <p className="mt-4 leading-7 text-blue-900/70">
              HM Hostel is designed to make hostel management
              easier by bringing students, rooms, allocations,
              payments and daily operations into one organized
              system.
            </p>

          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="px-6 py-16"
        >
          <div className="mx-auto max-w-4xl text-center">

            <p className="font-semibold text-blue-600">
              CONTACT
            </p>

            <h3 className="mt-2 text-3xl font-bold text-blue-950">
              Need help?
            </h3>

            <p className="mt-4 text-blue-900/60">
              Contact the hostel management for assistance.
            </p>

            <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Contact Management
            </button>

          </div>
        </section>

      </main>

    </div>
  );
}

export default Home;