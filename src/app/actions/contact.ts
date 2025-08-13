"use server"
import { revalidatePath } from "next/cache";
import { createContact,updateContact,deleteContact } from "../api/contact";


export const createContactAction = async (
  prevState: any,
  FormData: FormData
) => {
  const name = FormData.get("name") as string;
  const email = FormData.get("email") as string;

  try {
    await createContact({ name, email });
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Failed to create contact" };
  }
};

     

export const updateContactAction = async (
  prevState: any,
  FormData: FormData
) => {
  const id = FormData.get("id") as string;
  const name = FormData.get("name") as string;
  const email = FormData.get("email") as string;

  try {
    await updateContact(id, { name, email });
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Failed to update contact" };
  }
};



export const deleteContactAction = async (
    prevState: any,
    FormData:FormData
     ) => {
    const id = FormData.get("id") as string;

    try {
        await deleteContact(id);
        revalidatePath("/contact");
        return {success:true}
    } catch (error) {
        console.log(error)
        return {error : "Failed to delete contact"};
        
    }
}