"use server"
import { uploadImage } from "@/lib/actions/UtilsActions";
import TestimonialSchema from "@/models/Testimonial";

export async function createOrUpdateTestimonial(newData, id) {
    if (id) {
        await TestimonialSchema.findByIdAndUpdate(id, newData, { new: true });
    } else {
        await TestimonialSchema.create(newData);
    }

}

export async function deleteTestimonial(id) {
    await TestimonialSchema.deleteOne({ _id: id })
}

export async function getTestimonials() {
    const list = await TestimonialSchema.find().sort({ createdAt: 1 }).select('_id -__v').lean();
    return list.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));
}