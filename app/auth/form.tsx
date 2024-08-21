"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {useNotify} from "reactjs-notify"
import { userContext } from "../components/Profile";

function Form() {
  const [state, set] = useState<boolean>(true);
  return <>{state ? <Login setter={set} /> : <Signup setter={set} />}</>;
}

function Signup({
  setter,
}: {
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  console.log(show);
  async function handle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const response = await fetch("http://localhost:4000/user/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.get("username"),
        password: data.get("password"),
        email: data.get("email"),
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.status == 200) alert("Account created successfully");
    else alert(JSON.stringify(await response.json()));
    e.target.reset();
  }
  return (
    <div className="w-[60%] rounded-md h-max p-10 bg-white">
      <h1 className="text-xl font-bold mb-[3rem]">Create an account</h1>
      <form className="flex flex-col gap-[2rem] font-light" onSubmit={handle}>
        <div className="flex flex-col">
          <label htmlFor="">
            Username <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="p-2 border-[1px] border-[#474f5d] rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-2 border-[1px] border-[#474f5d] rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 border-[1px] border-[#474f5d] rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            First name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="p-2 border-[1px] border-[#474f5d] rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            Last name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="p-2 border-[1px] border-[#474f5d] rounded-md"
            required
          />
        </div>

        <div className="flex flex-row justify-between items-center text-sm font-light">
          <button className="bg-[#156ff6] text-white py-2 px-4 rounded-md w-max">
            Register
          </button>
          <span className="text-[#165fd4]" onClick={() => setter((x) => !x)}>
            Back to Login
          </span>
        </div>
      </form>
    </div>
  );
}

function Login({
  setter,
}: {
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const { show } = useNotify();
  const { dispatch } = useContext(userContext);
  async function handle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const keys = data.keys();
    const response = await fetch("http://localhost:4000/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: data.get("username"),
        password: data.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const res = await response.json();
    console.log(res.status);
    if (res.status) {
      console.log(`Logged in as ${res.username}`);
      show(`Logged in as ${res.username}`);
      dispatch(res);
      router.push("/user");
    }
  }
  return (
    <div className="w-[60%] rounded-md h-max p-10 bg-white">
      <h1 className="text-xl font-bold mb-[3rem]">Login</h1>
      <form
        className="flex flex-col gap-[2rem] font-light"
        onSubmit={(e) => handle(e)}
      >
        <div className="flex flex-col">
          <label htmlFor="">
            Email or Username <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="p-2 border-[1px] border-[#474f5d] rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-2 border-[1px] border-[#474f5d] rounded-md"
            required
          />
        </div>
        <div className="flex flex-row justify-between items-center text-sm font-light">
          <button
            type="submit"
            className="bg-[#156ff6] text-white py-2 px-4 rounded-md w-max"
          >
            Login
          </button>
          <div>
            New here?
            <span className="text-[#165fd4]" onClick={() => setter((x) => !x)}>
              Create an account
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
