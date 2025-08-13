"use client"
import React from "react";
import { ContactType } from "../_types/contact";

type DeleteButtonProps = {
 contact?: ContactType;
};

const DeleteButton= ({contact}: DeleteButtonProps) => {
 
  return (
    <form  method="post">
    <button
      type="submit"
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200 shadow-sm"
      onClick={(e) =>{
        if(!confirm('Are You want to sure delete ?')){
          e.preventDefault();
        }
      }}
    >
      Delete
    </button>
    </form>
  );
};

export default DeleteButton;
