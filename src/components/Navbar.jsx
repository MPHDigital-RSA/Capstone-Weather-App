import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='px-[30px] pt-[30px] flex items-center justify-center absolute w-[100%]'>
                <div className='rounded-xl bg-white p-[20px] flex items-center justify-between gap-4 text-[var(--main-color)] font-semibold max-w-[900px] w-[100%] shadow'>
                    <div className='flex gap-4'>
                        <Link to='/'>Home</Link>
                        <Link to='/dashboard'>Dashboard</Link>
                    </div>
                    <div>
                        <Link to='/profile'>Profile</Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar
