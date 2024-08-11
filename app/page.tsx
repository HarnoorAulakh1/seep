import Image from "next/image";
import Home from './components/home';
import Sidebar from './components/sidebar';
import "./globals.css";

export default function Default() {
  return (
    <div className="h-full w-full">
      <Home/>
    </div>
  );
}
