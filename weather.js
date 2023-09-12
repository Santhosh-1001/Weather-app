let apiKey = '072adac2fd3ffd2f73f3df89de21cc64';
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function getWeather(city){
    let response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else{
        let data = await response.json();

        console.log(data);

        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.city-name').innerHTML = city;
        document.querySelector('.humid-percent').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind-rate').innerHTML = data.wind.speed + ' km/hr'

        if(data.weather[0].main === 'Clear'){
            weatherType.src = 'icons/clear.png'
        }
        else if(data.weather[0].main === 'Clouds'){
            weatherType.src = './icons/clouds.png'
        }
        else if(data.weather[0].main === 'Drizzle'){
            weatherType.src = 'icons/drizzle.png'
        }
        else if(data.weather[0].main === 'Mist'){
            weatherType.src = 'icons/mist.png'
        }
        else if(data.weather[0].main === 'Rain'){
            weatherType.src = 'icons/rain.png'
        }
        else if(data.weather[0].main === 'Snow'){
            weatherType.src = 'icons/snow.png'
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }

}

searchBtn = document.querySelector('.search-btn');
cityName = document.querySelector('.city-input');
weatherType = document.querySelector('.weather-img');

searchBtn.addEventListener('click',() => {
    getWeather(cityName.value);
})

cityName.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        getWeather(cityName.value);
    }
   
})

