import mongoose from "mongoose";

export default async function mongodbConnect() {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database Connected!');
        // ทำการ list collections ที่นี่
        const collections = await connection.connection.db.listCollections().toArray();
        console.log('Available Collections:', collections.map(col => col.name));
    } catch (error) {
        console.error(error.message);
    }
}
