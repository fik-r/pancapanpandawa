"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import TestimonialSchema from "@/models/Testimonial";

export async function createOrUpdateTestimonial(newData, id) {
    try {
        if (id) {
            await TestimonialSchema.findByIdAndUpdate(id, newData, { new: true });
        } else {
            await TestimonialSchema.create(newData);
        }
        return true
    } catch (e) {
        return false
    }

}

export async function deleteTestimonial(id) {
    try {
        await TestimonialSchema.deleteOne({ _id: id })
        return true
    } catch (e) {
        return false
    }
}

export async function getTestimonials() {
    const list = await TestimonialSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}