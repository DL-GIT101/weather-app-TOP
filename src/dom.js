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
    weather.append(icon);

    const container = document.createElement('container');
    container.append(temp,weather);

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
    container.append(title, direction, speed);

    return container;
}

const createOtherData = (weather) => {

    const humidity = createDetails('Humidity', weather.humidity + '%');
    const realFeel = createDetails('Real Feel', weather.feelslike_c + '°C');
    const uv = createDetails('UV', weather.uv);
    const pressure = createDetails('Pressure', weather.pressure_mb + 'mbar');

    const container = document.createElement('container');
    container.append(humidity, realFeel, uv, pressure);

    return container;
}

export {createSearchBar, createCityName, createCurrWeatherCondition, createWindCondition, createOtherData};