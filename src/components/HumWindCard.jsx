import React from 'react'
import HumIcon from '../assets/humidity.svg'

function HumWindCard() {
    return (
        <div className='shadow rounded-xl bg-white rounded-xl px-[30px] py-[30px] text-[var(--main-color)] flex flex-col text-center justify-center items-center h-[100%]'>
            <img src={HumIcon} alt="humidity icon" className='w-[25px] pb-[10px]' />
            <h1 className='text-[18px] font-semibold'>wind speed</h1>
            <p className='text-[40px] font-bold'>90%</p>
        </div>
    )
}

export default HumWindCard
