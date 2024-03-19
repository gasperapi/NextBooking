import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const options = {
    providers: [
        // กำหนดการยืนยันตัวตนสำหรับใช้กับ username/password
        CredentialsProvider({
            name: 'Username/Password',
            // กำหนดอินพุตในแบบฟอร์ม ซึ่งได้แก่ username และ password
            credentials: {
                username: {label:'Username', type:'text', placeholder:'username'},
                password: {label:'Password', type:'password'}
            },
            // ฟังก์ชันสำหรับรีเทิร์นข้อมูลที่ต้องการไปให้กับผู้ใช้ เมื่อเข้าสู่ระบบแล้ว 
            async authorize(credentials, request) {
                // ขอข้อมูลจากฐานข้อมูล
                const user = {
                    userId:'101', 
                    username: 'jeerawuth', 
                    password: '12345678', 
                    name: 'Jeerawuth Varin', 
                    email: 'jeerawuth@email.com',
                    image: 'asdfasdfasdf.jpg'
                }
                // ตรวจสอบ username และ password ว่าถูกต้องหรือไม่
                if(credentials?.username === user.username && credentials?.password === user.password) {
                    // ส่งข้อมูลผู้ใช้ไปกับ session
                    return user
                } else {
                    return null
                }
            }
        }),
        // กำหนดการยืนยันตัวตนสำหรับใช้กับบัญชี google
        GoogleProvider({
            name: 'Google',
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ]
}
