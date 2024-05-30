const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ea20d49a44msh28ee3791554c220p1980fajsn73a49b5e0c2a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const updateCityWeather = (city, prefix) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            document.getElementById(prefix + '_cloud_pct').innerHTML = response.cloud_pct;
            document.getElementById(prefix + '_feels_like').innerHTML = response.feels_like;
            document.getElementById(prefix + '_humidity').innerHTML = response.humidity;
            document.getElementById(prefix + '_max_temp').innerHTML = response.max_temp;
            document.getElementById(prefix + '_min_temp').innerHTML = response.min_temp;
            document.getElementById(prefix + '_sunrise').innerHTML = response.sunrise;
            document.getElementById(prefix + '_sunset').innerHTML = response.sunset;
            document.getElementById(prefix + '_temp').innerHTML = response.temp;
            document.getElementById(prefix + '_wind_degrees').innerHTML = response.wind_degrees;
            document.getElementById(prefix + '_wind_speed').innerHTML = response.wind_speed;
        })
        .catch(err => console.error(err));
};

const updateAllCitiesWeather = () => {
    updateCityWeather('Karachi', 'karachi');
    updateCityWeather('Mirpur Khas', 'mirpur_khas');
    updateCityWeather('mirwah gorchani', 'mirwah_gorchani');
    updateCityWeather('Hyderabad', 'hydrabad');
    updateCityWeather('Delhi', 'delhi');
    updateCityWeather('London', 'londan');
    
};


const getweather = (city) => {
    document.getElementById('cityName').innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            document.getElementById('cloud_pct').innerHTML = response.cloud_pct;
            document.getElementById('temp').innerHTML = response.temp;
            document.getElementById('temp2').innerHTML = response.temp;
            document.getElementById('humidity').innerHTML = response.humidity;
            document.getElementById('humidity2').innerHTML = response.humidity;
            document.getElementById('min_temp').innerHTML = response.min_temp;
            document.getElementById('max_temp').innerHTML = response.max_temp;
            document.getElementById('wind_speed').innerHTML = response.wind_speed;
            document.getElementById('wind_speed2').innerHTML = response.wind_speed;
            document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
            document.getElementById('sunrise').innerHTML = response.sunrise;
            document.getElementById('sunset').innerHTML = response.sunset;
        })
        .catch(err => console.error(err));
};


document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    getweather(document.getElementById('city').value);
});

getweather('Karachi');
updateAllCitiesWeather();
