import { FaRegUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoWarningOutline } from "react-icons/io5";
import Link from "next/link";

async function Channel({params}:{params:{id:string}}) {
  const response=await fetch(`http://localhost:4000/user/getUser/${params.id}`,{
    method:"GET",
    credentials:"include"
  })
  const data=await response.json();
  return (
    <div className="bg-[#1f2329] text-[#c1c7d1] overflow-scroll overflow-x-hidden w-[58%] h-full flex flex-col gap-5 border-[#474f5d] border-l-[1px]">
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between p-5 items-center w-full">
          <div className="flex flex-row gap-2 items-center">
            <FaRegUser />
            <p>User Info</p>
          </div>
          <Link href="/user">
            <RxCross2 />
          </Link>
        </div>
        <hr className="border-[#474f5d] w-full h-[2px]" />
      </div>
      <div className="flex flex-col gap-5 items-center">
        <div className="mt-5 flex flex-col gap-5">
          <div className="rounded-xl w-[20rem] h-[20rem] bg-[#138d65] text-[15rem] flex justify-center items-center text-white">
            {(data.username.charAt(0)).toUpperCase()}
          </div>
          <button className="bg-[#353b45] p-3 m-auto text-sm w-max rounded-md flex flex-row items-center gap-1 hover:bg-[#404753]">
            <IoWarningOutline className="w-4 h-4" />
            View reported messages
          </button>
        </div>
      </div>
      <div className=" flex flex-col gap-5 text-sm p-5">
        <div className="flex flex-col gap-1">
          <p>Roles</p>
          <div className="flex flex-row gap-2 text[#9ea2a9]">
            <p className="bg-[#2e343e]  text-[.8rem] px-[2px]">user</p>
            <p className="bg-[#2e343e] text-[.8rem] px-[2px]">Admin</p>
          </div>
        </div>

        <div>
          <p>Username</p>
          <p className="text-[#9ea2a9]">{data.username}</p>
        </div>
        <div>
          <p>Email</p>
          <p className="text-[#9ea2a9]">{data.email}</p>
        </div>
        <div>
          <p>Verification</p>
          <p className="text-[#9ea2a9]">Not verified</p>
        </div>
        <div>
          <p></p>
          <p className="text-[#9ea2a9]">July 14, 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Channel;
