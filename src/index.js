import './style.css';
import { createCityName, createCurrWeatherCondition, createOtherData, createSearchBar, createWindCondition } from './dom';
import { getWeatherData } from './weather';

const WeatherApp = async () => {
    try {
        const body = document.querySelector('body');
        const main = document.createElement("container");
        main.className = "main";
        
        body.append(main);

        const search = createSearchBar();
        
        main.append(search);        
        
    } catch (error) {
        console.error(error);
    }
}

WeatherApp();