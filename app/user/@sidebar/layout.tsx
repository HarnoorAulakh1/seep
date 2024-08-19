import { Children } from 'react';
import ToolBar from "@/app/components/toolbar";

function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className='h-full w-[25%] bg-[#2f343d] overflow-scroll overflow-x-hidden no-scrollbar scroll'>
            <ToolBar/>
            <hr className=' border-[#474f5d] w-full h-[2px]'/><br />
            {children}
        </div>
    )
}

export default Layout;