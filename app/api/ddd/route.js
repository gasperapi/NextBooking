import mongodbConnect from '../../../lib/mongodb';
import mongoose from 'mongoose';
const Room = require('../../models/Room'); // หรือตำแหน่งที่ถูกต้องของไฟล์
// export  async function GET() {
  
//   return Response.json({
//     name:"GAS"
//   })
// }
export async function GET(req, res) {
  await mongodbConnect(); // เรียกใช้เพื่อเชื่อมต่อกับ MongoDB

  // ตรงนี้คุณสามารถเขียนโค้ดเพื่อดำเนินการกับฐานข้อมูล

  try {
    const rooms = await Room.find({}); // ดึงข้อมูลห้องพักทั้งหมด
    res.status(200).json({ rooms });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}