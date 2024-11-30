import mongoose from 'mongoose';

const MissionSchema = new mongoose.Schema({
    text: { type: String, required: false, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Mission || mongoose.model('Mission', MissionSchema);