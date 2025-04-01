import React from 'react'
import CityCard from '../components/CityCard'
import TempCard from '../components/TempCard'
import HumWindCard from '../components/HumWindCard'
import Search from '../components/Search'
import useWeatherStore from '../stores/WeatherStore'
import humidityIcon from '../assets/humidity.svg'
import windIcon from '../assets/wind.svg'

function Dashboard() {

    // grabbing data from the API
    const data = useWeatherStore((state) => state.weatherData)

    // extracting the wind data
    // const wind = data.wind.speed;

    // extracting the humidity data
    // const humidity = data.main.humidity;

    return (
        <div className='bg-[var(--main-color)] min-h-[100vh] flex flex-col justify-center items-center px-[30px] pb-[30px] text-white pt-[150px] gap-[10px]'>
            <div className='w-[100%] flex justify-center'>
                <Search />
            </div>
            <div className='max-w-[900px] w-[100%] bg-white rounded-xl text-black p-[10px] grid gap-2 grid-cols-2 auto-rows-auto sm:grid-cols-4'>

                <div className='col-span-2 sm:col-span-2 sm:row-span-2 h-[100%]'><CityCard /></div>

                <div className='col-span-2 sm:col-span-2'><TempCard /></div>

                <div>
                    <HumWindCard stat="Himidity" unit="%" icon={humidityIcon} />
                </div>

                <div>
                    <HumWindCard stat="Wind" unit="KM/H" icon={windIcon} />
                </div>

            </div>
        </div >
    )
}

export default Dashboard
