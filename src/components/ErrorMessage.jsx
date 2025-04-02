import React from 'react'
import useWeatherStore from '../stores/WeatherStore'

function ErrorMessage() {

    // grabbing error data
    const errData = useWeatherStore((state) => state.errorData)

    return (
        <div className='flex items-center justify-center rounded-md py-4 px-6 text-white bg-red-500 text-[14px]'>{errData ? errData.message : "City not found"}</div>
    )
}

export default ErrorMessage
