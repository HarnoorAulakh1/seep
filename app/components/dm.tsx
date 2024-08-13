"use client";

import { motion, spring, useAnimationControls } from "framer-motion";
import { useRouter } from "next/navigation";
import path from "path";
import { CiMenuKebab } from "react-icons/ci";
import { usePathname } from "next/navigation";

export default function Direct_Message() {
  return (
    <div className="w-full text-[#dbdde1] flex flex-col gap-5">
      <p className="pl-5">Direct messages</p>
      <DirectMessage name="Rocky" />
    </div>
  );
}

function DirectMessage({ name }: { name: string }) {
  const control = useAnimationControls();
  const router = useRouter();
  const path = usePathname();
  return (
    <div
      onClick={() => router.push("/user/messages")}
      onMouseEnter={() => control.start({ x: "-1.5rem", scale: "100%" })}
      onMouseLeave={() => control.start({ x: "0", scale: "0" })}
      className="w-full relative flex flex-row gap-2 items-center cursor-pointer hover:bg-[#1d1d23] pl-5 py-2"
    >
      <div className="rounded-md w-7 h-7 bg-[#138d65] flex justify-center items-center text-[#ffffff]">
        {name.charAt(0)}
      </div>
      <p className="text-[#a5a5a5] text-sm">{name}</p>
      <motion.div
        className="absolute right-0 scale-0"
        animate={control}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <CiMenuKebab size={10} />
      </motion.div>
    </div>
  );
}
