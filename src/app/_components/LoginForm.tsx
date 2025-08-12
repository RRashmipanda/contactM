"use client";

import { loginAction } from "@/app/actions/auth";


const LoginForm = () => {

  return (
   
      <form action={loginAction}
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-md"
      >
        <h2 className="mb-4 text-center text-2xl font-bold">Login</h2>

        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
          
        </div>

        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
          
        </div>

      
        <button
          type="submit"          
          className="w-full rounded-lg bg-blue-500 py-2 text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          Login
        </button>
      </form>
    
  );
};

export default LoginForm;
