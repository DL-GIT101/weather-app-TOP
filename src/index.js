import './style.css';
import { createCityName, createCurrWeatherCondition, createSearchBar } from './dom';
import { getWeatherData } from './weather';

const WeatherApp = async () => {
    try {
        const body = document.querySelector('body');
        const main = document.createElement("container");
        main.className = "main";
        
        body.append(main);
        
        const weaterData = await getWeatherData("Mabiga");
        const locationData = weaterData.location;
        const currentWeatherData = weaterData.current;
        
        const cityName = createCityName(locationData);

        const weatherCondition = createCurrWeatherCondition(currentWeatherData);

        main.append(cityName,weatherCondition);        
        
    } catch (error) {
        console.error(error);
    }
}

WeatherApp();