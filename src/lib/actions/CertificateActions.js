"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import CertificateSchema from "@/models/Certificate";

export async function createOrUpdateCertificate(newData, id) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const data = {
            ...newData,
            image: urlImage,
        }
        if (id) {
            await CertificateSchema.findByIdAndUpdate(id, data, { new: true });
        } else {
            await CertificateSchema.create(data);
        }

        return true;
    } catch (e) {
        return false
    }

}

export async function deleteCertificate(id) {
    await CertificateSchema.deleteOne({ _id: id })
}

export async function getCertificates() {
    const list = await CertificateSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}