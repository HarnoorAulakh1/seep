import { RiHome4Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { GoFileDirectory } from "react-icons/go";
import { BsDisplay } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import  Link  from "next/link";

function ToolBar() {
  return (
    <div className="flex-row flex justify-between px-5 py-5 items-center">
      <div className="rounded-md w-6 h-6 bg-[#138d65] flex justify-center items-center text-white">
        A
      </div>
      <div className="flex flex-row gap-1 text-[#dbdde1]">
        <Link href="/"><RiHome4Line
          className=" rounded-[3px] cursor-pointer hover:bg-[#444b58] p-[6px]"
          size={30}
        /></Link>
        
        <IoSearchOutline
          className=" rounded-[3px] cursor-pointer hover:bg-[#444b58] p-[6px]"
          size={30}
        />
        <GoFileDirectory
          className=" cursor-pointer hover:bg-[#444b58] p-[6px] rounded-[3px]"
          size={30}
        />
        <BsDisplay
          className=" cursor-pointer hover:bg-[#444b58] p-[6px] rounded-[3px]"
          size={30}
        />
        <IoCreateOutline
          className=" cursor-pointer hover:bg-[#444b58] p-[6px] rounded-[3px]"
          size={30}
        />
        <CiMenuKebab
          className="cursor-pointer hover:bg-[#444b58] p-[6px] rounded-[3px]"
          size={30}
        />
      </div>
    </div>
  );
}

export default ToolBar;
