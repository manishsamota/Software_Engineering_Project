import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  subject:String,
  mobilenumber: Number,
});

export default mongoose.model('Contact', ContactSchema);
