"use server"
import ContactFormSchema from "@/models/ContactForm";

export async function createContactForm(newData) {
    try {
        await ContactFormSchema.create(newData);
        return true
    } catch (e) {
        return false
    }

}

export async function deleteContactForm(id) {
    try {
        await ContactFormSchema.deleteOne({ _id: id })
        return true
    } catch (e) {
        return false
    }
}

export async function getContactForms() {
    const list = await ContactFormSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}


export async function verifyCaptcha(token) {
    const res = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=6LfACqAqAAAAAMPBMVIIhtWUzdG5AOhAHc5U4AME&response=${token}`, {
        method: "POST"
    }
    )
    if (res.status == 200) {
        return "success!"
    } else {
        throw new Error("Failed Captcha")
    }
}