import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    hero: {
        heading: { type: String, required: false, default: "" },
        image: { type: String, required: false, default: "" }
    },
    contact: {
        title: { type: String, required: false, default: "" },
        description: { type: String, required: false, default: "" }
    },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Contactpage || mongoose.model('Contactpage', ContactSchema);