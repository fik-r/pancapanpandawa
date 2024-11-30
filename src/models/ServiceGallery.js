import mongoose from 'mongoose';

const ServiceGallerySchema = new mongoose.Schema({
    image: { type: String, required: false, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.ServiceGallery || mongoose.model('ServiceGallery', ServiceGallerySchema);