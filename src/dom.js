const createSearchBar = () => {
    const input = document.createElement('input');
    input.type = 'search'
    input.placeholder = "Search City";

    input.name = 'search';
    input.id = 'searchCity';

    return input;

}

const createLocationLabel = (location) => {

    const label = document.createElement('p');
    label.textContent = location;
    label.className = 'city';

    return label;
}

export {createSearchBar, createLocationLabel};