import React from 'react'

function Search() {
    return (
        <form className='bg-white p-[5px] rounded-xl max-w-[500px] w-[100%] flex gap-5'>
            <input type="text" className='flex-grow p-3 text-[var(--main-color)] border-none outline-nones' placeholder='Enter your city' />
            <button className='bg-[var(--accent-color)] text-[var(--main-color)] font-medium px-[20px] py-[10px] rounded-xl'>Search</button>
        </form>
    )
}

export default Search
