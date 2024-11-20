import mongoose from 'mongoose';

const HomepageSchema = new mongoose.Schema({
    hero: {
        heading: { type: String, required: false, default: "" },
        highlight_1: {
            label: { type: String, required: false, default: "" },
            value: { type: String, required: false, default: "" }
        },
        highlight_2: {
            label: { type: String, required: false, default: "" },
            value: { type: String, required: false, default: "" }
        },
        highlight_3: {
            label: { type: String, required: false, default: "" },
            value: { type: String, required: false, default: "" }
        },
        image: { type: String, required: false, default: "" }
    },
    services: {
        title: { type: String, required: false, default: "" },
        description: { type: String, required: false, default: "" }
    },
    whyChooseUs: {
        title: { type: String, required: false, default: "" },
        image: { type: String, required: false, default: "" }
    },
    partners: {
        title: { type: String, required: false, default: "" }
    },
    certificates: {
        title: { type: String, required: false, default: "" }
    },
    testimonials: {
        title: { type: String, required: false, default: "" }
    },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Homepage || mongoose.model('Homepage', HomepageSchema);