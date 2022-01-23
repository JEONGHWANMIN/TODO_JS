const city_name = document.querySelector("#temp span:first-child");
const city_temp = document.querySelector(".cloud");
const cloud_icon = document.querySelector(".cloudIcon");
console.log(cloud_icon);
console.log(city_temp);

function getWhether(iconId) {
    console.log(iconId);
    if (200 <= iconId && iconId <= 232 ) {
        return "11d";
    } else if(300 <= iconId && iconId <= 321) {
        console.log("1ok");
        return "09d"
    } else if(500 <= iconId && iconId <= 504) {
        return "10d"
    } else if( iconId == 511) {
        return "13d";
    } else if (520 <= iconId && iconId <= 531) {
        return "09d";
    } else if (600 <= iconId  && iconId <= 622) {
        return "13d";
    } else if (701 <= iconId  && iconId <= 781) {
        return "50d";
    } else if (iconId == 800) {
        return "01d";
    } else if (801 <= iconId && iconId <= 804) {
        return "04n";
    } 
}

const API_KEY = `fb687eb70b4436155c18e311c394608c`;

function successCallback(e) {
    console.log(e);
    const lat = e.coords.latitude;
    const lon = e.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(URL).then( response => {
        return response.json()
    }).then( myJson => {    
        console.log(myJson);
        let iconId = myJson.weather[0].id;
        console.log(iconId);
        console.log(); 
        city_name.innerText = myJson.name == "Yach’on" ? "GwangJu" : myJson.name ;
        city_temp.innerText = `${myJson.main.temp}℃ ${myJson.weather[0].main}`;
        cloud_icon.src = `https://openweathermap.org/img/wn/${getWhether(iconId)}@2x.png`;
    });
    
}

function errorCallback() {
    alert("geolocation error");
}

navigator.geolocation.getCurrentPosition( successCallback , errorCallback );