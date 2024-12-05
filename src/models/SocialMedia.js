import mongoose from 'mongoose';

const SocialMediaSchema = new mongoose.Schema({
    url: { type: String, required: false, default: "" },
    image: { type: String, required: false, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.SocialMedia || mongoose.model('SocialMedia', SocialMediaSchema);