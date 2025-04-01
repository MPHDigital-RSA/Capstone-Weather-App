import React from 'react'
import temp from '../assets/temp.svg'
import useWeatherStore from '../stores/WeatherStore'

function TempCard() {


    const data = useWeatherStore(state => state.useWeatherStore);

    return (
        <div className='shadow rounded-xl bg-white rounded-xl px-[30px] py-[30px] text-[var(--main-color)] flex gap-5 text-center justify-center items-center'>
            <img src={temp} alt="sun picture" className='w-[15px]' />
            <h1 className='text-[40px] font-bold'>{data}&#176;C</h1>

        </div>
    )
}

export default TempCard
