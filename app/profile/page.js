// อิมพอร์ต options ออบเจ็กต์ ซึ่งใช้กำหนดรูปแบบการยืนยันตัวตน
import { options } from '@/app/api/auth/[...nextauth]/option'
// อิมพอร์ตฟังก์ชัน getServerSession เพื่อรับค่า session มาใช้งานในคอมโพเนนต์
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function Profile() {
  const session = await getServerSession(options)
  // ตรวจสอบว่าได้เข้าสู่ระบบแล้ว และมีข้อมูลผู้ใช้
  if(session && session.user) {
    // กำหนดปุ่ม Sign Out เพื่อสั่งให้ออกจากระบบ
    return (
        <div className='flex flex-col justify-start items-center mx-auto h-screen my-5'>
            <div className='text-3xl'>{session.user?.name}</div>
            <div className='text-2xl text-gray-500'>{session.user?.email}</div>
            <Link 
            href={'api/auth/signout?callbackUrl=/'}
            className='bg-blue-400 text-white rounded-sm shadow-sm py-1 px-2 my-4'
            >
                Sign Out
            </Link>
        </div>
    )
  }
  // กำหนดปุ่ม Sign In เมื่อยังไม่ได้เข้าสู่ระบบ
  return (
    <div className='flex flex-col justify-start items-center mx-auto h-screen my-5'>
        <div className='text-3xl'>Please Sign In!!!</div>
        <Link 
        href={'api/auth/signin?callbackUrl=/'}
        className='ring-blue-400 ring-1 text-blue-500 rounded-sm shadow-sm py-1 px-2 my-4'
        >
            Sign In
        </Link>
    </div>
  )
}
