"use client";
import { create } from "domain";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  use,
} from "react";
import { RxCross2 } from "react-icons/rx";

export const notificationContext = createContext<{
  data: { show: boolean; notification: string };
  setter: React.Dispatch<
    React.SetStateAction<{ show: boolean; notification: string }>
  >;
}>({
  data: { show: false, notification: "" },
  setter: () => {},
});

export default function Notifications({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setter] = useState({ show: false, notification: "" });
  useEffect(() => {
    if (!data.show) return;
    const id = setTimeout(() => setter((x) => ({ ...x, show: false })), 5100);
    return () => clearTimeout(id);
  }, [data.show]);
  return (
    <notificationContext.Provider value={{ setter, data }}>
      {children}
      <AnimatePresence>
        {data.show && (
          <motion.div
          key="notification"
            initial={{ x: "100%" }}
            animate={{ x: "-5%" }}
            exit={{ x: "100%" }}
            transition={{ type: easeIn, duration: 0.3 }}
            className=" bg-white  w-[20rem] fixed top-[5%] text-black rounded-md right-0"
          >
            <RxCross2
              onClick={() => setter((x) => ({ ...x, show: false }))}
              className="absolute top-2 right-2"
            />
            <div className="px-2 pt-5 pb-2">{data.notification}</div>

            <div className="w-full overflow-hidden h-[5px] rounded-lg">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ type: easeIn, duration: 5 }}
                className="bg-red-700 w-full h-[5px]"
              ></motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </notificationContext.Provider>
  );
}
