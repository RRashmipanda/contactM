import ContactForm from "@/app/_components/ContactForm";
import { updateContactAction } from "@/app/actions/contact"
import { getContactById } from "@/app/api/contact";


const editcontact = async ({params}:{params: Promise<{ id: string} >}) => {
  const {id} = await params;
  const contact =  await getContactById(id);

 return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-extrabold mb-6">
       Edit Contact
      </h1>
    <ContactForm action = {updateContactAction} contact={contact} />
    </div>
  )
};
export default editcontact