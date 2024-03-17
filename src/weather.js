const key = process.env.WEATHER_API_KEY;

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

export {getWeatherData};