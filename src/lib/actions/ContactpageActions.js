"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import ContactSchema from "@/models/Contactpage";

async function updateContact(section) {
    let firstItem = await ContactSchema.findOne().sort({ createdAt: 1 });
    if (firstItem) {
        await ContactSchema.findByIdAndUpdate(firstItem._id, section, { new: true });
    } else {
        await ContactSchema.create(section);
    }
}

export async function updateHeroContactpage(newData) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const hero = {
            hero: {
                ...newData,
                image: urlImage,
            }
        }
        await updateContact(hero)

        return true;
    } catch (e) {
        return false
    }
}

export async function updateContactContactpage(newData) {
    const contact = {
        contact: {
            ...newData,
        }
    }
    await updateContact(contact)

    return true;
}

export async function getContact() {
    const firstItem = await ContactSchema.findOne().sort({ createdAt: 1 }).select('-_id -__v').lean();
    return firstItem
}