"use client";
import { useContext, useEffect, useState } from "react";
import { userContext } from "./Profile";
import {ws} from "./Wrapper";

export default function AddFriend({ id }: { id: string }) {
  const { user } = useContext(userContext);
  async function handle() {
    ws.send(
      JSON.stringify({
        receiverId: id,
        senderId: user._id,
        message: `${user.username} sent you a friend request`,
        type: "friendRequest",
        read:false,
      })
    );
    const data = await fetch("http://localhost:4000/user/sendFriendRequest", {
      method: "POST",
      body: JSON.stringify({
        sender_id: user._id,
        reciever_id: id,
        type: "friendRequest",
        message: `${user.username} sent you a friend request`,
        read: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const response = await data.json();
    console.log(response.message);
  }
  return <>{user._id != id && <button onClick={handle}>Add Friend</button>}</>;
}
