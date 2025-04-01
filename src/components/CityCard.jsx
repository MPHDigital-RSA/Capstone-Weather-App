import React from 'react'
import useWeatherStore from '../stores/WeatherStore'

function CityCard() {

    // retreiving the weatherData array from the zustand store on the WeatherStore.js file
    const data = useWeatherStore((state) => state.weatherData)
    const isLoading = useWeatherStore((state) => state.isLoading)

    return (
        <>
            {isLoading ? <p className='bg-white rounded-xl px-[30px] py-[40px] text-[var(--main-color)] flex gap-6 flex-col text-center justify-center items-center shadow rounded-xl h-[100%]'>Loading</p> :

                <div className='bg-white rounded-xl px-[30px] py-[40px] text-[var(--main-color)] flex gap-6 sm:flex-col text-center justify-center items-center shadow rounded-xl h-[100%]'>
                    <h1 className='text-[30px] font-semibold'>{data.name}</h1>

                    {data.weather ? <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Sun Image" className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] fit-cover' /> : null}
                </div>

            }
        </>

    )
}

export default CityCard
