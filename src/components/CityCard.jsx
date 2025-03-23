import React from 'react'
import sun from '../assets/sun.svg'

function CityCard() {
    return (
        <div className='bg-white rounded-xl px-[30px] py-[40px] text-[var(--main-color)] flex gap-6 flex-col text-center justify-center items-center shadow rounded-xl h-[100%]'>
            <h1 className='text-[30px] font-semibold'>New York</h1>
            <img src={sun} alt="sun picture" className='w-[100px]' />
        </div>
    )
}

export default CityCard
