import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema({
    comment: { type: String, required: false, default: "" },
    personName: { type: String, required: false, default: "" },
    personJob: { type: String, required: false, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);