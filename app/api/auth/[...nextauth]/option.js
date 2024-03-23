import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import {fetchUsers} from '../../../../lib/mongodb';
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
        
                // const user = {
                //     userId:'101', 
                //     username: 'gasper', 
                //     password: '123456', 
                //     name: 'Akaphon Mahaphon', 
                //     email: 'Akaphon@email.com',
                //     image: 'asdfasdfasdf.jpg'
                // }

                // หาผู้ใช้ที่ตรงกับข้อมูลล็อกอิน
                // const user = users.find(user => user.username === credentials.username);
                // ตรวจสอบ username และ password ว่าถูกต้องหรือไม่
                // if(credentials?.username === user.username && credentials?.password === user.password) {
                //     // ส่งข้อมูลผู้ใช้ไปกับ session
                //     return user
                // } else {
                //     return null
                // }

                //codeใหม่
                // ดึงข้อมูลผู้ใช้จากฐานข้อมูล
                const users = await fetchUsers();
                // หาผู้ใช้ที่ตรงกับข้อมูลล็อกอิน
                const user = users.find(user => user.username === credentials.username);

                // ตรวจสอบว่ามีผู้ใช้ที่ตรงกันและรหัสผ่านตรงกันหรือไม่ (ในตัวอย่างนี้ไม่ได้มีการเข้ารหัสรหัสผ่าน)
                if (user && user.password === credentials.password) {
                    // ส่งข้อมูลผู้ใช้ไปกับ session
                    return { name: user.name, email: user.email, image: user.image };
                }
                // หากไม่พบหรือรหัสผ่านไม่ตรง ส่งกลับ null
                return null;
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
