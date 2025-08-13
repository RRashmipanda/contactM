"use client"
import React, { useActionState } from "react";
import { ContactType } from "../_types/contact";

type DeleteButtonProps = {
  action: (prevState: any, formData:FormData) => Promise<any>
 contact?: ContactType;
};

const DeleteButton= ({action,contact}: DeleteButtonProps) => {
 const [state,formAction] =useActionState(action,null);

  return (

    <form action={formAction} method="post">
      <input type="hidden" name="id" value={contact?.id} />
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
