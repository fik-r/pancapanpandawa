import mongoose from 'mongoose';

const ServicesSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, // Set _id to be of type String
    image: { type: String, required: false, default: "" },
    title: { type: String, required: false, default: "" },
    details: [
        {
            id: { type: String, required: true, unique: true }, // Set _id to be of type String
            title: { type: String, required: false, default: "" },
            html: { type: String, required: false, default: "" }
        }
    ],
    description: { type: String, required: false, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Services || mongoose.model('Services', ServicesSchema);