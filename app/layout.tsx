import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./components/sidebar";
import "./globals.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Profile from "./components/Profile";
import "./globals.css";
import Wrapper from "./components/Wrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#1f2329] w-full h-full flex flex-row`}
      >
        <div className="w-full h-full scroll">
          <Profile>
            <Wrapper> {children}</Wrapper>
          </Profile>
        </div>
      </body>
    </html>
  );
}
