import Image from "next/image";
import Home from '../components/home';
import { GetServerSidePropsContext } from 'next';

export default function Default() {
  return (
    <div className="h-full w-full">
      <Home/>
    </div>
  );
}


