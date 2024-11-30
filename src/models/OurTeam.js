import mongoose from 'mongoose';

const OurTeamSchema = new mongoose.Schema({
    image: { type: String, required: false, default: "" },
    name: { type: String, required: false, default: "" },
    position: { type: String, required: false, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.OurTeam || mongoose.model('OurTeam', OurTeamSchema);