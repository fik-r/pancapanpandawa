"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import ServicesSchema from "@/models/Services";
import { v4 as uuidv4 } from 'uuid';

export async function createOrUpdateService(newData, id) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const data = {
            ...newData,
            _id: id || uuidv4(),
            image: urlImage,
        }
        if (id) {
            await ServicesSchema.findByIdAndUpdate(id, data, { new: true });
        } else {
            await ServicesSchema.create(data);
        }

        return true;
    } catch (e) {
        return false
    }

}

export async function deleteService(id) {
    try {
        await ServicesSchema.deleteOne({ _id: id })
        return true
    } catch (e) {
        return false
    }
}

export async function getServices() {
    const list = await ServicesSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list
}