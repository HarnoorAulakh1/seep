import Image from "next/image";
import Home from './components/home';
import Sidebar from './components/sidebar';
import "./globals.css";
import Link from 'next/link';

export default function Default() {
  return (
    <div className="h-full w-full">
      <Home/>
      {/* <Link href="/user/search" className="text-white">
      click
      </Link> */}
    </div>
  );
}
