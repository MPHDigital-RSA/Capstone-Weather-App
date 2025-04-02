import React, { useEffect } from 'react'
import CityCard from '../components/CityCard'
import TempCard from '../components/TempCard'
import HumWindCard from '../components/HumWindCard'
import Search from '../components/Search'
import useWeatherStore from '../stores/WeatherStore'
import humidityIcon from '../assets/humidity.svg'
import windIcon from '../assets/wind.svg'
import ErrorMessage from '../components/ErrorMessage'

function Dashboard() {

    // grabbing data from the API
    const searchWeather = useWeatherStore((state) => state.search)

    // grabbing data from the API
    const weatherData = useWeatherStore((state) => state.weatherData)

    // load the initial weather from the city new york
    useEffect(() => {
        searchWeather("new york");
    }, []);

    return (
        <div className='dark:bg-[var(--light-green-color)] bg-[var(--main-color)] min-h-[100vh] flex flex-col justify-center items-center px-[30px] pb-[30px] text-white pt-[150px] gap-[10px]'>
            <div className='w-[100%] flex justify-center'>
                <Search />
            </div>
            {!weatherData.name ? <ErrorMessage /> :
                <div className='max-w-[900px] w-[100%] bg-white rounded-xl text-black p-[10px] grid gap-2 grid-cols-2 auto-rows-auto sm:grid-cols-4'>

                    <div className='col-span-2 sm:col-span-2 sm:row-span-2 h-[100%]'><CityCard /></div>

                    <div className='col-span-2 sm:col-span-2'><TempCard /></div>

                    <div>
                        <HumWindCard stat="Humidity" unit="%" icon={humidityIcon} />
                    </div>

                    <div>
                        <HumWindCard stat="Wind" unit="KM/H" icon={windIcon} />
                    </div>

                </div>
            }
        </div >
    )
}

export default Dashboard
