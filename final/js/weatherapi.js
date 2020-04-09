let weatherapi = "824643210478c051f7bb4876cb2763ba";

const lat = 45.417540;
const lon = -116.317810;

const weatherapiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherapi}`;

fetch(weatherapiURL)
  .then(response => response.json())
  .then(jsObject => {
    let status = jsObject.weather[0].description;
    let feel = jsObject.main.feels_like.toFixed(0);
    let temp = jsObject.main.temp.toFixed(0);
    let humidity = jsObject.main.humidity;
    let windspeed = jsObject.wind.speed;
    let windchill =
      temp <= 50 && windspeed > 3
        ? (
            35.74 +
            0.6215 * temp -
            35.75 * windspeed ** 0.16 +
            0.4275 * temp * windspeed ** 0.16
          ).toFixed(0)
        : "N/A";

    document.getElementById("status").textContent = status;
    document.getElementById("temp").textContent = temp;
    document.getElementById("humidity").textContent = humidity;
    document.getElementById("windspeed").textContent = windspeed;
    document.getElementById("windchill").textContent = windchill;
    document.getElementById("feel").textContent = feel;
  });
