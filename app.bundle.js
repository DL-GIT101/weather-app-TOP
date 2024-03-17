/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/dom.js
const createSearchBar = () => {

    const input = document.createElement('input');
    input.type = 'search'
    input.placeholder = "Search City";
    input.name = 'search';
    input.id = 'searchCity';

    const button = document.createElement('button');
    button.className = "submit";
    button.id = "submit";
    button.textContent = "Search";
    button.setAttribute("type", "submit");

    const form = document.createElement('form');
    form.addEventListener('submit', (event) => event.preventDefault());
    form.append(input,button);

    return form;
}

const createCityName = (location) => {

    const name = document.createElement('p');
    name.className = 'name';
    name.textContent = location.name + ', ' + location.region + ', ' + location.country;

    const container = document.createElement('container');
    container.className = 'city';
    container.append(name);

    return container;
}

const createCurrWeatherCondition = (weatherData) => {

    const temp = document.createElement('p');
    temp.textContent = weatherData.temp_c + '°C';
    temp.className = 'current_temperature';
    
    const weather = document.createElement('p');
    weather.textContent = weatherData.condition.text;
    weather.className = 'weather_condition';

    const icon = document.createElement('img');
    icon.className = 'weather_icon';
    icon.alt = weatherData.condition.text;
    icon.src = weatherData.condition.icon;

    const container = document.createElement('container');
    container.className = 'weather';
    container.append(temp,icon,weather);

    return container;
}

const createDetails = (title,data) => {

    const label = document.createElement('p');
    label.textContent = title;
    label.className = title.toLowerCase().replaceAll(' ', '');

    const dataSpan = document.createElement('span');
    dataSpan.textContent = data;
    label.append(dataSpan);

    return label;
}

const createWindCondition = (weatherData) => {
    
    const title = document.createElement('p');
    title.textContent = 'Wind';
    title.className = 'title';

    const direction = createDetails('Direction', weatherData.wind_dir);

    const speed = createDetails('Speed', weatherData.wind_kph + ' km/h')

    const container = document.createElement('container');
    container.className = 'wind';
    container.append(title, direction, speed);

    return container;
}

const createOtherData = (weather) => {

    const humidity = createDetails('Humidity', weather.humidity + '%');
    const realFeel = createDetails('Real Feel', weather.feelslike_c + '°C');
    const uv = createDetails('UV', weather.uv);
    const pressure = createDetails('Pressure', weather.pressure_mb + 'mbar');

    const container = document.createElement('container');
    container.className = 'other';
    container.append(humidity, realFeel, uv, pressure);

    return container;
}

const createCityWeatherDetails = (currentData) => {

    const locationData = currentData.location;
    const currentWeatherData = currentData.current;
    
    const cityName = createCityName(locationData);
    const weatherCondition = createCurrWeatherCondition(currentWeatherData);
    const windCondition = createWindCondition(currentWeatherData);
    const otherDatas = createOtherData(currentWeatherData);

    const container = document.createElement('container');
    container.className = 'details';
    container.append(cityName,weatherCondition, windCondition, otherDatas);

    return container;
}

const createErrorPanel = (error) => {

    const message = document.createElement('p');
    message.id = 'errorMessage';
    message.textContent = error;

    const container = document.createElement('container');
    container.className = 'details';
    container.append(message);

    return container;
}

const createLoadingPanel = () => {

    const message = document.createElement('p');
    message.id = 'loading';
    message.textContent = 'Loading...';

    const container = document.createElement('container');
    container.className = 'details';
    container.append(message);

    return container;
}


;// CONCATENATED MODULE: ./src/weather.js
const key = "f5840725eb044d0c9cc104359241303";

const getWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`, {mode: 'cors'});
        const data = await response.json();

        if(data.hasOwnProperty('error')){
            throw new Error(data.error.message);
        }else{
            return data;
        }
    } catch (error) {
        throw new Error('Failed to fetch weather data: ' + error.message);
    }
}


;// CONCATENATED MODULE: ./src/index.js




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
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map