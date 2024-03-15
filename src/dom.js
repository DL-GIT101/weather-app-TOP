import { getWeatherData } from "./weather";

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
    form.addEventListener('submit', async (event) => {
       try {
            event.preventDefault();

            const validatedCity = validateSearch();
            const weatherData = await getWeatherData(validatedCity);
            const main = document.querySelector('.main');

            if(main.childNodes[1]){
                main.removeChild(main.lastElementChild);
            }
            main.append(createCityWeatherDetails(weatherData));
       } catch {

       }
       
        
    })
    form.append(input,button);

    return form;
}

const createErrorPanel = (error) => {
    
}

const createCityName = (location) => {

    const p = document.createElement('p');
    p.className = 'city';
    p.textContent = location.name;

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

const createCityWeatherDetails = (currentData) => {

    const locationData = currentData.location;
    const currentWeatherData = currentData.current;
    
    const cityName = createCityName(locationData);
    const weatherCondition = createCurrWeatherCondition(currentWeatherData);
    const windCondition = createWindCondition(currentWeatherData);
    const otherDatas = createOtherData(currentWeatherData);

    const container = document.createElement('container');
    container.append(cityName,weatherCondition, windCondition, otherDatas);

    return container;
}

export {createSearchBar, createCityWeatherDetails};