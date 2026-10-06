import { useState } from "react";
import {
  FileText,
  Plus,
  Wrench,
  BedDouble,
  MessageSquare,
  Clock3,
  CheckCircle2,
  AlertCircle,
  XCircle,
  CalendarDays,
} from "lucide-react";

function Requests() {
  const [showForm, setShowForm] = useState(false);

  const [requestType, setRequestType] = useState("Maintenance");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const requests = [
    {
      id: "REQ001",
      type: "Maintenance",
      subject: "Broken Room Light",
      description: "The main light in room A-102 is not working.",
      date: "06 September 2026",
      status: "Pending",
    },
    {
      id: "REQ002",
      type: "Room Change",
      subject: "Request for Room Change",
      description: "I would like to request a room change.",
      date: "04 September 2026",
      status: "Approved",
    },
    {
      id: "REQ003",
      type: "General",
      subject: "Internet Connection",
      description: "Internet connection in the room is unstable.",
      date: "02 September 2026",
      status: "Resolved",
    },
  ];

  const getStatusStyles = (status) => {
    if (status === "Approved" || status === "Resolved") {
      return "bg-blue-50 text-blue-700";
    }

    if (status === "Rejected") {
      return "bg-blue-100 text-blue-800";
    }

    return "bg-blue-50 text-blue-600";
  };

  const getStatusIcon = (status) => {
    if (status === "Approved" || status === "Resolved") {
      return CheckCircle2;
    }

    if (status === "Rejected") {
      return XCircle;
    }

    return Clock3;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      requestType,
      subject,
      description,
    });

    setSubject("");
    setDescription("");
    setShowForm(false);
  };

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-sm font-medium text-blue-500">
            Student Portal
          </p>

          <h1 className="mt-1 text-2xl font-bold text-blue-950">
            My Requests
          </h1>

          <p className="mt-1 text-sm text-blue-900/60">
            Submit and track your hostel requests.
          </p>
        </div>


        {/* New Request Button */}
        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />

          {showForm ? "Close Form" : "New Request"}
        </button>

      </div>


      {/* Request Form */}
      {showForm && (
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3 border-b border-blue-100 pb-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h2 className="font-bold text-blue-950">
                Submit New Request
              </h2>

              <p className="text-sm text-blue-900/50">
                Send a request to hostel management.
              </p>
            </div>

          </div>


          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-5"
          >

            {/* Request Type */}
            <div>

              <label
                htmlFor="requestType"
                className="mb-2 block text-sm font-semibold text-blue-950"
              >
                Request Type
              </label>

              <select
                id="requestType"
                value={requestType}
                onChange={(event) => setRequestType(event.target.value)}
                className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                <option value="Maintenance">
                  Maintenance
                </option>

                <option value="Room Change">
                  Room Change
                </option>

                <option value="Payment">
                  Payment
                </option>

                <option value="General">
                  General
                </option>
              </select>

            </div>


            {/* Subject */}
            <div>

              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-blue-950"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                placeholder="Enter request subject"
                required
                className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>


            {/* Description */}
            <div>

              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold text-blue-950"
              >
                Description
              </label>

              <textarea
                id="description"
                rows="5"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Describe your request..."
                required
                className="w-full resize-none rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>


            {/* Submit */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-lg border border-blue-200 px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                <MessageSquare className="h-4 w-4" />
                Submit Request
              </button>

            </div>

          </form>

        </div>
      )}


      {/* Request Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Total */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-blue-900/50">
                Total Requests
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {requests.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>


        {/* Pending */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-blue-900/50">
                Pending
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {
                  requests.filter(
                    (request) => request.status === "Pending"
                  ).length
                }
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Clock3 className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>


        {/* Approved */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-blue-900/50">
                Approved
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {
                  requests.filter(
                    (request) => request.status === "Approved"
                  ).length
                }
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>


        {/* Resolved */}
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-blue-900/50">
                Resolved
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-950">
                {
                  requests.filter(
                    (request) => request.status === "Resolved"
                  ).length
                }
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
            </div>

          </div>

        </div>

      </div>


      {/* Requests List */}
      <div className="rounded-xl border border-blue-100 bg-white shadow-sm">

        {/* Header */}
        <div className="border-b border-blue-100 p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h2 className="font-bold text-blue-950">
                Request History
              </h2>

              <p className="text-sm text-blue-900/50">
                Track the status of your submitted requests.
              </p>
            </div>

          </div>

        </div>


        {/* Request Cards */}
        <div className="space-y-4 p-4 sm:p-5">

          {requests.map((request) => {

            const StatusIcon = getStatusIcon(request.status);

            return (
              <div
                key={request.id}
                className="rounded-xl border border-blue-100 p-4 transition hover:bg-blue-50/30 sm:p-5"
              >

                {/* Top */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div className="flex min-w-0 items-start gap-3">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50">

                      {request.type === "Maintenance" ? (
                        <Wrench className="h-5 w-5 text-blue-600" />
                      ) : request.type === "Room Change" ? (
                        <BedDouble className="h-5 w-5 text-blue-600" />
                      ) : (
                        <MessageSquare className="h-5 w-5 text-blue-600" />
                      )}

                    </div>


                    <div className="min-w-0">

                      <div className="flex flex-wrap items-center gap-2">

                        <h3 className="text-sm font-bold text-blue-950">
                          {request.subject}
                        </h3>

                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-600">
                          {request.type}
                        </span>

                      </div>

                      <p className="mt-1 text-xs text-blue-900/50">
                        {request.id}
                      </p>

                    </div>

                  </div>


                  {/* Status */}
                  <span
                    className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${getStatusStyles(
                      request.status
                    )}`}
                  >
                    <StatusIcon className="h-3.5 w-3.5" />
                    {request.status}
                  </span>

                </div>


                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-blue-900/70">
                  {request.description}
                </p>


                {/* Date */}
                <div className="mt-4 flex items-center gap-2 border-t border-blue-100 pt-4 text-xs text-blue-900/50">

                  <CalendarDays className="h-4 w-4" />

                  Submitted on {request.date}

                </div>

              </div>
            );
          })}

        </div>

      </div>


      {/* Information Notice */}
      <div className="rounded-xl border border-blue-100 bg-blue-600 p-5 text-white">

        <div className="flex items-start gap-3">

          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

          <div>

            <h3 className="font-bold">
              Need Help?
            </h3>

            <p className="mt-1 text-sm leading-6 text-blue-100">
              Use the request form to report maintenance issues, request
              room changes, ask about payments, or send other questions
              to hostel management.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Requests;