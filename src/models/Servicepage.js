import mongoose from 'mongoose';

const ServicepageSchema = new mongoose.Schema({
    hero: {
        heading: { type: String, required: false, default: "" },
        image: { type: String, required: false, default: "" }
    },
    services: {
        title: { type: String, required: false, default: "" },
        description: { type: String, required: false, default: "" },
    },
    gallery: {
        heading: { type: String, required: false, default: "" },
    },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Servicepage || mongoose.model('Servicepage', ServicepageSchema);