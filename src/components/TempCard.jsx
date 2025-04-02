import React from 'react'
import temp from '../assets/temp.svg'
import useWeatherStore from '../stores/WeatherStore'

function TempCard() {

    const isLoading = useWeatherStore((state) => state.isLoading)
    const data = useWeatherStore((state) => state.weatherData)

    return (
        <div className='shadow rounded-xl bg-white rounded-xl px-[30px] py-[30px] text-[var(--main-color)] flex gap-5 text-center justify-center items-center dark:bg-[transparent]'>
            <img src={temp} alt="sun picture" className='w-[15px]' />

            {isLoading ?
                <p>Loading...</p> :
                <h1 className='text-[40px] font-bold'>{data.main ? Math.floor(data.main.temp) : null}&#176;C</h1>}
        </div>
    )
}

export default TempCard
