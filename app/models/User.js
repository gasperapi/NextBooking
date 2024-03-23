// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // หมายเหตุ: ในการใช้งานจริงควรเก็บ password ในรูปแบบ hashed
  name: String,
  email: String,
  phoneNumber: String,
});

export default mongoose.models.User || mongoose.model('User', userSchema);
