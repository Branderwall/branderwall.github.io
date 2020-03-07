const requestURL = "https://branderwall.github.io/lesson9/data/towndata.json";

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    console.table(jsonObject);
    const towndata = jsonObject["towns"];

    let towns = towndata.map(town => {
      town.name == "Preston" || "Soda Springs" || "Fish Haven";
      return town;
    });

    towns.foreach(town => {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let founded = document.createElement("p");
      let population = document.createElement("p");
      let rainfall = document.createElement("p");
      let image = document.createElement("img");

      h2.textContent = town.name;
      h3.textContent = town.motto;
      founded.textContent = town.yearFounded;
      population.textContent = town.currentPopulation;
      rainfall.textContent = town.averageRainfall;
      image.setAttribute("src", town.photo);

      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(founded);
      card.appendChild(population);
      card.appendChild(rainfall);
      card.appendChild(image);
      document.querySelector("div.towncards").appendChild(card);
    });
  });
