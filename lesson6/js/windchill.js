let hightemp = parseFloat(document.getElementById("hightemp").textContent);
let windspeed = parseFloat(document.getElementById("windspeed").textContent);

let windchill =
  hightemp <= 50 && windspeed > 3
    ? 35.74 +
      0.6215 * hightemp -
      35.75 * windspeed ** 0.16 +
      0.4275 * hightemp * windspeed ** 0.16
    : "N/A";

    windchill = windchill.toFixed(0);

document.getElementById("windchill").textContent = windchill;
