"use client";

import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { CiMenuKebab } from "react-icons/ci";

interface user {
  _id?: any;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  friends: Array<string>;
  status: boolean;
}

function Search(value: string) {
  const [state, setState] = useState<user[]>([]);
  const control = useAnimation();
  async function handle(value: string) {
    if (value.length == 0) {
      setState([]);
      return;
    }
    const data = await fetch(`http://localhost:4000/user/search/${value}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    setState(await data.json());
  }
  return (
    <div className="bg-[#2f343d] text-[#c1c7d1] overflow-x-hidden w-full h-full flex flex-col gap-5 border-[#474f5d] border-l-[1px]">
      <div className="flex flex-col w-full gap-2">
        <div className="flex flex-row justify-between p-[1.19rem] items-center w-full">
          <div className="flex flex-row gap-2 items-center">
            <IoSearchOutline className="size-5" />
            <p>Search Messages</p>
          </div>
          {/* <Link href="./">
            <RxCross2 />
          </Link> */}
        </div>
        <hr className="border-[#474f5d] w-full h-[2px]" />
        <div className="w-full">
          <input
            onChange={(e) => handle(e.target.value)}
            className="text-md  text-[#888d94] border-[1px] border-[#676a6f] bg-[#272931] m-auto rounded-md p-2 w-[80%] block"
            placeholder="Search Messages"
          />
        </div>
        <hr className="border-[#474f5d] w-full h-[2px]" />
      </div>

      <div>
        {state &&
        state.map((item) =><User item={item} key={item._id}/>)}
      </div>
    </div>
  );
}

function User({item}:{item:user}){
  const control=useAnimation();

  return <Link href={`/user/channel/${item._id}`}><div
  onMouseEnter={() =>
    control.start({ x: "-1.5rem", scale: "100%" })
  }
  onMouseLeave={() => control.start({ x: "0", scale: "0" })}
  key={item.email}
  className="w-full relative flex flex-row gap-2 items-center cursor-pointer hover:bg-[#1d1d23] pl-5 py-2"
>
  <div className="rounded-md w-7 h-7 bg-[#138d65] flex justify-center items-center text-[#ffffff]">
    {item.firstName[0]}
  </div>
  <p className="text-[#a5a5a5] text-sm">{item.username}</p>
  <motion.div
    className="absolute right-0 scale-0"
    animate={control} // Use the individual control for this item
    transition={{ duration: 0.5, type: "spring" }}
  >
    <CiMenuKebab size={10} />
  </motion.div>
</div>
</Link>
}

export default Search;
