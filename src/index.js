import './style.css';
import { createSearchBar } from './dom';


const WeatherApp = () => {

    const searchBar = createSearchBar();

    const body = document.querySelector('body');
    body.append(searchBar);
}

WeatherApp();