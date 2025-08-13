import ContactList from "../_components/ContactList";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";

const contactPage = async () => {
  const user = await getSession();
  
  if (!user) {
    return (
      <div className="text-center mt-12 text-gray-700">
        Please{" "}
        <a
          href="/login"
          className="text-teal-600 hover:text-cyan-600 font-medium underline"
        >
          login
        </a>{" "}
        to view contacts
      </div>
    );
  }

  const contacts = await getContacts(user?.id);

  if (!contacts || contacts.length === 0) {
    return (
      <div className="text-center mt-12 text-gray-700">
        Please{" "}
        <a
          href="/contact/new"
          className="text-teal-600 hover:text-cyan-600 font-medium underline"
        >
          Add a contact
        </a>{" "}
        to your contact list
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Your Contacts</h1>
        <a
          href="/contact/new"
          className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:opacity-90 text-white px-4 py-2 rounded-md shadow-md transition"
        >
          Add Contact
        </a>
      </div>
      <ContactList contacts = {contacts} />
    </div>
  );
};

export default contactPage;
