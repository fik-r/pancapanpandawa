"use server"
import ContactFormSchema from "@/models/ContactForm";

export async function createContactForm(newData) {
    try {
        await ContactFormSchema.create(newData);
        return true
    } catch (e) {
        return false
    }

}

export async function deleteContactForm(id) {
    try {
        await ContactFormSchema.deleteOne({ _id: id })
        return true
    } catch (e) {
        return false
    }
}

export async function getContactForms() {
    const list = await ContactFormSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}