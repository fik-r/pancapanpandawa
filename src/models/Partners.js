import mongoose from 'mongoose';

const PartnersSchema = new mongoose.Schema({
    image: { type: String, required: false, default: "" },
    title: { type: String, required: false, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Partners || mongoose.model('Partners', PartnersSchema);