const API_KEY = "fc429eb093ad572f27c439226d0ee864";
const COORD = "coord";

async function getWeather({ latitude, longitude }) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lang=kr&lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    const result = await fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return {
                city: data.name,
                temp: data.main.temp,
                weather: data.weather[0],
            };
        });

    return result;
}

function getWeatherIconUrl(icon) {
    const url = `https://openweathermap.org/img/w/${icon}.png`;

    return url;
}

async function getGeometric() {
    let coord = JSON.parse(localStorage.getItem(COORD));

    const onGeoOk = async (position) => {
        const {
            coords: { latitude, longitude },
        } = position;

        coord = {
            latitude,
            longitude,
        };

        localStorage.setItem(COORD, JSON.stringify(coord));
        const weather = await getWeather(coord);
        setWeather(weather);
    };

    const onGeoError = () => {
        coord = null;
    };

    if (!coord) {
        navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    }

    return coord;
}

function setWeather({ city, temp, weather }) {
    const domCity = document.querySelector(".city");
    const domTemp = document.querySelector(".temp");
    const weatherInfo = document.querySelector(".weatherInfo");
    const icon = document.createElement("img");
    const info = document.createElement("span");

    icon.src = getWeatherIconUrl(weather.icon);
    info.innerText = weather.description;

    domCity.innerText = city;
    domTemp.innerHTML = `${temp.toFixed(1)}&nbsp;℃`;

    weatherInfo.appendChild(icon);
    weatherInfo.appendChild(info);
}

async function init() {
    const coord = await getGeometric();

    if (coord) {
        const weather = await getWeather(coord);
        setWeather(weather);
    }
}

init();
