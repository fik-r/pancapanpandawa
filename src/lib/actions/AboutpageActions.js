"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import AboutSchema from "@/models/Aboutpage";

async function updateAboutpage(section) {
    let firstItem = await AboutSchema.findOne().sort({ createdAt: 1 });
    if (firstItem) {
        await AboutSchema.findByIdAndUpdate(firstItem._id, section, { new: true });
    } else {
        await AboutSchema.create(section);
    }
}

export async function updateHeroAboutpage(newData) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const hero = {
            hero: {
                ...newData,
                image: urlImage,
            }
        }
        await updateAboutpage(hero)

        return true;
    } catch (e) {
        return false
    }
}

export async function updateAboutCompanyAboutpage(newData) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const aboutCompany = {
            aboutCompany: {
                ...newData,
                image: urlImage,
            }
        }
        await updateAboutpage(aboutCompany)

        return true;
    } catch (e) {
        return false
    }
}

export async function updateCoreValuesAboutpage(newData) {
    const coreValues = {
        coreValues: {
            ...newData,
        }
    }
    await updateAboutpage(coreValues)

    return true;
}

export async function updateVisiMissionAboutpage(newData) {
    const visiMission = {
        visiMission: {
            ...newData,
        }
    }
    await updateAboutpage(visiMission)

    return true;
}

export async function updateAboutGalleryAboutpage(newData) {
    try {
        const urlImage = newData.image.name ? await uploadImage(newData.image) : newData.imageUrl
        const gallery = {
            gallery: {
                ...newData,
                image: urlImage,
            }
        }
        await updateAboutpage(gallery)

        return true;
    } catch (e) {
        return false
    }
}

export async function updateOurTeamAboutpage(newData) {
    const ourTeam = {
        ourTeam: {
            ...newData,
        }
    }
    await updateAboutpage(ourTeam)

    return true;
}

export async function getAboutpage() {
    const firstItem = await AboutSchema.findOne().sort({ createdAt: 1 }).select('-_id -__v').lean();
    return firstItem
}