import React from 'react'
import useWeatherStore from '../stores/WeatherStore'

function HumWindCard({ stat, unit, icon }) {

    // retreiving the weatherData array from the zustand store on the WeatherStore.js file
    const isLoading = useWeatherStore((state) => state.isLoading)
    // retrieving the isLoading state from zustand
    const data = useWeatherStore((state) => state.weatherData)

    // if the card is for humidity display the humidity information from the API
    if (stat === "Humidity") {
        return (
            <div className='shadow rounded-xl bg-white rounded-xl px-[30px] py-[30px] text-[var(--main-color)] flex flex-col text-center justify-center items-center h-[100%] dark:bg-[transparent]'>
                <img src={icon} alt="humidity icon" className='w-[25px] pb-[10px]' />
                <h1 className='text-[18px] font-semibold'>{stat}</h1>

                {/* check if isLoading is true and display loading otherwise display the humidity data */}
                {isLoading ? <p > Loading...</p> :
                    <div className='text-[35px] font-bold'>
                        {data.main ? data.main.humidity : null}
                        <span className='text-[20px] font-bold'>{unit}</span>
                    </div>
                }
            </div >
        )
    }

    // if the card is for wind display the wind information from the API
    if (stat === "Wind") {
        return (
            <div className='shadow rounded-xl bg-white rounded-xl px-[30px] py-[30px] text-[var(--main-color)] flex flex-col text-center justify-center items-center h-[100%] dark:bg-[transparent]'>
                <img src={icon} alt="humidity icon" className='w-[25px] pb-[10px]' />
                <h1 className='text-[18px] font-semibold'>{stat}</h1>

                {/* check if isLoading is true and display loading otherwise display the wind data */}
                {isLoading ? <p > Loading...</p> :
                    <p className='text-[35px] font-bold'>
                        {data.wind ? Math.floor(data.wind.speed) : null}
                        <span className='text-[20px] font-bold'>{unit}</span>
                    </p>
                }
            </div >
        )
    }
}

export default HumWindCard
