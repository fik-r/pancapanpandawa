"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import ServiceGallerySchema from "@/models/ServiceGallery";

export async function createOrUpdateGallery(newData, id) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const data = {
            ...newData,
            image: urlImage,
        }
        if (id) {
            await ServiceGallerySchema.findByIdAndUpdate(id, data, { new: true });
        } else {
            await ServiceGallerySchema.create(data);
        }

        return true;
    } catch (e) {
        return false
    }

}

export async function deleteGallery(id) {
    try {
        await ServiceGallerySchema.deleteOne({ _id: id })
        return true
    } catch (e) {
        return false
    }
}

export async function getGallery() {
    const list = await ServiceGallerySchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}