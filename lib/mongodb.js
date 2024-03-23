import mongoose from "mongoose";
import User from "@/app/models/User";
export default async function mongodbConnect() {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connected!");
    // ทำการ list collections ที่นี่
    const collections = await connection.connection.db
      .listCollections()
      .toArray();
    console.log(
      "Available Collections:",
      collections.map((col) => col.name)
    );
    // const roomCollection = connection.connection.db.collection("Rooms");
    // const rooms = await roomCollection.find({}).toArray();
    // console.log("Rooms:", rooms);
    return rooms;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
// Function to fetch rooms from the database
export async function fetchRooms() {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    const roomCollection = connection.connection.db.collection("Rooms");
    const rooms = await roomCollection.find({}).toArray();
    return rooms;
  } catch (error) {
    console.error(error.message);
    throw new Error("Failed to fetch rooms"); // Re-throw for proper error handling
  }
}
// Function to fetch rooms from the database
export async function fetchUsers() {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    const usersCollection = connection.connection.db.collection("users");
    const users = await usersCollection.find({}).toArray();
    return users;
  } catch (error) {
    console.error(error.message);
    throw new Error("Failed to fetch rooms"); // Re-throw for proper error handling
  }
}

export async function addUser(userData) {
  try {
    // สร้างอินสแตนซ์ของ User ใหม่จากข้อมูลที่รับมา
    const user = new User(userData);

    // บันทึกข้อมูลลงในฐานข้อมูล
    await user.save();

    console.log("User added:", user);
    return user; // คืนค่าข้อมูลผู้ใช้งานที่ถูกบันทึก
  } catch (error) {
    console.error("Failed to add user:", error.message);
    throw new Error("Failed to add user");
  }
}
