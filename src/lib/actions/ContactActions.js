"use server"
import ContactSchema from "@/models/Contact";

export async function createOrUpdateContact(newData, id) {
    try {
        if (id) {
            await ContactSchema.findByIdAndUpdate(id, newData, { new: true });
        } else {
            await ContactSchema.create(newData);
        }
        return true
    } catch (e) {
        return false
    }

}

export async function deleteContact(id) {
    try {
        await ContactSchema.deleteOne({ _id: id })
        return true
    } catch (e) {
        return false
    }
}

export async function getContacts() {
    const list = await ContactSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}