import './normalize.css';
import './style.css';

import githubIcon from './public/icons/github.png';

const searchButton = document.querySelector('button');
const inputText = document.querySelector('input');
const searchForm = document.querySelector('form');

// mainDiv change according data fetched from weatherApi

async function fetchWeather(city){
    const weatherFetch = await fetch(`https://api.weatherapi.com/v1/current.json?key=e749c7786a0649e3a74173239241502&q=${city}`, {mode: 'cors'})
    const weatherData = await weatherFetch.json();
    return weatherData
}

fetchWeather('bogota').then((response)=>console.log(response));

// Add image to footer
const footerLink = document.querySelector('footer a');
const githubImage = new Image();
githubImage.src = githubIcon;
footerLink.appendChild(githubImage)