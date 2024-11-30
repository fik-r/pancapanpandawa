import mongoose from 'mongoose';

const AboutSchema = new mongoose.Schema({
    hero: {
        heading: { type: String, required: false, default: "" },
        image: { type: String, required: false, default: "" }
    },
    aboutCompany: {
        heading: { type: String, required: false, default: "" },
        description: { type: String, required: false, default: "" },
        image: { type: String, required: false, default: "" }
    },
    coreValues: {
        title: { type: String, required: false, default: "" },
    },
    visiMission: {
        title: { type: String, required: false, default: "" },
        visi: { type: String, required: false, default: "" },
    },
    gallery: {
        image: { type: String, required: false, default: "" }
    },
    ourTeam: {
        title: { type: String, required: false, default: "" },
        description: { type: String, required: false, default: "" },
    },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.About || mongoose.model('About', AboutSchema);