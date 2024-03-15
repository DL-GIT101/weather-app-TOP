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

export {createSearchBar, createCityName,createCurrTemp};