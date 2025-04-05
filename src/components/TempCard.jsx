import React from 'react'
import temp from '../assets/temp.svg'
import useWeatherStore from '../stores/WeatherStore'

function TempCard() {

    // retreiving the weatherData array from the zustand store on the WeatherStore.js file
    const isLoading = useWeatherStore((state) => state.isLoading)
    // retrieving the isLoading state from zustand
    const data = useWeatherStore((state) => state.weatherData)

    return (
        <div className='shadow rounded-xl bg-white rounded-xl px-[30px] py-[30px] text-[var(--main-color)] flex gap-5 text-center justify-center items-center dark:bg-[transparent]'>
            <img src={temp} alt="sun picture" className='w-[15px]' />

            {/* check if is loading is true and display loading otherwise display the temperature */}
            {isLoading ?
                <p>Loading...</p> :
                <h1 className='text-[40px] font-bold'>{data.main ? Math.floor(data.main.temp) : null}&#176;C</h1>}
        </div>
    )
}

export default TempCard
