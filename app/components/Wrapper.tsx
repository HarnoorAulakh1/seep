"use client";
import React, { useEffect,useContext } from "react";
import { Notifications,useNotify } from "reactjs-notify";
import { userContext } from "./Profile";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Notifications><Socket>{children}</Socket></Notifications>
    </>
  );
}

export let ws: WebSocket;

function Socket({children}:{children:React.ReactNode}){
    const {show} = useNotify();
    const {user}= useContext(userContext);
    useEffect(() => {
        console.log("user",user);
        ws = new WebSocket(`ws://localhost:8080/?senderId=${user._id}`);
        ws.onopen = () => {
            console.log("connected");
        };
        ws.onmessage = async(response: MessageEvent<{ message: string; type: string; }>) => {
            const data=JSON.parse(response.data);
            console.log("message",data.message);
            show(`${data.message}`);
        };
        ws.onerror = (error:any) => {
            console.log(error);
        };
        ws.onclose = () => {
            console.log("disconnected");
        };
        return () => {
            ws.close();
        };
      }
    , [user]);
    return <>{children}</>;
}
