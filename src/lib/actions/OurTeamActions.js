"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import OurTeamSchema from "@/models/OurTeam";

export async function createOrUpdateOurTeam(newData, id) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const data = {
            ...newData,
            image: urlImage,
        }
        if (id) {
            await OurTeamSchema.findByIdAndUpdate(id, data, { new: true });
        } else {
            await OurTeamSchema.create(data);
        }

        return true;
    } catch (e) {
        return false
    }

}

export async function deleteOurTeam(id) {
    await OurTeamSchema.deleteOne({ _id: id })
}

export async function getOurTeam() {
    const list = await OurTeamSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}