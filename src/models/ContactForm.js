import mongoose from 'mongoose';

const ContactFormSchema = new mongoose.Schema({
    name: { type: String, required: false, default: "" },
    companyEmail: { type: String, required: false, default: "" },
    phoneNumber: { type: String, required: false, default: "" },
    message: { type: String, required: false, default: "" },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.ContactForm || mongoose.model('ContactForm', ContactFormSchema);