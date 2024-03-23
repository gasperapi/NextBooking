// models/Room.js
import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  label: { type: String, required: true },
  type: { type: String, required: true },
  remaining: { type: Number, required: true },
});

const Room = mongoose.models.Room || mongoose.model('Room', roomSchema);

export default Room;
