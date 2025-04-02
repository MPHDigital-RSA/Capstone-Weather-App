import { create } from "zustand";

// created a zustand weather store
const useWeatherStore = create((set) => ({
    isLoading: false,
    weatherData: {},
    city: "new york",
    setCity : (text) => {
        set({city : text})
    },
    errorState:false,
    errorData:null,

    // function that takes the current city and return data from an api

    search : async(city) => {
        set({isLoading:true})
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8cdba67e678df0b6b82cefffade52824`;
            const response = await fetch(url);
            const data = await response.json();
            set({weatherData:data});
        }catch(error){
            set({errorState: true});
            set({errorData: error});
            alert(error.message)
        }finally{
            set({isLoading:false});
            set({errorState: false});
        }
    },
    
}))

export default useWeatherStore