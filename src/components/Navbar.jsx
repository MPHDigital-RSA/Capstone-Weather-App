import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import '../index.css'

function Navbar() {
    return (
        <>
            <div className='px-[30px] pt-[30px] flex items-center justify-center absolute w-[100%]'>
                <div className='rounded-xl bg-white p-2 flex items-center justify-between gap-4 text-[var(--main-color)] font-semibold max-w-[900px] w-[100%] shadow'>
                    <div className='flex gap-4'>
                        <NavLink to='/' className='hover:bg-[var(--accent-color)] p-3 rounded-md' activeClassName='active'>Home</NavLink>
                        <NavLink to='/dashboard' className='hover:bg-[var(--accent-color)] p-3 rounded-md'>Dashboard</NavLink>
                    </div>
                    <div>
                        <NavLink to='/profile' className='hover:bg-[var(--accent-color)] p-3 rounded-md'>Profile</NavLink>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar
