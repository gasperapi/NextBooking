"use client"
import React, { useState } from 'react';
import { title } from "@/components/primitives";
import { Input, Button, Text, Spacer, Textarea, Avatar } from '@nextui-org/react';
const SignupForm = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    image: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // ส่งข้อมูล user ไปยัง API สำหรับการสมัครสมาชิกหรือการจัดการต่อไป
  };

  return (
    <div>
      <h1 className={title()}>กหก</h1>
      
    </div>
  );
};

export default SignupForm;
