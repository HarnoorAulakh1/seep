import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

 
// 1. Specify protected and public routes
 
export default async function middleware(req: NextRequest) {
  const token=req.cookies.get("token");
  if(!token){
    return NextResponse.redirect(new URL("/auth",req.url))
  }
  const response=await fetch("http://localhost:4000/user/checkLogin",{
    method:"GET",
    headers:{
      "Authorization":JSON.stringify(token)
    },
    credentials:"include"
  });
  console.log(response.status);
  if(response.status==200){
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/auth",req.url))
}

export const config={
    matcher:"/user/:path*",
};