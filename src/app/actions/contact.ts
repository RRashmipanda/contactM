"use server"
import { revalidatePath } from "next/cache";
import { deleteContact } from "../api/contact";

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