import './style.css';
import { createSearchBar } from './dom';
import { getWeatherData } from './weather';

const WeatherApp = async () => {
    try {
        const searchBar = createSearchBar();

        const body = document.querySelector('body');
        body.append(searchBar);
    
        const city = 'camiling';
    
        const weatherData = await getWeatherData(city);
    
        console.log(weatherData);
    } catch (error) {
        console.error(error);
    }
}

WeatherApp();