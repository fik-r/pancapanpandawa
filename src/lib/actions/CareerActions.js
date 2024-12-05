"use server"
import CareerSchema from "@/models/Career";

export async function createOrUpdateCareer(newData, id) {
    try {
        if (id) {
            await CareerSchema.findByIdAndUpdate(id, newData, { new: true });
        } else {
            await CareerSchema.create(newData);
        }
        return true
    } catch (e) {
        return false
    }

}

export async function deleteCareer(id) {
    try {
        await CareerSchema.deleteOne({ _id: id })
        return true
    } catch (e) {
        return false
    }
}

export async function getCareers() {
    const list = await CareerSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}

export async function getCareer(id) {
    const career = await CareerSchema.findOne({ _id: id }).sort({ createdAt: 1 }).select('-_id -__v').lean();
    return career
}