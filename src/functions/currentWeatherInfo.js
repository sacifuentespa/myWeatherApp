
const farenheitSelection = document.querySelector('input[name="farenheit"]');
// mainDiv change according data fetched from weatherApi


async function fetchCurrentWeather(city) {
    const weatherFetch = await fetch(`https://api.weatherapi.com/v1/current.json?key=e749c7786a0649e3a74173239241502&q=${city}`, { mode: 'cors' });
    const weatherData = await weatherFetch.json();
    localStorage.setItem("weatherData", JSON.stringify(weatherData));
    return weatherData
}

// function to change the frontend
function changeCityFront(json) {
    // Variables for the parameters changed
    const h2City = document.querySelector('h2');
    const h3Time = document.querySelector('h3');
    const cityTemperature = document.querySelector('#weatherTemperature');
    const cityCondition = document.querySelector('#weatherCondition');
    const cityWeatherIcon = document.querySelector('#weatherIcon');
    const cityApparentTemperature = document.querySelector('#apparentTemperature');
    

    h2City.textContent = `The weather in ${json.location.name}, ${json.location.country}.`;
    h3Time.textContent = `Local time ${json.location.localtime}`
    cityWeatherIcon.src = `https://${json.current.condition.icon}`;
    cityCondition.textContent = `${json.current.condition.text}`;
    

    if(!farenheitSelection.checked){
        cityTemperature.textContent = `Temperature: ${json.current.temp_c} °C`;
        cityApparentTemperature.textContent = `Apparent temperature: ${json.current.feelslike_c} °C`
    }else{
        cityTemperature.textContent = `Temperature: ${json.current.temp_f} °F`;
        cityApparentTemperature.textContent = `Apparent temperature: ${json.current.feelslike_f} °F`
    }
}

farenheitSelection.addEventListener('change', () => {
    const currentWeatherData = JSON.parse(localStorage.getItem('weatherData'));
    console.log(currentWeatherData);
    changeCityFront(currentWeatherData);
    // Call the function to refresh the weather display with the new unit
});

function currentWeatherShow() {

    const inputText = document.querySelector('input');

    fetchCurrentWeather(inputText.value)
        .then((response) => {
            console.log(response);
            changeCityFront(response);
        })
}

export default currentWeatherShow;