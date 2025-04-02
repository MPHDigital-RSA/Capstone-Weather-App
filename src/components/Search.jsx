import React, { useRef, useState } from 'react'
import useWeatherStore from '../stores/WeatherStore';

function Search() {

    // input state
    const [isEmpty, setIsEmpty] = useState(false)

    // creating a reference
    const inputRef = useRef("");

    // grabbing the search functionality from the zustand store
    const search = useWeatherStore((state) => state.search);

    // grabbing the set city function from the zustand store
    const setCity = useWeatherStore((state) => state.setCity);

    // grabbing the city variable from the zustand store
    const city = useWeatherStore((state) => state.city);

    // grabbing data from the API
    const weatherData = useWeatherStore((state) => state.weatherData)

    // grab the data from input and search the keyword or city and clear the input
    function searchCity() {
        let city = inputRef.current.value;
        setCity(city);
        if (city === "") {
            setIsEmpty(true)
        } else {
            search(city);
            setIsEmpty(false)
            inputRef.current.value = "";
        }
    }

    // refresh searched city weather
    function refreshWeather() {
        // set the city
        search(city)
    }

    // function to stop the default behavior of the browser on form subnit
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='relative flex flex-col gap-3 sm:flex-row'>

            <form className='bg-white p-[5px] rounded-xl max-w-[500px] w-[100%] flex gap-5' onSubmit={handleSubmit}>
                <input type="text" className='flex-grow p-3 text-[var(--main-color)] border-none outline-none' placeholder='Enter your city' ref={inputRef} />
                <button className='bg-[var(--accent-color)] text-[var(--main-color)] font-medium px-[20px] py-[10px] rounded-xl' onClick={searchCity}>Search</button>
            </form>

            {!weatherData.name ?
                <></> :
                <button className='bg-[var(--accent-color)] text-[var(--main-color)] font-medium px-[10px] py-[10px] rounded-xl hover:bg-[white] hover:text-[var(--main-color)]' onClick={refreshWeather}>Refresh</button>
            }


            {isEmpty ? <p className='text-red-300 mt-2 mb-2 font-bold text-md absolute top-[-40px]'>*Type the city first**</p> : <></>}

        </div>

    )
}

export default Search
