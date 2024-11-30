"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import CoreValuesSchema from "@/models/CoreValues";

export async function createOrUpdateCoreValues(newData, id) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const data = {
            ...newData,
            image: urlImage,
        }
        if (id) {
            await CoreValuesSchema.findByIdAndUpdate(id, data, { new: true });
        } else {
            await CoreValuesSchema.create(data);
        }

        return true;
    } catch (e) {
        return false
    }

}

export async function deleteCoreValues(id) {
    await CoreValuesSchema.deleteOne({ _id: id })
}

export async function getCoreValues() {
    const list = await CoreValuesSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}