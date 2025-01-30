const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weathere-img');
const temperature = document.querySelector('.temperature');
const discription = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

 async function checkWeather(city){
    const api_key = "a0905352758ba536120bfd2e61cd7f36";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch (`${url}`).then(response =>
    response.json());
    
    temperature.innerHTML = `${Math.round (weather_data.main.temp - 273.15)}°C`;
    discription.innerHTML = `${weather_data.weather[0].discription}`;

    
    

}
searchBtn.addEventListener('click' , ()=>{
    checkWeather(inputBox.value);
});