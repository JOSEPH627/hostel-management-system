import { useState } from "react";
import {
  Building2,
  Mail,
  ArrowLeft,
  Send,
  CheckCircle,
} from "lucide-react";

function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-blue-50">

      {/* Header */}
      <header className="border-b border-blue-100 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-6">

          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <Building2 className="h-6 w-6 text-white" />
            </div>

            <div>
              <h1 className="text-base font-bold text-blue-950">
                HM Hostel
              </h1>

              <p className="text-[11px] text-blue-500">
                Management System
              </p>
            </div>
          </a>

        </div>
      </header>

      {/* Main */}
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* Card */}
          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-lg sm:p-8">

            {!submitted ? (
              <>
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                </div>

                {/* Title */}
                <div className="mb-8 text-center">

                  <h2 className="text-2xl font-bold text-blue-950">
                    Forgot your password?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-blue-900/60">
                    Enter your email address and we will send
                    instructions to reset your password.
                  </p>

                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-blue-950"
                    >
                      Email address
                    </label>

                    <div className="relative">

                      <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-lg border border-blue-200 bg-white py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      />

                    </div>

                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Send Reset Instructions
                    <Send className="h-5 w-5" />
                  </button>

                </form>
              </>
            ) : (
              /* Success Message */
              <div className="text-center">

                <div className="mb-5 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-blue-950">
                  Check your email
                </h2>

                <p className="mt-3 text-sm leading-6 text-blue-900/60">
                  If an account exists with that email address,
                  you will receive instructions to reset your
                  password.
                </p>

                <a
                  href="/login"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to Login
                </a>

              </div>
            )}

          </div>

          {/* Back Home */}
          <div className="mt-5 text-center">

            <a
              href="/"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              ← Back to home
            </a>

          </div>

        </div>

      </main>

    </div>
  );
}

export default ForgotPassword;