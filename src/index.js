import './style.css';
import { createSearchBar } from './dom';
import { getWeatherData } from './weather';

const WeatherApp = async () => {
    try {
        const body = document.querySelector('body');
        const main = document.createElement("container");
        main.className = "main";
        
        body.append(main);
    
        
    } catch (error) {
        console.error(error);
    }
}

WeatherApp();