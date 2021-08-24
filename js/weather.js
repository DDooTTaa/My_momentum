
const API_KEY = "7626ae1f64b9476b2d6175eed10a4411";

function onGeOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("I live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = `${data.name}`;
        });
}

function onGeErr() {
    alert("Can't find you")
}

navigator.geolocation.getCurrentPosition(onGeOk, onGeErr);