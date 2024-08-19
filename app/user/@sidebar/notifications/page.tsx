"use client";
import { useContext, useEffect, useState } from "react";
import { userContext } from "/app/components/Profile";
import { useNotify } from "reactjs-notify";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

interface notifications {
  _id: string;
  sender_id: string;
  reciever_id: string;
  message: string;
  type: string;
}

export default function Page() {
  const { user } = useContext(userContext);
  const [notifications, setNotifications] = useState([]);
  console.log(user._id);
  useEffect(() => {
    async function get() {
      const response = await fetch(
        `http://localhost:4000/user/getNotifications/${user._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      setNotifications(await response.json());
    }
    get();
  }, []);
  return (
    <div className="w-full overflow-hidden flex fle-col justify-center py-3">
        {/* <Link href="./" className="pl-[80%] text-white">
            <RxCross2 />
          </Link> */}
      {notifications.map((notification) => (
        <Card key={notification._id} content={notification} />
      ))}
    </div>
  );
}

function Card({ content }: { content: notifications }) {
  const { sender_id, reciever_id, message, type } = content;
  const { show } = useNotify();
  const [state, set] = useState<boolean>(true);
  async function handle(x: number) {
    set(false);
    console.log(x, reciever_id, sender_id);
    if (x == 1) {
      const response = await fetch(
        "http://localhost:4000/user/acceptFriendRequest",
        {
          method: "POST",
          body: JSON.stringify({
            notification_id: content._id,
            id: reciever_id,
            friendId: sender_id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      show(await response.json());
    } else {
      await fetch("http://localhost:4000/user/deleteNotification", {
        method: "POST",
        body: JSON.stringify({
          id: content._id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
    }
  }
  return (
    <>
      {state && (
        <div className="flex flex-col gap-5 bg-[#d8d9db] p-5 w-[90%] rounded-md text-sm">
          <h1>{message}</h1>
          {type == "friendRequest" && (
            <div className="flex flex-row gap-5 text-white">
              <button
                onClick={() => handle(1)}
                className="bg-[#353b45] hover:bg-[#4f545e] flex flex-row gap-1 justify-center items-center p-2 rounded-md"
              >
                Accept
              </button>
              <button
                onClick={() => handle(0)}
                className="bg-[#353b45] hover:bg-[#4f545e] flex flex-row gap-1 justify-center items-center p-2  rounded-md"
              >
                Reject
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
