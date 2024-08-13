
import Header from "./header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full relative h-full overflow-y-auto border-none">
      <Header/>
      <hr className="border-[#474f5d] w-full h-[1px]" />
      <div className="w-full h-[90%] flex flex-row justify-center items-center">
        <div className="w-full h-full relative">
          <div className="absolute bottom-2 w-full  p-5">
            <div className="rounded-md focus-within:white focus-within:ring-2 focus-within:ring-offset-1">
              <input
                type="text"
                placeholder="Message @Aulakh"
                className="bg-[#272931] text-sm p-2 text-[#afb0b3] h-[4rem] outline-none rounded-t-md w-full"
              />
              <div className="bg-[#2e3039] rounded-b-md h-[1.8rem]"></div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
