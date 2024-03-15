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

const createWindCondition = (speedKP,degree,) => {

}

export {createSearchBar, createCityName, createCurrWeatherCondition};