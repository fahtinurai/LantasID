import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <AuthLayout>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Create Your Account</h2>
        <p className="text-sm text-center text-gray-500 mb-6">Fill in your information below</p>

        <div className="flex justify-center mb-4">
          <Link
            to="/login"
            className="px-4 py-2 font-semibold text-gray-500 hover:text-teal-600"
          >
            Sign In
          </Link>
          <button className="flex items-center gap-3 border border-teal bg-white text-black px-6 py-2 rounded-lg transition hover:bg-gray-100">
            Signup
          </button>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-md font-semibold hover:bg-teal-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-xs text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
