import { cond } from "lodash";

const createSearchBar = () => {
    const input = document.createElement('input');
    input.type = 'search'
    input.placeholder = "Search City";

    input.name = 'search';
    input.id = 'searchCity';

    return input;

}

const createCityName = (city) => {

    const p = document.createElement('p');
    p.textContent = city;
    p.className = 'city';

    return p;
}

const createCurrTemp = (celcius) => {

    const p = document.createElement('p');
    p.textContent = celcius;
    p.className = 'current_temperature';

    return p;
}

const createCurrWeatherCondition = (condition, celcius) => {

    const temp = createCurrTemp(celcius);
    
    const weather = document.createElement('p');
    weather.textContent = condition.text;
    weather.className = 'weather_condition';

    const icon = document.createElement('img');
    icon.className = 'weather_icon';
    icon.alt = condition.text;
    icon.src = condition.icon;
    weather.append(icon);

    const container = document.createElement('container');
    container.append(temp,weather);

    return container;
}

export {createSearchBar, createCityName, createCurrWeatherCondition};