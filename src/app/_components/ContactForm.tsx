"use client";

import React, { useActionState, useEffect } from "react";
import { ContactType } from "../_types/contact";
import { useRouter } from "next/navigation"; 

type ContactFormProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact?: ContactType;
};

const ContactForm = ({ action, contact }: ContactFormProps) => {
  const router = useRouter();
  const [state, formAction] = useActionState(action, null); 

  useEffect(() => {
    if (state?.success) {
      router.push("/contact"); 
    }
  }, [state, router]);

  return (
    <form
      action={formAction}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      {/* Hidden ID when updating */}
      {contact?.id && <input type="hidden" name="id" value={contact.id} />}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={contact?.name || ""}
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={contact?.email || ""}
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      {/* Error Message */}
      {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
      >
        {contact ? "Update Contact" : "Add Contact"}
      </button>
    </form>
  );
};

export default ContactForm;
