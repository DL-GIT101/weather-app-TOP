import { cond } from "lodash";

const createSearchBar = () => {
    const input = document.createElement('input');
    input.type = 'search'
    input.placeholder = "Search City";

    input.name = 'search';
    input.id = 'searchCity';

    return input;

}

const createCityName = (cityData) => {

    const p = document.createElement('p');
    p.textContent = cityData.name;
    p.className = 'city';

    return p;
}

const createCurrTemp = (celcius) => {

    const p = document.createElement('p');
    p.textContent = celcius;
    p.className = 'current_temperature';

    return p;
}

const createCurrWeatherCondition = (weatherData) => {

    const temp = createCurrTemp(weatherData.temp_c);
    
    const weather = document.createElement('p');
    weather.textContent = weatherData.condition.text;
    weather.className = 'weather_condition';

    const icon = document.createElement('img');
    icon.className = 'weather_icon';
    icon.alt = weatherData.condition.text;
    icon.src = weatherData.condition.icon;
    weather.append(icon);

    const container = document.createElement('container');
    container.append(temp,weather);

    return container;
}

const createWindCondition = (weatherData) => {
    
    const title = document.createElement('p');
    title.textContent = 'Wind';
    title.className = 'title';

    const direction = document.createElement('p');
    direction.textContent = 'Direction';
    direction.className = 'direction';

    const directionData = document.createElement('span');
    directionData.textContent = weatherData.wind_dir;
    direction.append(directionData);

    const speed = document.createElement('p');
    speed.textContent = 'Speed';
    speed.className = 'speed';

    const speedData = document.createElement('span');
    speedData.textContent = weatherData.wind_kph + ' km/h';
    speed.append(speedData);

    const container = document.createElement('container');
    container.append(title,direction,speed);

    return container;
}

export {createSearchBar, createCityName, createCurrWeatherCondition,createWindCondition};