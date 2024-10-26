import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    
  };
  return (
    <div
      style={{
        height: "90vh",
        backgroundImage:
          'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: "cover",
      }}
      className="flex items-center justify-center"
    >
      <div className="container w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="px-8 pt-6 pb-8 mb-4 bg-gray-100 rounded-lg shadow-2xl dark:bg-gray-900 dark:text-gray-100 border-gradient"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300"
            >
              Username
            </label>
            <input
              placeholder="Enter your email/username"
              name="email"
              onChange={handleChange}
              type="email"
              required
              className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:border-indigo-700 dark:text-gray-100 focus:outline-none focus:shadow-outline"
              value={credentials.email}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              placeholder="*******"
              onChange={handleChange}
              name="password"
              required
              type="password"
              className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:border-indigo-700 dark:text-gray-100 focus:outline-none focus:shadow-outline"
              value={credentials.password}
            />
          </div>
          <div className="flex items-center justify-between"></div>
          <button
            type="submit"
            className="p-2 mr-2 font-bold text-gray-900 border border-gray-900 rounded dark:text-gray-100 dark:border-gray-400 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 hover:text-gray-100"
          >
            Log in
          </button>
          <Link href={"/signup"} style={{ all: "unset" }}>
            <button className="p-2 mr-2 font-bold text-gray-900 border border-gray-900 rounded dark:text-gray-100 dark:border-gray-400 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 hover:text-gray-100">
              New User?
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
