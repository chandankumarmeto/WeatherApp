const inputBox = document.querySelector(`.input-box`);
const searchBtn = document.getElementById(`searchBtn`);
const weather_img = document.querySelector(`.weather-img`);
const temprature = document.querySelector(`.temprature`);
const discription = document.querySelector(`.discription`);
const humidity = document.getElementById(`humidity`);
const wind_speed = document.getElementById(`wind-speed`);
const location_not_found = document.querySelector(`.location-not-found`);
const weather_body = document.querySelector(`.weather-body`);
const location_name = document.querySelector(`.location`);



async function checkWeather(city){
    const api_key  = "7c96ae6db143fc212b4c4a06f04e192e"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch(`${url}`).then(response => response.json());

    

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }
    else if(weather_data.cod ===`400`){
        location_not_found.style.display = "none";
        weather_body.style.display = "none";
        alert("Please enter city");
        return; 
        
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temprature.innerHTML = `${Math.round(weather_data.main.temp-273.05)}°C`;
    humidity.innerHTML = `${weather_data.main.humidity}`;
    discription.innerHTML = `${weather_data.weather[0].description}`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    location_name.innerHTML = `${weather_data.name}`;

    switch(weather_data.weather[0].main){
        case 'Clouds' :
            weather_img.src = "/assets/cloud.png";
            break;
        case 'Clear' :
            weather_img.src = "/assets/clear.png";
            break;
        case 'Mist' :
            weather_img.src = "/assets/mist.png";
            break;
        case 'Rain' :
            weather_img.src = "/assets/rain.png";
            break;
        case 'Snow' :
            weather_img.src = "/assets/snow.png";
            break;
        case 'Haze' :
            weather_img.src = "/assets/haze.png";
            break;
        case 'Thunderstrom' :
            weather_img.src = "/assets/thunderstrom.png";
            break;
    }
    
}
searchBtn.addEventListener(`click`, ()=>{
    checkWeather(inputBox.value)
});
