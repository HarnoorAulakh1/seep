import { url } from "inspector";
import Image from "next/image";
import Form from "./form";

export default function Auth() {
  return (
    <div
      style={{
        backgroundImage: `url(/download.svg)`,
      }}
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <div className="w-[80%] flex md:flex-row flex-col items-center justify-center">
        <div className="flex flex-col gap-2">
          <Image
            src="/logo_dark.png"
            alt="Vercel Logo"
            width={100}
            height={100}
            className="w-[10rem]"
          />
          <h1 className="text-white text-5xl font-bold whitespace-pre-line">
            Welcome to Atom Space workspace{" "}
          </h1>
        </div>
        <Form />
      </div>
    </div>
  );
}
