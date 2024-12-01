"use server"
import ReasonSchema from "@/models/Reason";

export async function createOrUpdateReason(newData, id) {
    try {
        if (id) {
            await ReasonSchema.findByIdAndUpdate(id, newData, { new: true });
        } else {
            await ReasonSchema.create(newData);
        }
        return true
    } catch (e) {
        return false
    }

}

export async function deleteReason(id) {
    try {
        await ReasonSchema.deleteOne({ _id: id })
        return true
    } catch (e) {
        return false
    }
}

export async function getReasons() {
    const list = await ReasonSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}