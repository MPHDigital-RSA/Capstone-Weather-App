import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../index.css'

function Navbar() {

    // theme state
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        // check if theme state is light and add a light class to the root body element otherwise remove the class.
        if (theme === "dark") {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

    }, [theme]);

    const handleTheme = () => {
        // set the theme state to dark if light and light if dark
        setTheme(theme === "dark" ? "light" : "dark");
        console.log(theme)
    };

    return (
        <>
            <div className='px-[1em] pt-[30px] flex items-center justify-center absolute w-[100%]'>
                <div className='rounded-md sm:rounded-xl bg-white p-2 flex items-center justify-between gap-4 text-[var(--main-color)] font-semibold max-w-[900px] w-[100%] shadow dark:bg-[var(--transparent-white-color)]'>
                    <div className='flex gap-2'>
                        <NavLink to='/' className='hover:bg-[var(--accent-color)] p-1 sm:p-3 rounded-md sm:rounded-xl' activeClassName='active'>Home</NavLink>
                        <NavLink to='/dashboard' className='hover:bg-[var(--accent-color)] p-1 sm:p-3 rounded-md sm:rounded-xl'>Dashboard</NavLink>
                    </div>
                    <div className='flex gap-2'>
                        <NavLink to='/profile' className='hover:bg-[var(--accent-color)] p-1 sm:p-3 rounded-md sm:rounded-xl'>Profile</NavLink>
                        <button className='hover:bg-[var(--accent-color)] p-1 sm:p-3 rounded-md sm:rounded-xl underline' onClick={handleTheme}>{theme === "dark" ? "Dark- mode" : "Light-mode"}</button>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar
