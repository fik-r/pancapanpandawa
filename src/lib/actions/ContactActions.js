"use server"
import ContactSchema from "@/models/Contact";

export async function createOrUpdateContact(newData, id) {
    if (id) {
        await ContactSchema.findByIdAndUpdate(id, newData, { new: true });
    } else {
        await ContactSchema.create(newData);
    }

}

export async function deleteContact(id) {
    await ContactSchema.deleteOne({ _id: id })
}

export async function getContacts() {
    const list = await ContactSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}