// API Key: 824643210478c051f7bb4876cb2763ba


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=824643210478c051f7bb4876cb2763ba";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    document.getElementById("current-temp").textContent = jsObject.main.temp;

    let imagesrc = "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png";
    let desc = jsObject.weather[0].description;

    document.getElementById("imagesrc").textContent = imagesrc;
    document.getElementById("icon").setAttribute("src", imagesrc);
    document.getElementById("icon").setAttribute("alt", desc);

    // weather description

    // textContent imagesrc to document
    // src = id of icon
    // alt = ?


});