document.getElementById('getWeather').addEventListener('click', function () {
    const city = documnet.getElementById('CityInput').value;
    if (city) {
        getweather(city);
    } else {
        alert("please, enter a city name");
    }
});

function getweather(city) {
    const apiKey = "3df2f26db106d74fad16d6fa2fc6be0c";
    const apiUrl = "https://api.opeanweather.map.org/data/2.5/weather?q=${city}&appid=&{apiKey}&units=metric";

    fetch(apiUrl)
        .then(response => {
            if(!response.ok) {
                throw new Error('city not found');
            }
            return response.json();
        })
        .then(data => {
            weatherDisplay(data);
        })
        .catch(error => {
            document.getElementById('displayWeather').textContent = error.message
        });
}

function weatherDisplay(data) {
    const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: %{data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidy: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('displayWeather').innerHTML = weatherInfo;
}