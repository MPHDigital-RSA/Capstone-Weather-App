import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {

    // this is the 404 page
    return (
        <div className='bg-[var(--main-color)] h-[100vh] flex justify-center items-center px-[30px] flex-col gap-6 text-white'>
            <h1 className='text-[40px]'>This is the wrong link</h1>
            <Link to='/home' className='bg-[var(--accent-color)] text-[var(--main-color)] font-medium px-[30px] py-[15px] rounded-xl'>Back to Home page</Link>
        </div>
    )
}

export default NoPage
