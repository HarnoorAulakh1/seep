"use client"
import {useRouter} from "next/navigation";
export default function Default(){
    const router=useRouter();
    router.push("/user");
    return (null);
}