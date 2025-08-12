import LoginForm from "@/app/_components/LoginForm";
import Link from "next/link";
import React from "react";

const login = () => {
 
  return (
    <div className = "max-w-md mt-5 mx-auto bg-amber-100 p-8 rounded-lg shadow-md">
      
       
   <LoginForm/>
 <p className="mt-4 text-center">
  Don't have an account ? {""}
  <Link href="/register" className="text-blue-600 hover:underline">
  Register
  </Link>
 </p>
   </div>
  )
}

export default login