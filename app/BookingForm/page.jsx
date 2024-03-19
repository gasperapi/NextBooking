
'use client'
import { useSession ,signIn ,signOut } from "next-auth/react";
import Link from "next/link";
import { Button, Card, Input, Textarea, Select, Spinner } from "@nextui-org/react";
import Loading from '@/app/loading'
import  useSWR  from "swr";

async function fetcher(url) {
  const res = await fetch(url);
  if(!res.ok) {
    throw new Error("Error cannot get data form API");
  }
  return res.json();
}
export default  function BookingPage() {
  const {data: session, status} = useSession();
  const {data: bookings, error} = useSWR(
    'https://65dc41c1e7edadead7eb6f69.mockapi.io/api/v1/Booking', fetcher
  );

  if (error) {
    return <div>{error.message}</div>
  }
  // ทำการ Log ข้อมูลที่ได้รับจาก API หลังจากมันถูกโหลดแล้ว
  if (bookings) {
    console.log("Bookings data:", bookings);
  }
  if (!bookings) {
    return <Loading />
  }
  
  //ขณะกำลังเข้าระบบ หรือ ออก ให้แสดง laoding
  if(status==='loading') {
    return <Spinner color="success"/>
  }
  
  //เมื่อเข้าสู่ระบบเรียบร้อยแล้ว ข้อมูล data และ data user พร้อม
  if(status === 'authenticated') {
    return(
      <div className="flex flex-col justify-start items-center mx-auto h-screen my-5">
        <div className="text-3xl">สวัสดีคุณ {session.user?.name}</div>
          
      </div>
    )
  }

  //เมื่อไม่ได้เข้าระบบ
  if(status === 'unauthenticated') {
    return(
      <div>
        <div className="flex flex-col justify-start items-center mx-auto h-screen my-5">
      <div className="text-3xl">กรุณาเข้าสู่ระบบ!!!</div>
      <Link href={"api/auth/signin?callbackUrl=/BookingForm"} className="m-2">
        <Button color="primary">เข้าสู่ระบบ</Button>
      </Link>
      <Link href={"register"} className="m-2">
        <Button color="secondary">สมัครสมาชิก</Button>
      </Link>
    </div>
      </div>
    )
  }

}
