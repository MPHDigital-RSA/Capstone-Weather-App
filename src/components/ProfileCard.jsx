import React from 'react'

function ProfileCard({ stack, perc }) {
    return (
        <div className='bg-white w-[100%] h-[100%] text-[var(--main-color)] rounded-[10px] px-[20px] py-[30px] flex flex-col items-center justify-center'>
            <p className='text-[28px] font-bold md:text-[32px]'>{stack}</p>
            <p className='text-[50px] font-bold md:text-[60px]'>{`${perc}%`}</p>
        </div>
    )
}

export default ProfileCard
