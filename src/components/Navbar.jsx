import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='px-[30px] bg-[var(--main-color)] py-[30px] flex items-center justify-center'>
                <div className='rounded-lg bg-white p-[15px] flex items-center justify-between gap-4 text-[var(--main-color)] font-semibold max-w-[900px] w-[100%]'>
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
