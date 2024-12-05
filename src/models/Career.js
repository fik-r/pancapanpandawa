import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
    title: { type: String, required: false, default: "" },
    contractType: { type: String, required: false, default: "" },
    areaRegion: { type: String, required: false, default: "" },
    yearsOfExp: { type: String, required: false, default: "" },
    jobDesc: { type: String, required: false, default: "" },
    jobQualification: { type: String, required: false, default: "" },
    perks: { type: String, required: false, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Career || mongoose.model('Career', CareerSchema);