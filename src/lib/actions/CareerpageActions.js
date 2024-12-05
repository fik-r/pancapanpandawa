"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import CareerpageSchema from "@/models/Careerpage";

async function updateCareerpage(section) {
    let firstItem = await CareerpageSchema.findOne().sort({ createdAt: 1 });
    if (firstItem) {
        await CareerpageSchema.findByIdAndUpdate(firstItem._id, section, { new: true });
    } else {
        await CareerpageSchema.create(section);
    }
}

export async function updateHeroCareerpage(newData) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const hero = {
            hero: {
                ...newData,
                image: urlImage,
            }
        }
        await updateCareerpage(hero)

        return true;
    } catch (e) {
        return false
    }
}

export async function updateContentCareerpage(newData) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const content = {
            content: {
                ...newData,
                image: urlImage,
            }
        }
        await updateCareerpage(content)

        return true;
    } catch (e) {
        return false
    }
}

export async function updateExploreCareerpage(newData) {
    try {
        const explorePositions = {
            explorePositions: {
                ...newData,
            }
        }
        await updateCareerpage(explorePositions)

        return true;
    } catch (e) {
        return false
    }
}

export async function getCareerpage() {
    const firstItem = await CareerpageSchema.findOne().sort({ createdAt: 1 }).select('-_id -__v').lean();
    return firstItem
}