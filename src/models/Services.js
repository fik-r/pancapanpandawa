import mongoose from 'mongoose';

const ServicesSchema = new mongoose.Schema({
    image: { type: String, required: false, default: "" },
    title: { type: String, required: false, default: "" },
    description: { type: String, required: false, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Services || mongoose.model('Services', ServicesSchema);