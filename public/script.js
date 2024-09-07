// image icons object
const iconObj = {
    wind: "/img/windspeed_icon.svg",
    temp: "/img/tempreture_icon.svg",
    humidity: "/img/humidity_icon.svg"
}

// Fetching the weather data
async function getWeatherData(cityname){
    try{
        const response = await fetch(`http://localhost:10000/api/getWeatherData/${cityname}`);

        let data = await response.json()
        return await data;
    }
    catch(error){
        console.error(error);
    }
}


// getting the search button and calling the event
let searchBtn = document.querySelector(".search-icon");
searchBtn.addEventListener('click',()=>{
    let searchResult = document.querySelector(".search-result");
    let searchBox = document.querySelector(".search-box");
    let featuredCities = document.querySelector(".featured-cities");

    searchResult.style.display = "flex";
    featuredCities.style.display = "none";
    getCityWeather(searchBox.value);
})



// search by city function
async function getCityWeather(cityname) {
    let searchResult = document.querySelector(".search-result");
    let data = await getWeatherData(cityname);
    let id = await weatherId(cityname);
    let cityCard = `<div class="city-card">
                <div class="top">
                    <img src="https://openweathermap.org/img/wn/${id}@2x.png" alt="weathericon">
                </div>
                <div class="bottom">
                    <div class="upperSide">
                        <h3 class="cityName">${data.name}</h3>
                    </div>
                    <div class="downSide">
                        <div class="temp">
                            <img src="${iconObj.temp}" alt="temp">
                            <p>${getTemp(data.main.temp)} °C</p>
                        </div>
                        <div class="wind-speed">
                            <img src="${iconObj.wind}" alt="speed">
                            <p>${data.wind.speed} m/s</p>
                        </div>
                        <div class="humidity">
                            <img src="${iconObj.humidity}" alt="humidity">
                            <p>${data.main.humidity}%</p>
                    </div>
                </div>
            </div>`
    searchResult.innerHTML = cityCard;
}


// function for creating weather cards
async function cardCreation(cityname) {
    let citiesLists = document.querySelector(".cities-list");
    let data = await getWeatherData(cityname);
    let id = await weatherId(cityname);

    let cityCard = `<div class="city-card">
                <div class="top">
                    <img src="https://openweathermap.org/img/wn/${id}@2x.png" alt="weathericon">
                </div>
                <div class="bottom">
                    <div class="upperSide">
                        <h3 class="cityName">${data.name}</h3>
                    </div>
                    <div class="downSide">
                        <div class="temp">
                            <img src="${iconObj.temp}" alt="temp">
                            <p>${getTemp(data.main.temp)} °C</p>
                        </div>
                        <div class="wind-speed">
                            <img src="${iconObj.wind}" alt="speed">
                            <p>${data.wind.speed} m/s</p>
                        </div>
                        <div class="humidity">
                            <img src="${iconObj.humidity}" alt="humidity">
                            <p>${data.main.humidity}%</p>
                    </div>
                </div>
            </div>`
    citiesLists.innerHTML += cityCard;
}

// weather id handing
let weatherId = async (cityname)=>{
    let data = await getWeatherData(cityname);
    let condition = data.weather[0].main;
    if(condition === "thuderstrom"){
        return data.weather[0].icon;
    }
    else if(condition === "Dizzle"){
        return data.weather[0].icon;
    }
    else if(condition === "Rain"){
        return data.weather[0].icon;
    }
    else if(condition === "Snow"){
        return data.weather[0].icon;
    }
    else if(condition === "clear"){
        return data.weather[0].icon;
    }
    else if(condition === "Clouds"){
        return data.weather[0].icon;
    }
    else{
        return data.weather[0].icon;
    }
}

// converting tempreture from kalvin to celsius
function getTemp(kalvin){
    return Math.floor(kalvin - 273.15);
}

cardCreation("delhi");
cardCreation("maharashtra")
cardCreation("mumbai")
cardCreation("goa")
cardCreation("bangalore")
cardCreation("rajasthan")
cardCreation("uttar pradesh")
cardCreation("west bengal")