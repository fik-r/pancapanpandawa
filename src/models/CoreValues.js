import mongoose from 'mongoose';

const CoreValuesSchema = new mongoose.Schema({
    image: { type: String, required: false, default: "" },
    title: { type: String, required: false, default: "" },
    description: { type: String, required: false, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.CoreValues || mongoose.model('CoreValues', CoreValuesSchema);