import './style.css';
import { createErrorPanel, createCityWeatherDetails, createSearchBar, createLoadingPanel } from './dom';
import { getWeatherData } from './weather';

const WeatherApp = async () => {
    try {
        const body = document.querySelector('body');
        const main = document.createElement("container");
        main.className = "main";
        
        body.append(main);

        const search = createSearchBar();
        search.addEventListener('submit', async () => {
            try {
                if(main.childNodes[1]){
                    main.removeChild(main.childNodes[1]);
                }
                main.append(createLoadingPanel());
                const city = document.querySelector('#searchCity').value;
                const weather = await getWeatherData(city);

                if(main.childNodes[1]){
                    main.removeChild(main.childNodes[1]);
                }
                main.append(createCityWeatherDetails(weather));
    
            } catch(error){
                if(main.childNodes[1]){
                    main.removeChild(main.childNodes[1]);
                }

                let message = error.message;
                
                if(message === 'Failed to fetch weather data: Parameter q is missing.'){
                    message = 'Failed to fetch weather data: Search bar is empty';
                }
                main.append(createErrorPanel(message));
            }

        });
        
        main.append(search);        
        
    } catch (error) {
        console.error(error);
    }
}

WeatherApp();