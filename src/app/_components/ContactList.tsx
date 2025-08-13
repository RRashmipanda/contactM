import React from 'react';
import { ContactType } from '../_types/contact';
import Link from 'next/link';
import { FiEdit } from 'react-icons/fi';
import DeleteButton from '../_components/DeleteButton';

const ContactList = ({ contacts }: { contacts: ContactType[] }) => {
  return (
    <div className="space-y-4">
      {contacts.map((contact: ContactType) => (
        <div
          key={contact.id}
          className="p-4 border border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{contact.name}</h2>
              <p className="text-gray-500">{contact.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href={`/contact/edit/${contact.id}`}
                className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-3 py-1 rounded-md transition duration-200"
              >
                <FiEdit className="text-gray-900" />
                Edit
              </Link>
              <DeleteButton contact={contact} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
