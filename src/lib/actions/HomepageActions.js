"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import HomepageSchema from "@/models/Homepage";

async function updateHomepage(section) {
    let firstItem = await HomepageSchema.findOne().sort({ createdAt: 1 });
    if (firstItem) {
        await HomepageSchema.findByIdAndUpdate(firstItem._id, section, { new: true });
    } else {
        await HomepageSchema.create(section);
    }
}

export async function updateHeroHomepage(newData) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const hero = {
            hero: {
                ...newData,
                image: urlImage,
            }
        }
        await updateHomepage(hero)

        return true;
    } catch (e) {
        return false
    }
}

export async function updateServiceHomepage(newData) {
    const services = {
        services: { ...newData }
    }
    await updateHomepage(services)
    return true
}

export async function updateCertificateHomepage(newData) {
    const certificates = {
        certificates: { ...newData }
    }
    await updateHomepage(certificates)
    return true
}

export async function updatePartnersHomepage(newData) {
    const partners = {
        partners: { ...newData }
    }
    await updateHomepage(partners)
    return true
}

export async function updateTestimonialsHomepage(newData) {
    const testimonials = {
        testimonials: { ...newData }
    }
    await updateHomepage(testimonials)
    return true
}

export async function updateWhyUsHomepage(newData) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const whyChooseUs = {
            whyChooseUs: { ...newData, image: urlImage }
        }
        await updateHomepage(whyChooseUs)

        return true;
    } catch (e) {
        return false
    }
}

export async function getHomepage() {
    const firstItem = await HomepageSchema.findOne().sort({ createdAt: 1 }).select('-_id -__v').lean();
    return firstItem
}