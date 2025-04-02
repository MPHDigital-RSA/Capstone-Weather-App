import React from 'react'
import useWeatherStore from '../stores/WeatherStore'

function HumWindCard({ stat, unit, icon }) {

    const isLoading = useWeatherStore((state) => state.isLoading)
    const data = useWeatherStore((state) => state.weatherData)

    if (stat === "Humidity") {
        return (
            <div className='shadow rounded-xl bg-white rounded-xl px-[30px] py-[30px] text-[var(--main-color)] flex flex-col text-center justify-center items-center h-[100%] dark:bg-[transparent]'>
                <img src={icon} alt="humidity icon" className='w-[25px] pb-[10px]' />
                <h1 className='text-[18px] font-semibold'>{stat}</h1>

                {isLoading ? <p > Loading...</p> :
                    <div className='text-[35px] font-bold'>
                        {data.main ? data.main.humidity : null}
                        <span className='text-[20px] font-bold'>{unit}</span>
                    </div>
                }
            </div >
        )
    }

    if (stat === "Wind") {
        return (
            <div className='shadow rounded-xl bg-white rounded-xl px-[30px] py-[30px] text-[var(--main-color)] flex flex-col text-center justify-center items-center h-[100%] dark:bg-[transparent]'>
                <img src={icon} alt="humidity icon" className='w-[25px] pb-[10px]' />
                <h1 className='text-[18px] font-semibold'>{stat}</h1>

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
