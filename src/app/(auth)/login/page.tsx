import LoginForm from "@/app/_components/LoginForm";
import React from "react";

const login = () => {
 
  return (
    <div className = "max-w-md mx-auto bg-amber-200 p-8 rounded-lg shadow-md">
       <h1 className="text-2xl font-bold mb-6">Login</h1>

   <LoginForm/>

   </div>
  )
}

export default login