const requestURL = "https://branderwall.github.io/lesson9/data/towndata.json";

let cityname = document.querySelector('meta[name="cityname"]').content;

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    const towns = jsonObject["towns"];

    let localtowns = towns.filter(town => {
      if (town.name == cityname) {
        return town;
      }
    });

    let card = document.createElement("div");

    localtowns[0].events.forEach(event => {
      let p = document.createElement("p");
      p.textContent = event;
      card.appendChild(p);
    });

    document.querySelector("div#eventlist").appendChild(card);
  });
