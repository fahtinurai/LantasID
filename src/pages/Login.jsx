import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <AuthLayout>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Welcome Back</h2>
        <p className="text-sm text-center text-gray-500 mb-6">Please enter your details</p>

        <div className="flex justify-center mb-4">
          <button className="flex items-center gap-3 border border-teal bg-white text-black px-6 py-2 rounded-lg transition hover:bg-gray-100">
            Sign In
          </button>
          <Link
            to="/register"
            className="px-4 py-2 font-semibold text-gray-500 hover:text-teal-600"
          >
            Signup
          </Link>
        </div>

      <form className="space-y-5">
        {/* Email Field */}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            required
          />
        </div>

        {/* Password Field */}
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded-md font-semibold hover:bg-teal-700 transition duration-200"
        >
          Login
        </button>
      </form>


        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">Or Continue With</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex justify-center gap-4">
          <button className="bg-gray-100 p-2 rounded-full hover:shadow">
            <img src="public/images/google.png" alt="Google" className="w-5 h-5" />
          </button>
          <button className="bg-gray-100 p-2 rounded-full hover:shadow">
            <img src="public/images/apple.png" alt="Apple" className="w-5 h-5" />
          </button>
          <button className="bg-gray-100 p-2 rounded-full hover:shadow">
            <img src="public/images/facebook.png" alt="Facebook" className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-center text-gray-400 mt-6">
          Join the millions of smart investors who trust us to manage their finances.
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
