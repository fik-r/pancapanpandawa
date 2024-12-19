"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import ServicesSchema from "@/models/Services";
import { v4 as uuidv4 } from 'uuid';

export async function createOrUpdateService(newData, id) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const data = {
            ...newData,
            id: id || uuidv4(),
            image: urlImage,
        }
        if (id) {
            await ServicesSchema.updateOne(data);
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
    try {
        await ServicesSchema.deleteOne({ id: id })
        return true
    } catch (e) {
        return false
    }
}

export async function getServices() {
    const list = await ServicesSchema.find().sort({ createdAt: 1 }).select('-_id -__v -details._id').lean();
    return list
}