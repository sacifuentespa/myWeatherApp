import './normalize.css';
import './style.css';
import githubIcon from './public/icons/github.png';

import currentWeather from './functions/currentWeatherInfo';

const searchForm = document.querySelector('form.citySearch');

searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    currentWeather();
});

// Add image to footer
const footerLink = document.querySelector('footer a');
const githubImage = new Image();
githubImage.src = githubIcon;
footerLink.appendChild(githubImage)