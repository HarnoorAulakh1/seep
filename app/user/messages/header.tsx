"use client";

import { FaRegUser } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const name = usePathname();
  function isActive(path: string) {
    if (name == path) {
      return true;
    }
    return false;
  }
  
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div className="py-[1.06rem] text-[#dbdde1] px-5 items-center  flex flex-row gap-2">
        <div className="rounded-md w-9 h-9 bg-[#138d65] text-xl flex justify-center items-center text-white">
          A
        </div>
        <p className="font-semibold">Aulakh</p>
      </div>
      <div className="flex flex-row gap-5 text-[#dbdde1] mr-5">
        <Link href="/user/messages/channel">
          <FaRegUser
            className={`rounded-[3px] ${
              isActive("user/messages/channel") ? "bg-[#444b58]" : ""
            } cursor-pointer hover:bg-[#444b58] p-[6px]`}
            size={30}
          />
        </Link>
        <Link href="/user/messages/discussion">
          <LuMessagesSquare
            className={`rounded-[3px] ${
              isActive("messages/discussion") ? "bg-[#444b58]" : ""
            } cursor-pointer hover:bg-[#444b58] p-[6px]`}
            size={30}
          />
        </Link>
        <Link href="/user/messages/search">
          <IoSearchOutline
            className={`rounded-[3px] ${
              isActive("/messages/search") ? "bg-[#444b58]" : ""
            } cursor-pointer hover:bg-[#444b58] p-[6px]`}
            size={30}
          />
        </Link>
        <Link href="/user/messages/">
          <CiMenuKebab
            className={`rounded-[3px] ${
              isActive("/messages/") ? "bg-[#444b58]" : ""
            } cursor-pointer hover:bg-[#444b58] p-[6px]`}
            size={30}
          />
        </Link>
      </div>
    </div>
  );
}
