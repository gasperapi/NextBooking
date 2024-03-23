// models/Room.js
import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  label: { type: String, required: true },
  type: { type: String, required: true },
  remaining: { type: Number, required: true },
});

const Rooms = mongoose.models.Rooms || mongoose.model('Rooms', roomSchema);

export default Rooms;
