"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import ServicesSchema from "@/models/Services";

export async function createOrUpdateService(newData, id) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const data = {
            ...newData,
            image: urlImage,
        }
        if (id) {
            await ServicesSchema.findByIdAndUpdate(id, data, { new: true });
        } else {
            await ServicesSchema.create(data);
        }

        return true;
    } catch (e) {
        console.log(e)
        return false
    }

}

export async function deleteService(id) {
    await ServicesSchema.deleteOne({ _id: id })
}

export async function getServices() {
    const list = await ServicesSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}