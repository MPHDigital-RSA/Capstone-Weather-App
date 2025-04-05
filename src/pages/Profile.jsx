import React from 'react'
import avatar from '../assets/author.jpg'
import ProfileCard from '../components/ProfileCard'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div className='bg-[var(--main-color)] dark:bg-[var(--light-green-color)] min-h-[100vh] flex flex-col justify-center items-center px-[30px] text-white pt-[150px] pb-[50px] gap-[30px]'>

            <div className='flex flex-col items-center justify-center gap-4 dark:text-[var(--main-color)]'>
                <img src={avatar} alt="author image" className='w-[120px] h-[120px] object-cover rounded-[20px] border-[5px]' />
                <div className='text-center'>
                    <p className='text-[28px] font-semibold'>Prince Hlela</p>
                    <p className='text-[18px] font-semibold'>ALX (FE) Student </p>
                    <p>I am confident in HTML, CSS, JS, React JS and Git.</p>
                </div>
            </div>

            <div className='flex gap-4 bg-white text-[var(--main-color)] font-medium rounded-md p-1 w-[100%] justify-center max-w-[500px] dark:bg-[var(--transparent-white-color)] dark:shadow'>
                <Link to='https://github.com/MPHDigital-RSA' target='_blank' className='hover:bg-[var(--accent-color)] p-2 rounded-md'>Github</Link>
                <Link to='https://github.com/MPHDigital-RSA' target='_blank' className='hover:bg-[var(--accent-color)] p-2 rounded-md'>Twitter</Link>
                <Link to='https://github.com/MPHDigital-RSA' target='_blank' className='hover:bg-[var(--accent-color)] p-2 rounded-md'>Discord</Link>
            </div>

            <div div className='w-[100%] grid gap-3 max-w-[900px] sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2'>
                <ProfileCard stack='HTML' perc="98" />
                <ProfileCard stack='JS' perc="50" />
                <div className='md:col-span-2'>
                    <ProfileCard stack='CSS' perc="85" />
                </div>
                <div className='md:row-span-full'>
                    <ProfileCard stack='REACT' perc="68" />
                </div>
            </div>

        </div >
    )
}

export default Profile
