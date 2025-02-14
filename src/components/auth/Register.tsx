import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center">Register</h2>
          <form className="mt-4">
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 mt-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mt-2 border rounded"
              />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mt-2 border rounded"
                />
            </div>
            <button className="w-full p-2 mt-4 text-white bg-green-500 rounded">
              Register
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
