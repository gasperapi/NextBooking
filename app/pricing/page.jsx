"use client";
import { title } from "@/components/primitives";
import React, { useState } from "react";
import { Input, Button, Spacer, Skeleton } from "@nextui-org/react";
export default function RegisterPage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false); // สถานะใหม่สำหรับจัดการการแสดง Skeleton
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!user.username.trim()) {
      errors.username = "Username is required";
      isValid = false;
    }

    if (!user.password.trim() || user.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (!user.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!user.email.trim() || !/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Email is not valid";
      isValid = false;
    }

    if (!user.phoneNumber.trim() || !/^\d{10}$/.test(user.phoneNumber)) {
      errors.phoneNumber = "Phone Number must be 10 digits";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true); // ก่อนส่งฟอร์ม แสดง Skeleton
      console.log(user);
      // Submit the form
      setTimeout(() => {
        setIsLoading(false); // หลังจากส่งข้อมูลเสร็จ ซ่อน Skeleton
        // ทำการตั้งค่าหรือประมวลผลอื่น ๆ หลังจากที่ข้อมูลได้รับการจัดการเสร็จสิ้น
      }, 2000);
    }
  };
  return (
    <div>
      <h1 className={title()}>สมัครสมาชิก</h1>
      <div style={{ padding: "2rem" }}>
        {isLoading ? (
          <>
            <div className="max-w-[300px] w-full flex items-center gap-3">
              <div>
                <Skeleton className="flex rounded-full w-12 h-12" />
              </div>
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-3 w-3/5 rounded-lg" />
                <Skeleton className="h-3 w-4/5 rounded-lg" />
              </div>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              clearable
              bordered
              fullWidth
              placeholder="Username"
              name="username"
              value={user.username}
              onChange={handleChange}
              status={errors.username ? "error" : "default"}
            />
            {errors.username && (
              <div style={{ color: "red" }}>{errors.username}</div>
            )}
            <Spacer y={1} />

            <Input
              type="password"
              clearable
              bordered
              fullWidth
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
              status={errors.password ? "error" : "default"}
            />
            {errors.password && (
              <div style={{ color: "red" }}>{errors.password}</div>
            )}
            <Spacer y={1} />

            <Input
              clearable
              bordered
              fullWidth
              placeholder="Name"
              name="name"
              value={user.name}
              onChange={handleChange}
              status={errors.name ? "error" : "default"}
            />
            {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            <Spacer y={1} />

            <Input
              clearable
              bordered
              fullWidth
              placeholder="Email"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              status={errors.email ? "error" : "default"}
            />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
            <Spacer y={1} />

            <Input
              clearable
              bordered
              fullWidth
              placeholder="Phone Number"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleChange}
              status={errors.phoneNumber ? "error" : "default"}
            />
            {errors.phoneNumber && (
              <div style={{ color: "red" }}>{errors.phoneNumber}</div>
            )}
            <Spacer y={1} />

            <Button type="submit" shadow color="primary">
              Submit
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
