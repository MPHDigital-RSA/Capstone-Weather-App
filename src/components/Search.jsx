import React, { useRef } from 'react'
import useWeatherStore from '../stores/WeatherStore';

function Search() {

    // creating a reference
    const inputRef = useRef("");

    // grabbing the search functionality from the zustand store
    const search = useWeatherStore((state) => state.search);

    // grab the data from input and search the keyword or city and clear the input
    function searchCity() {
        const city = inputRef.current.value;
        console.log(city)
        search(city);
        inputRef.current.value = "";
    }

    // function to stop the default behavior of the browser on form subnit
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form className='bg-white p-[5px] rounded-xl max-w-[500px] w-[100%] flex gap-5' onSubmit={handleSubmit}>
            <input type="text" className='flex-grow p-3 text-[var(--main-color)] border-none outline-nones' placeholder='Enter your city' ref={inputRef} />
            <button className='bg-[var(--accent-color)] text-[var(--main-color)] font-medium px-[20px] py-[10px] rounded-xl' onClick={searchCity}>Search</button>
        </form>
    )
}

export default Search
