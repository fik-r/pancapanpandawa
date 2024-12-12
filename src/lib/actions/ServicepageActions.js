"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import ServicepageSchema from "@/models/Servicepage";

async function updateServicepage(section) {
    try {
        let firstItem = await ServicepageSchema.findOne().sort({ createdAt: 1 });
        if (firstItem) {
            await ServicepageSchema.findByIdAndUpdate(firstItem._id, section, { new: true });
        } else {
            await ServicepageSchema.create(section);
        }
        return true
    } catch (e) {
        return false
    }
}

export async function updateContentServicepage(newData) {
    const services = {
        services: {
            ...newData,
        }
    }
    await updateServicepage(services)

    return true;
}

export async function updateHeroServicepage(newData) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const hero = {
            hero: {
                ...newData,
                image: urlImage,
            }
        }
        await updateServicepage(hero)

        return true;
    } catch (e) {
        console.log(e)
        return false
    }
}

export async function updateGalleryServicepage(newData) {
    const gallery = {
        gallery: {
            ...newData,
        }
    }
    await updateServicepage(gallery)
}

export async function getServicepage() {
    const firstItem = await ServicepageSchema.findOne().sort({ createdAt: 1 }).select('-_id -__v').lean();
    return firstItem
}