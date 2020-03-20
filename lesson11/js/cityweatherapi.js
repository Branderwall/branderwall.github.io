let weatherapi = "824643210478c051f7bb4876cb2763ba";

let cityid = document.querySelector('meta[name="cityid"]').content;

const weatherapiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&units=imperial&appid=${weatherapi}`;

fetch(weatherapiURL)
  .then(response => response.json())
  .then(jsObject => {
    let status = jsObject.weather[0].description;
    let hightemp = jsObject.main.temp_max;
    let humidity = jsObject.main.humidity;
    let windspeed = jsObject.wind.speed;
    let windchill =
      hightemp <= 50 && windspeed > 3
        ? (
            35.74 +
            0.6215 * hightemp -
            35.75 * windspeed ** 0.16 +
            0.4275 * hightemp * windspeed ** 0.16
          ).toFixed(0)
        : "N/A";

    document.getElementById("status").textContent = status;
    document.getElementById("hightemp").textContent = hightemp;
    document.getElementById("humidity").textContent = humidity;
    document.getElementById("windspeed").textContent = windspeed;
    document.getElementById("windchill").textContent = windchill;
  });

const forecastapiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&units=imperial&appid=${weatherapi}`;

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

fetch(forecastapiURL)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);
    let forecastfive = jsObject.list.filter(forecast => {
      return forecast.dt_txt.includes("18:00:00");
    });

    forecastfive.forEach(cast => {
      let date = new Date(cast.dt_txt).getDay();
      let day = week[date];
      let desc = cast.weather[0].description;
      let imagesrc =
        "https://openweathermap.org/img/wn/" + cast.weather[0].icon + ".png";

      let temperature = cast.main.temp.toFixed(0);

      let card = document.createElement("div");
      card.setAttribute("class", "forecastitem");
      let h2 = document.createElement("h2");
      h2.textContent = day;
      let temp = document.createElement("p"); 
      temp.textContent = temperature + "°F"; 
      let status = document.createElement("p");
      status.textContent = desc;
      status.setAttribute("class", "forecaststatus");
      let icon = document.createElement("img");
      icon.setAttribute("src", imagesrc);
      icon.setAttribute("alt", desc);

      card.appendChild(h2);
      card.appendChild(icon);
      card.appendChild(temp);
      card.appendChild(status);

      document.querySelector("div#forecastlist").appendChild(card);
    });
  });
