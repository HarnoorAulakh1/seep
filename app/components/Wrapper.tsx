"use client";
import React from "react";
import { Notifications } from "reactjs-notify";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Notifications>{children}</Notifications>
    </>
  );
}
