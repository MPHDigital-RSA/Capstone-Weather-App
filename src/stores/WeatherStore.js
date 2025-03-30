import { create } from "zustand";

// created a zustand weather store
const useWeatherStore = create((set) => ({
    defaultCityName: 'durban',
    humidityUnit : '%',
    windUnit : 'Km/H',
    weatherData: {},

    // function that takes the current city and return data from an api

    search : async(city) => {
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8cdba67e678df0b6b82cefffade52824`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            set({weatherData:data});
        }catch(error){
            console.error(error);
        }
    },
    
}))

export default useWeatherStore