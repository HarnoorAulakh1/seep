import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

function Discussion(){
    return (
        <div className="bg-[#1f2329] text-[#c1c7d1] overflow-scroll overflow-x-hidden w-[58%] h-full flex flex-col gap-5 border-[#474f5d] border-l-[1px]">
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row justify-between p-5 items-center w-full">
              <div className="flex flex-row gap-2 items-center">
                <IoSearchOutline className="size-5"/>
                <p>Search Messages</p>
              </div>
              <Link href="/user/cross">
                <RxCross2 />
              </Link>
            </div>
            <hr className="border-[#474f5d] w-full h-[2px]" />
            <div className="w-full">
                <input className="text-md text-[#888d94] border-[1px] border-[#676a6f] bg-[#272931] m-auto rounded-md p-2 w-[80%] block" defaultValue="Search Messages"/>
            </div>
            <hr className="border-[#474f5d] w-full h-[2px]" />
          </div>
         
        </div>
      );
}

export default Discussion;