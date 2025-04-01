import React from 'react'

function HumWindCard({ stat, unit, amount, icon }) {

    return (
        <div className='shadow rounded-xl bg-white rounded-xl px-[30px] py-[30px] text-[var(--main-color)] flex flex-col text-center justify-center items-center h-[100%]'>
            <img src={icon} alt="humidity icon" className='w-[25px] pb-[10px]' />
            <h1 className='text-[18px] font-semibold'>{stat}</h1>
            <p className='text-[35px] font-bold'>{`${amount}${unit}`}</p>
        </div>
    )
}

export default HumWindCard
