import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    title: { type: String, required: false, default: "" },
    description: { type: String, required: false, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);