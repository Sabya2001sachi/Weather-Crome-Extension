
const weatherApi = {
    key:"bb36e8f55e54381a40587220521619c6",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather?"
}



const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13){
    console.log(searchInputBox.value);
    getweatherReport(searchInputBox.value);
    document.querySelector('.weather-body').style.display = "block";
    }
});


function getweatherReport(city)
{
    fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather)
{
    console.log(weather);

    let city = document.getElementById("city");
    city.innerHTML = `${weather.name}`;

    let temperature = document.getElementById("temp");
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let weatherType = document.getElementById("weather");
    weatherType.innerHTML = `${weather.weather[0].main}` ;

    icons.innerHTML = `
<div>
    <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="">
</div>
`
}