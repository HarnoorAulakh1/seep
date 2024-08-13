import { Children } from 'react';

function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className='h-full w-[25%]'>
            {children}
        </div>
    )
}

export default Layout;