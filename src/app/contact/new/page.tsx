
import ContactForm from "@/app/_components/ContactForm"
import { createContactAction } from "@/app/actions/contact"



const newcontact = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-extrabold mb-6">
        Create New Contact
      </h1>
    <ContactForm action = {createContactAction} />
    </div>
  )
};

export default newcontact