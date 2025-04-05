import React, { useRef, useState } from 'react'
import useWeatherStore from '../stores/WeatherStore';

function Search() {

    // the searched cities state
    const [searchedCities, setSearchedCities] = useState(["new york"]);

    // input state
    const [isEmpty, setIsEmpty] = useState(false)

    // creating a reference
    const inputRef = useRef("");

    // grabbing the search functionality from the zustand store
    const search = useWeatherStore((state) => state.search);

    // grabbing the set city function from the zustand store
    const setCity = useWeatherStore((state) => state.setCity);

    // grabbing the city variable from the zustand store
    const currentCity = useWeatherStore((state) => state.city);

    // grabbing data from the API
    const weatherData = useWeatherStore((state) => state.weatherData)

    // grab the data from input and search the keyword or city and clear the input
    function searchCity() {
        let city = inputRef.current.value;
        setCity(city);
        if (city === "") {
            setIsEmpty(true);
        } else {
            search(city);
            setIsEmpty(false);
            inputRef.current.value = "";
        }

        setSearchedCities(S => [...S, city]);
        if (searchedCities.length === 3) {
            setSearchedCities([city]);
        }

    };

    // refresh searched city weather
    function refreshWeather() {
        // set the city
        search(currentCity)
    }

    // function to stop the default behavior of the browser on form subnit
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="flex flex-col w-full items-center justify-center sm:max-w-[500px]">

            <div className='relative flex gap-2 w-[100%] sm:flex-row align-center justify-center'>

                <form className=' bg-white p-[4px] rounded-xl w-full flex gap-5 justify-between dark:bg-[var(--transparent-white-color)] shadow' onSubmit={handleSubmit}>
                    <input type="text" className=' p-3 text-[var(--main-color)] border-none outline-none dark:bg-[transparent] w-full' placeholder='City Name' ref={inputRef} />
                    <button className='bg-[var(--accent-color)] text-[var(--main-color)] font-medium px-[10px] py-[5px] rounded-xl' onClick={searchCity}>Search</button>
                </form>

                {/* refresh button to display if theres a city name from the API response */}
                {!weatherData.name ?
                    <></> :
                    <button className='bg-[var(--accent-color)] text-[var(--main-color)] font-medium px-[10px] py-[10px] rounded-xl hover:bg-[white] hover:text-[var(--main-color)]' onClick={refreshWeather}>Refresh</button>
                }


                {/* error message  */}
                {isEmpty ? <p className='text-red-300 mt-2 mb-2 font-bold text-md absolute top-[-40px]'>*Type the city first**</p> : <></>}

            </div>

            <div className='flex flex-col gap-3 items-center mt-[10px] w-full justify-center bg-white rounded-xl p-2 dark:bg-[var(--transparent-white-color)]'>
                <h2 className='tracking-tight text-[var(--main-color)] text-xl py-2'>Recent Searches</h2>

                <div className='flex text-[var(--main-color)] gap-2'>
                    {searchedCities.map((city, index) => <p key={index} className='shadow py-2 px-4 rounded-xl flex-grow-1 cursor-pointer hover:bg-[var(--accent-color)]' onClick={() => search(city)}>{city}</p>)}
                </div>


            </div>

        </div>

    )
}

export default Search
