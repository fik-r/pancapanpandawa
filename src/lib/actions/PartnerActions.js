"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import PartnersSchema from "@/models/Partners";

export async function createOrUpdatePartner(newData, id) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const data = {
            ...newData,
            image: urlImage,
        }
        if (id) {
            await PartnersSchema.findByIdAndUpdate(id, data, { new: true });
        } else {
            await PartnersSchema.create(data);
        }

        return true;
    } catch (e) {
        console.log(e)
        return false
    }

}

export async function deletePartner(id) {
    await PartnersSchema.deleteOne({ _id: id })
}

export async function getPartners() {
    const list = await PartnersSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}