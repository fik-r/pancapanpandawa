import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: false, default: "" },
    password: { type: String, required: false, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Auth || mongoose.model('Auth', UserSchema);