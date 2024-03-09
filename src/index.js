import './normalize.css';
import './style.css';

import githubIcon from './public/icons/github.png';

const searchButton = document.querySelector('button');
const h2City = document.querySelector('h2');
const inputText = document.querySelector('input');
const searchForm = document.querySelector('form');

// Variables for the parameters changed 
const weatherInfoDiv = document.querySelector('.weatherInfoDiv');
const cityTemperature = document.querySelector('#weatherTemperature');
const cityCondition = document.querySelector('#weatherCondition');
const cityWeatherIcon = document.querySelector('#weatherIcon');
const cityApparentTemperature = document.querySelector('#apparentTemperature');

// mainDiv change according data fetched from weatherApi

async function fetchWeather(city){
    const weatherFetch = await fetch(`https://api.weatherapi.com/v1/current.json?key=e749c7786a0649e3a74173239241502&q=${city}`, {mode: 'cors'});
    const weatherData = await weatherFetch.json();
    return weatherData
}

// function to change the frontend

function changeCityFront (json){
    h2City.textContent = `The weather in ${json.location.name}, ${json.location.country}. Local time ${json.location.localtime}`;
    cityWeatherIcon.src = `https://${json.current.condition.icon}`;
    cityCondition.textContent = `${json.current.condition.text}`;
    cityTemperature.textContent = `Temperature: ${json.current.temp_c} C°`;
    cityApparentTemperature.textContent = `Apparent temperature: ${json.current.feelslike_c} C°`
}


// listener

searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    fetchWeather(inputText.value) // Fetch using the input value
    .then((response)=>{
        console.log(response);
        changeCityFront(response);
    })
});




// Add image to footer
const footerLink = document.querySelector('footer a');
const githubImage = new Image();
githubImage.src = githubIcon;
footerLink.appendChild(githubImage)