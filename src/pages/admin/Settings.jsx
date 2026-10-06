import { useState } from "react";
import {
  Settings as SettingsIcon,
  Building2,
  Phone,
  Mail,
  MapPin,
  Globe,
  Bell,
  CreditCard,
  ShieldCheck,
  Save,
  CheckCircle,
} from "lucide-react";

import settings from "../../data/settings";

function Settings() {
  const [paymentAlerts, setPaymentAlerts] = useState(
    settings.notifications.paymentAlerts
  );

  const [maintenanceAlerts, setMaintenanceAlerts] = useState(
    settings.notifications.maintenanceAlerts
  );

  const [allocationAlerts, setAllocationAlerts] = useState(
    settings.notifications.allocationAlerts
  );

  const [studentRegistrationAlerts, setStudentRegistrationAlerts] =
    useState(settings.notifications.studentRegistrationAlerts);

  const [twoFactorAuthentication, setTwoFactorAuthentication] =
    useState(settings.security.twoFactorAuthentication);

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div>
        <p className="text-sm font-medium text-blue-600">
          Management
        </p>

        <h1 className="mt-1 text-2xl font-bold text-blue-950">
          Settings
        </h1>

        <p className="mt-1 text-sm text-blue-900/60">
          Manage hostel and system configuration.
        </p>
      </div>

      {/* Success Message */}
      {saved && (
        <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-700">
          <CheckCircle className="h-5 w-5 shrink-0" />

          <span className="font-medium">
            Settings saved successfully.
          </span>
        </div>
      )}

      {/* Hostel Information */}
      <section className="rounded-xl border border-blue-100 bg-white shadow-sm">

        {/* Section Header */}
        <div className="flex items-center gap-3 border-b border-blue-100 p-5">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
            <Building2 className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h2 className="font-bold text-blue-950">
              Hostel Information
            </h2>

            <p className="mt-1 text-sm text-blue-900/50">
              Update basic hostel information.
            </p>
          </div>

        </div>

        {/* Form */}
        <div className="grid gap-5 p-5 md:grid-cols-2">

          {/* Hostel Name */}
          <div>
            <label
              htmlFor="hostel-name"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Hostel Name
            </label>

            <div className="relative">

              <Building2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <input
                id="hostel-name"
                type="text"
                defaultValue={settings.hostel.name}
                className="w-full rounded-lg border border-blue-200 bg-white py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="hostel-phone"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Phone Number
            </label>

            <div className="relative">

              <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <input
                id="hostel-phone"
                type="tel"
                defaultValue={settings.hostel.phone}
                className="w-full rounded-lg border border-blue-200 bg-white py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="hostel-email"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Email Address
            </label>

            <div className="relative">

              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <input
                id="hostel-email"
                type="email"
                defaultValue={settings.hostel.email}
                className="w-full rounded-lg border border-blue-200 bg-white py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="hostel-address"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Address
            </label>

            <div className="relative">

              <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <input
                id="hostel-address"
                type="text"
                defaultValue={settings.hostel.address}
                className="w-full rounded-lg border border-blue-200 bg-white py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

            </div>
          </div>

        </div>

      </section>

      {/* System Settings */}
      <section className="rounded-xl border border-blue-100 bg-white shadow-sm">

        {/* Section Header */}
        <div className="flex items-center gap-3 border-b border-blue-100 p-5">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
            <SettingsIcon className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h2 className="font-bold text-blue-950">
              System Settings
            </h2>

            <p className="mt-1 text-sm text-blue-900/50">
              Configure system preferences.
            </p>
          </div>

        </div>

        {/* System Fields */}
        <div className="grid gap-5 p-5 md:grid-cols-3">

          {/* Currency */}
          <div>
            <label
              htmlFor="currency"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Currency
            </label>

            <div className="relative">

              <CreditCard className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <select
                id="currency"
                defaultValue={settings.system.currency}
                className="w-full appearance-none rounded-lg border border-blue-200 bg-white py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                <option value="TZS">
                  TZS — Tanzanian Shilling
                </option>

                <option value="USD">
                  USD — US Dollar
                </option>

                <option value="EUR">
                  EUR — Euro
                </option>
              </select>

            </div>
          </div>

          {/* Timezone */}
          <div>
            <label
              htmlFor="timezone"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Timezone
            </label>

            <div className="relative">

              <Globe className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <select
                id="timezone"
                defaultValue={settings.system.timezone}
                className="w-full appearance-none rounded-lg border border-blue-200 bg-white py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                <option value="Africa/Dar_es_Salaam">
                  Africa/Dar es Salaam
                </option>

                <option value="Africa/Nairobi">
                  Africa/Nairobi
                </option>

                <option value="Africa/Kampala">
                  Africa/Kampala
                </option>
              </select>

            </div>
          </div>

          {/* Date Format */}
          <div>
            <label
              htmlFor="date-format"
              className="mb-2 block text-sm font-semibold text-blue-950"
            >
              Date Format
            </label>

            <select
              id="date-format"
              defaultValue={settings.system.dateFormat}
              className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            >
              <option value="DD/MM/YYYY">
                DD/MM/YYYY
              </option>

              <option value="MM/DD/YYYY">
                MM/DD/YYYY
              </option>

              <option value="YYYY-MM-DD">
                YYYY-MM-DD
              </option>
            </select>
          </div>

        </div>

      </section>

      {/* Notification Settings */}
      <section className="rounded-xl border border-blue-100 bg-white shadow-sm">

        {/* Section Header */}
        <div className="flex items-center gap-3 border-b border-blue-100 p-5">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
            <Bell className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h2 className="font-bold text-blue-950">
              Notification Settings
            </h2>

            <p className="mt-1 text-sm text-blue-900/50">
              Choose which hostel alerts you want to receive.
            </p>
          </div>

        </div>

        {/* Notification Options */}
        <div className="divide-y divide-blue-50">

          {/* Payment Alerts */}
          <div className="flex items-center justify-between gap-4 p-5">

            <div>
              <p className="text-sm font-semibold text-blue-950">
                Payment Alerts
              </p>

              <p className="mt-1 text-sm text-blue-900/50">
                Receive notifications about student payments.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setPaymentAlerts(!paymentAlerts)}
              className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                paymentAlerts
                  ? "bg-blue-600"
                  : "bg-blue-200"
              }`}
              aria-label="Toggle payment alerts"
              aria-pressed={paymentAlerts}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                  paymentAlerts
                    ? "left-6"
                    : "left-1"
                }`}
              />
            </button>

          </div>

          {/* Maintenance Alerts */}
          <div className="flex items-center justify-between gap-4 p-5">

            <div>
              <p className="text-sm font-semibold text-blue-950">
                Maintenance Alerts
              </p>

              <p className="mt-1 text-sm text-blue-900/50">
                Receive notifications about room maintenance.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setMaintenanceAlerts(!maintenanceAlerts)
              }
              className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                maintenanceAlerts
                  ? "bg-blue-600"
                  : "bg-blue-200"
              }`}
              aria-label="Toggle maintenance alerts"
              aria-pressed={maintenanceAlerts}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                  maintenanceAlerts
                    ? "left-6"
                    : "left-1"
                }`}
              />
            </button>

          </div>

          {/* Allocation Alerts */}
          <div className="flex items-center justify-between gap-4 p-5">

            <div>
              <p className="text-sm font-semibold text-blue-950">
                Allocation Alerts
              </p>

              <p className="mt-1 text-sm text-blue-900/50">
                Receive notifications about room allocations.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setAllocationAlerts(!allocationAlerts)
              }
              className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                allocationAlerts
                  ? "bg-blue-600"
                  : "bg-blue-200"
              }`}
              aria-label="Toggle allocation alerts"
              aria-pressed={allocationAlerts}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                  allocationAlerts
                    ? "left-6"
                    : "left-1"
                }`}
              />
            </button>

          </div>

          {/* Student Registration Alerts */}
          <div className="flex items-center justify-between gap-4 p-5">

            <div>
              <p className="text-sm font-semibold text-blue-950">
                Student Registration Alerts
              </p>

              <p className="mt-1 text-sm text-blue-900/50">
                Receive notifications when new students register.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setStudentRegistrationAlerts(
                  !studentRegistrationAlerts
                )
              }
              className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                studentRegistrationAlerts
                  ? "bg-blue-600"
                  : "bg-blue-200"
              }`}
              aria-label="Toggle student registration alerts"
              aria-pressed={studentRegistrationAlerts}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                  studentRegistrationAlerts
                    ? "left-6"
                    : "left-1"
                }`}
              />
            </button>

          </div>

        </div>

      </section>

      {/* Security Settings */}
      <section className="rounded-xl border border-blue-100 bg-white shadow-sm">

        {/* Section Header */}
        <div className="flex items-center gap-3 border-b border-blue-100 p-5">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
            <ShieldCheck className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h2 className="font-bold text-blue-950">
              Security Settings
            </h2>

            <p className="mt-1 text-sm text-blue-900/50">
              Manage account and session security.
            </p>
          </div>

        </div>

        {/* Security Options */}
        <div className="divide-y divide-blue-50">

          {/* Session Timeout */}
          <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-semibold text-blue-950">
                Session Timeout
              </p>

              <p className="mt-1 text-sm text-blue-900/50">
                Automatically end inactive sessions.
              </p>
            </div>

            <select
              defaultValue={settings.security.sessionTimeout}
              className="rounded-lg border border-blue-200 bg-white px-4 py-2.5 text-sm text-blue-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            >
              <option value="15 minutes">
                15 minutes
              </option>

              <option value="30 minutes">
                30 minutes
              </option>

              <option value="60 minutes">
                60 minutes
              </option>

              <option value="120 minutes">
                120 minutes
              </option>
            </select>

          </div>

          {/* Two Factor Authentication */}
          <div className="flex items-center justify-between gap-4 p-5">

            <div>
              <p className="text-sm font-semibold text-blue-950">
                Two-Factor Authentication
              </p>

              <p className="mt-1 text-sm text-blue-900/50">
                Add an extra layer of security to manager accounts.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setTwoFactorAuthentication(
                  !twoFactorAuthentication
                )
              }
              className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                twoFactorAuthentication
                  ? "bg-blue-600"
                  : "bg-blue-200"
              }`}
              aria-label="Toggle two-factor authentication"
              aria-pressed={twoFactorAuthentication}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                  twoFactorAuthentication
                    ? "left-6"
                    : "left-1"
                }`}
              />
            </button>

          </div>

        </div>

      </section>

      {/* Save Button */}
      <div className="flex justify-end">

        <button
          type="button"
          onClick={handleSave}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
        >
          <Save className="h-5 w-5" />
          Save Settings
        </button>

      </div>

    </div>
  );
}

export default Settings;