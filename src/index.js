import './style.css';
import { CreateErrorPanel, createCityWeatherDetails, createSearchBar } from './dom';
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
                main.append(CreateErrorPanel(error.message));
            }

        });
        
        main.append(search);        
        
    } catch (error) {
        console.error(error);
    }
}

WeatherApp();