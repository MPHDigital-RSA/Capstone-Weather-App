import React, { useRef, useState } from 'react'
import useWeatherStore from '../stores/WeatherStore';

function Search() {

    // input state
    const [isEmpty, setIsEmpty] = useState(false)

    // creating a reference
    const inputRef = useRef("");

    // grabbing the search functionality from the zustand store
    const search = useWeatherStore((state) => state.search);

    // grab the data from input and search the keyword or city and clear the input
    function searchCity() {
        let city = inputRef.current.value;

        if (city === "") {
            setIsEmpty(true)
        } else {
            search(city);
            setIsEmpty(false)
            inputRef.current.value = "";
        }
    }

    // function to stop the default behavior of the browser on form subnit
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='relative'>

            <form className='bg-white p-[5px] rounded-xl max-w-[500px] w-[100%] flex gap-5' onSubmit={handleSubmit}>
                <input type="text" className='flex-grow p-3 text-[var(--main-color)] border-none outline-none' placeholder='Enter your city' ref={inputRef} />
                <button className='bg-[var(--accent-color)] text-[var(--main-color)] font-medium px-[20px] py-[10px] rounded-xl' onClick={searchCity}>Search</button>
            </form>

            {isEmpty ? <p className='text-red-300 mt-2 mb-2 font-bold text-md absolute top-[-40px]'>*Type a city**</p> : <></>}

        </div>

    )
}

export default Search
