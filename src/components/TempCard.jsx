import React from 'react'
import temp from '../assets/temp.svg'

function TempCard() {
    return (
        <div className='shadow rounded-xl bg-white rounded-xl px-[30px] py-[30px] text-[var(--main-color)] flex gap-5 text-center justify-center items-center'>
            <img src={temp} alt="sun picture" className='w-[15px]' />
            <h1 className='text-[40px] font-bold'>60&#176;C</h1>
        </div>
    )
}

export default TempCard
