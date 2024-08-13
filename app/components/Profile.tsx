"use client";

import React, { createContext, useState, useEffect } from "react";
import Discussion from "../user/@messages/discussion/page";

export const userContext = createContext<{
  user: {
    _id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    status: string;
  };
  dispatch: React.Dispatch<
    React.SetStateAction<{
      _id: string;
      username: string;
      email: string;
      firstName: string;
      lastName: string;
      status: string;
    }>
  >;
}>({
  user: {
    _id: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    status: "",
  },
  dispatch: () => {},
});

export default function Profile({ children }: { children: React.ReactNode }) {
  const [user, dispatch] = useState<{
    _id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    status: string;
  }>({
    _id: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    status: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetch("http://localhost:4000/user/checklogin", {
        method: "GET",
        credentials: "include",
      });
      dispatch(await data.json());
    };
    fetchUser();
  }, []);

  return (
    <userContext.Provider value={{ user, dispatch }}>
      {children}
    </userContext.Provider>
  );
}
