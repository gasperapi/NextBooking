"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import "react-datepicker/dist/react-datepicker.css";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import {
  Button,
  Card,
  Input,
  Textarea,
  Select,
  SelectItem,
  Spinner,
} from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Tabs, Tab, CardBody } from "@nextui-org/react";
import Loading from "@/app/loading";
import useSWR from "swr";

const errorColors = {
  checkInDate: "warning",
  checkOutDate: "warning",
  fullName: "danger", // Assuming full name is required
  phone: "warning",
  email: "warning",
};

// สมมติว่าคุณมีข้อมูลห้องพักและจำนวนคงเหลือดังนี้
const roomTypes = [
  { label: "ห้อง A ติดทะเล", value: "A", remaining: 10 },
  { label: "ห้อง B ติดแม่น้ำ", value: "B", remaining: 5 },
  { label: "ห้อง C ใกล้ภูเขา", value: "C", remaining: 2 },
];

async function fetcher(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error cannot get data form API");
  }
  return res.json();
}
export default function BookingPage() {
  const { data: session, status } = useSession();
  const { data: bookings, error } = useSWR(
    "https://65dc41c1e7edadead7eb6f69.mockapi.io/api/v1/Booking",
    fetcher
  );
  //ใช้สำหรับ hook
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [roomType, setRoomType] = useState("");
  const [errors, setErrors] = useState({});
  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = fullName ? "" : "Full name is required.";
    tempErrors.phone = phone.length > 9 ? "" : "Invalid phone number.";
    tempErrors.email = email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
      ? ""
      : "Email is not valid.";
    tempErrors.checkInDate = checkInDate ? "" : "Check-in date is required.";
    tempErrors.checkOutDate = checkOutDate ? "" : "Check-out date is required.";
    tempErrors.roomType = roomType ? "" : "Please select a room type.";
    const handleSubmit = (e) => {
      e.preventDefault();
      // ที่นี่คุณสามารถเพิ่มการทำงานเพื่อส่งข้อมูลการจองไปยังเซิร์ฟเวอร์หรือ API
      console.log({ checkInDate, checkOutDate, fullName, phone, email });
    };

    setErrors({ ...tempErrors });
    return Object.values(tempErrors).every((x) => x === "");
  };
  const remainingRooms = 10; // จำนวนห้องที่เหลือ (ตัวอย่าง)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ checkInDate, checkOutDate, fullName, phone, email });
      // Add your submit logic here
    }
  };

  if (error) {
    return <div>{error.message}</div>;
  }
  // ทำการ Log ข้อมูลที่ได้รับจาก API หลังจากมันถูกโหลดแล้ว
  if (bookings) {
    console.log("Bookings data:", bookings);
  }
  if (!bookings) {
    return <Loading />;
  }

  //ขณะกำลังเข้าระบบ หรือ ออก ให้แสดง laoding
  if (status === "loading") {
    return <Spinner color="success" />;
  }

  //เมื่อเข้าสู่ระบบเรียบร้อยแล้ว ข้อมูล data และ data user พร้อม
  if (status === "authenticated") {
    return (
      <div className="flex flex-col w-full">
        <Tabs aria-label="Options" fullWidth size="lg">
          <Tab key="booking" title="ลงเวลา">
            <Card>
              <CardBody>
                <div className="p-5 max-w-lg mx-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      วันที่เข้า
                      <DatePicker
                        selected={checkInDate}
                        onChange={(date) => setCheckInDate(date)}
                        placeholderText="Select check-in date"
                        className="input input-bordered w-full"
                      />
                      {errors.checkOutDate && (
                        <p className="text-error mt-2">{errors.checkInDate}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      วันที่ออก
                      <DatePicker
                        selected={checkOutDate}
                        onChange={(date) => setCheckOutDate(date)}
                        placeholderText="Select check-out date"
                        className="input input-bordered w-full"
                      />
                      {errors.checkOutDate && (
                        <p className="text-error mt-2">{errors.checkOutDate}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      <Input
                        fullWidth
                        clearable
                        bordered
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                        className="input input-bordered w-full"
                        errorMessage={
                          errors.fullName
                            ? "Please enter a valid full name"
                            : null
                        }
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        fullWidth
                        clearable
                        bordered
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number"
                        className="input input-bordered w-full"
                        errorMessage={
                          errors.phone
                            ? "Please enter a valid Phone Number"
                            : null
                        }
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        fullWidth
                        clearable
                        bordered
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="input input-bordered w-full"
                        errorMessage={
                          errors.email ? "Please enter a valid Email" : null
                        }
                      />
                    </div>
                    <div className="mb-4">
                      <Select
                        label="เลือกประเภทห้อง"
                        onChange={(e) => setRoomType(e.target.value)}
                        errorMessage={
                          errors.roomType ? "Please enter a valid Email" : null
                        }
                      >
                        {roomTypes.map((room) => (
                          <SelectItem key={room.value} value={room.value}>
                            {`${room.label} เหลือ ${room.remaining} ห้อง`}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <Button
                      type="submit"
                      shadow
                      color="primary"
                      className="btn btn-primary w-full"
                    >
                      Submit Booking
                    </Button>
                  </form>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="pending" title="Admin อนุมัติ"></Tab>
          <Tab key="check-booking" title="รายการที่ลงทั้งหมด">
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn className="text-center">Name</TableColumn>
                <TableColumn className="text-center">Check-in Date</TableColumn>
                <TableColumn className="text-center">
                  Check-out Date
                </TableColumn>
                <TableColumn className="text-center">Phone Number</TableColumn>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.fullName}</TableCell>
                    <TableCell>
                      {new Date(booking.checkInDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {new Date(booking.checkOutDate).toLocaleDateString()}
                    </TableCell>

                    <TableCell>{booking.phoneNumber}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Tab>

          {/* Add other tabs if necessary */}
        </Tabs>
      </div>
    );
  }

  //เมื่อไม่ได้เข้าระบบ
  if (status === "unauthenticated") {
    return (
      <div>
        <div className="flex flex-col justify-start items-center mx-auto h-screen my-5">
          <div className="text-3xl">กรุณาเข้าสู่ระบบ!!!</div>
          <Link
            href={"api/auth/signin?callbackUrl=/BookingForm"}
            className="m-2"
          >
            <Button color="primary">เข้าสู่ระบบ</Button>
          </Link>
          <Link href={"register"} className="m-2">
            <Button color="secondary">สมัครสมาชิก</Button>
          </Link>
        </div>
      </div>
    );
  }
}
