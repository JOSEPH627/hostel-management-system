import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import users from "../../data/users";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    const user = users.find(
      (item) =>
        item.email.toLowerCase() === email.trim().toLowerCase() &&
        item.password === password
    );

    if (!user) {
      setIsLoading(false);
      setError("Invalid email or password.");
      return;
    }

    login(user);

    if (user.role === "admin") {
      navigate("/admin/dashboard");
    } else if (user.role === "student") {
      navigate("/student/dashboard");
    }

    setIsLoading(false);
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

      {/* Login Area */}
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* Login Card */}
          <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-lg sm:p-8">

            {/* Title */}
            <div className="mb-8 text-center">

              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600">
                <Building2 className="h-7 w-7 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-blue-950">
                Welcome back
              </h2>

              <p className="mt-2 text-sm text-blue-900/60">
                Sign in to your HM Hostel account
              </p>

            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3">

                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />

                <p className="text-sm font-medium text-red-700">
                  {error}
                </p>

              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
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
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setError("");
                    }}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-lg border border-blue-200 bg-white py-3 pl-11 pr-4 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                </div>

              </div>

              {/* Password */}
              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-blue-950"
                  >
                    Password
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Forgot password?
                  </a>

                </div>

                <div className="relative">

                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setError("");
                    }}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-lg border border-blue-200 bg-white py-3 pl-11 pr-12 text-sm text-blue-950 outline-none transition placeholder:text-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 transition hover:text-blue-600"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>

                </div>

              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">

                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-blue-300 text-blue-600 focus:ring-blue-500"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-blue-900/70"
                >
                  Remember me
                </label>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Signing in..." : "Sign In"}

                {!isLoading && (
                  <ArrowRight className="h-5 w-5" />
                )}
              </button>

            </form>

            {/* Account Info */}
            <div className="mt-7 border-t border-blue-100 pt-6 text-center">

              <p className="text-sm text-blue-900/60">
                Don't have an account?
              </p>

              <p className="mt-1 text-sm font-medium text-blue-600">
                Contact hostel management
              </p>

            </div>

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

export default Login;