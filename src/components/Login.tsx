"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });

      if (result?.error) {
        setError("Invalid username or password");
      } else if (result?.ok) {
        setError("");
        router.push("/dashboard");
      }
    } catch (e) {
      setError("Something went wrong. Please try again later.");
      console.log(e);
    }
  };

  return (
    <div className="flex justify-center items-center bg-black min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 rounded-lg shadow-xl w-full max-w-md"
      >
        <h2 className="text-center text-2xl font-semibold text-gray-200 mb-6">
          Login
        </h2>

        <div className="flex flex-col space-y-4">
          <label className="text-gray-400 font-medium">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            className="border border-gray-700 bg-gray-800 text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
          <label className="text-gray-400 font-medium">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border border-gray-700 bg-gray-800 text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />

          <button
            type="submit"
            className="mt-4 w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md text-lg font-medium transition-colors"
          >
            Login
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <p className="text-center text-gray-500 text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-gray-400 hover:text-gray-200">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
