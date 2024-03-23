import { connectToDataBase } from "@/lib/database";

export const GET = async (request) => { 
  try {
    await connectToDataBase();    
    //return logic here    
  } catch (error) {
    //return logic here
  }
};