import React from 'react'
import sun from '../assets/sun.svg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='bg-[var(--main-color)] h-[100vh] flex justify-center items-center px-[30px] text-white'>

            <div className=' flex flex-col justify-center items-center gap-4 text-white text-center py-[150px] max-w-[700px] w-[100]'>
                <img src={sun} alt="the image of the sun" className='w-[120px]' />
                <h1 className='text-[24px] font-semibold md:text-[30px]'>Welcome to Prince’s Weather App </h1>
                <p>This app uses ReactJS for development and weather API, to provide data related to the weather, temperature, humidity and the wind speed. using useState to manage states and useEffect</p>
                <Link to='/dashboard' className='bg-[var(--accent-color)] text-[var(--main-color)] font-medium px-[30px] py-[15px] rounded-xl'>Check the Dash</Link>
            </div>

        </div>
    )
}

export default Home
