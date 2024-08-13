import { LuMessagesSquare } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

function Discussion(){
    return (
        <div className="bg-[#1f2329] text-[#c1c7d1] overflow-scroll overflow-x-hidden w-[58%] h-full flex flex-col gap-5 border-[#474f5d] border-l-[1px]">
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between p-5 items-center w-full">
              <div className="flex flex-row gap-2 items-center">
              <LuMessagesSquare/>
                <p>Search Messages</p>
              </div>
              <Link href="./">
                <RxCross2 />
              </Link>
            </div>
            <hr className="border-[#474f5d] w-full h-[2px]" />
          </div>
         
        </div>
      );
}

export default Discussion;