import mongoose from 'mongoose';

const ReasonSchema = new mongoose.Schema({
    text: { type: String, required: false, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Reason || mongoose.model('Reason', ReasonSchema);