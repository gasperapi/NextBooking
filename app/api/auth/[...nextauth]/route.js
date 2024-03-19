import NextAuth from "next-auth";
//  อิมพอร์ต options (AuthOptions ออบเจ็กต์) สำหรับตั้งค่าการยืนยันตัวตนแต่ละแบบ
import { options } from "@/app/api/auth/[...nextauth]/option";

//  กำหนด handler จากฟังก์ชัน NextAuth() 
const handler = NextAuth(options)
//  กำหนด handler จากฟังก์ชัน NextAuth() 
export { handler as GET, handler as POST }
