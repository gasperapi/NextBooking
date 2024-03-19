import { title } from "@/components/primitives";
// อิมพอร์ต options ออบเจ็กต์ ซึ่งใช้กำหนดรูปแบบการยืนยันตัวตน
import { options } from '@/app/api/auth/[...nextauth]/option'
// อิมพอร์ตฟังก์ชัน getServerSession เพื่อรับค่า session มาใช้งานในคอมโพเนนต์
import { getServerSession } from 'next-auth'
import Link from 'next/link'
export default async function DocsPage() {
	const session = await getServerSession(options)
	if(session && session.user) {
		// กำหนดปุ่ม Sign Out เพื่อสั่งให้ออกจากระบบ
		return (
			<div className='flex flex-col justify-start items-center mx-auto h-screen my-5'>
				<div className='text-3xl'>{session.user?.name}</div>
				<div className='text-2xl text-gray-500'>{session.user?.email}</div>
				<Link 
				href={'api/auth/signout?callbackUrl=/profile'}
				className='bg-blue-400 text-white rounded-sm shadow-sm py-1 px-2 my-4'
				>
					Sign Out
				</Link>
			</div>
		)
	  }
	return (
		<div>
			<h1 className={title()}>จองห้องพัก</h1>
		</div>
	);
}
