"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import SocialMediaSchema from "@/models/SocialMedia";

export async function createOrUpdateSocialMedia(newData, id) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const data = {
            ...newData,
            image: urlImage,
        }
        if (id) {
            await SocialMediaSchema.findByIdAndUpdate(id, data, { new: true });
        } else {
            await SocialMediaSchema.create(data);
        }

        return true;
    } catch (e) {
        return false
    }

}

export async function deleteSocialMedia(id) {
    try {
        await SocialMediaSchema.deleteOne({ _id: id })
        return true
    } catch (e) {
        return false
    }
}

export async function getSocialMedia() {
    const list = await SocialMediaSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}