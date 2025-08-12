"use client"

import React from 'react'
import { logoutAction } from '../actions/auth'
import {useRouter  } from "next/navigation";

const Logoutbtn = () => {

  const router = useRouter();
const handleLogout = async () =>{
  try {
    await logoutAction();
    // The redirect happens in the server action
    // This client-side redirect is a fallback
    // redirect("/login")
    router.push("/login");
    router.refresh();
  } catch (error) {
    console.log("Logout Failed", error);
  }
  
};

  return (
    <button className='px-4 py-2 bg-red-500 text-stone-300 rounded-md hover:bg-red-700 transition-colors cursor-pointer'
    onClick={handleLogout}
    >
      Logout
    </button>
  )
}

export default Logoutbtn