import mongoose from 'mongoose';

const CareerpageSchema = new mongoose.Schema({
    hero: {
        heading: { type: String, required: false, default: "" },
        image: { type: String, required: false, default: "" }
    },
    content: {
        title: { type: String, required: false, default: "" },
        description: { type: String, required: false, default: "" },
        image: { type: String, required: false, default: "" }
    },
    explorePositions: {
        title: { type: String, required: false, default: "" },
        description: { type: String, required: false, default: "" },
    },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Careerpage || mongoose.model('Careerpage', CareerpageSchema);