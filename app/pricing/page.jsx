"use client";
import { title } from "@/components/primitives";
import React, { useState } from "react";
import { Input, Button, Spacer, Avatar } from "@nextui-org/react";
export default function RegisterPage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});

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
      console.log(user);
      // Submit the form
    }
  };
  return (
    <div>
      <h1 className={title()}>สมัครสมาชิก</h1>
      <div style={{ padding: "2rem" }}>
        
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
        {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
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
        {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
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
        {errors.phoneNumber && <div style={{ color: "red" }}>{errors.phoneNumber}</div>}
        <Spacer y={1} />

        <Button type="submit" shadow color="primary">
          Submit
        </Button>
      </form>
      </div>
    </div>
  );
}
