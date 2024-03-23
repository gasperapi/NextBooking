// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  email: String,
  phoneNumber: String,
});

// ใช้ 'User' สำหรับชื่อ model

export default mongoose.models.User || mongoose.model('User', userSchema, 'Users');