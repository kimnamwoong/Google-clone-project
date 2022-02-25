const API_KEY = "387b241fec66d584b3b52e9e2583f4ec";


function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(URL).then(Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText = `${data.weather[0].main} ${data.main.temp}℃`;
        city.innerText = data.name;
    });
}

function onGeoError(){
    alert("I can't find weather!!!");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);