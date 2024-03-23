import mongoose from "mongoose";

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
    const roomCollection = connection.connection.db.collection("Rooms");
    const rooms = await roomCollection.find({}).toArray();
    // console.log("Rooms:", rooms);
    return rooms;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
