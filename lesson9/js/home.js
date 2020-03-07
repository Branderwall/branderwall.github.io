const requestURL = "https://branderwall.github.io/lesson9/data/towndata.json";

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    const towndata = jsonObject["towns"];

    let townstuff = towndata.filter(town => {
      if (
        town.name == "Preston" ||
        town.name == "Soda Springs" ||
        town.name == "Fish Haven"
      ) {
        return town;
      }
    });

    townstuff.map(town => {
      let card = document.createElement("section");
      let desc = document.createElement("div");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let founded = document.createElement("p");
      let population = document.createElement("p");
      let rainfall = document.createElement("p");
      let image = document.createElement("img");

      card.setAttribute("class", "towncard");
      desc.setAttribute("class", "desc");
      h2.textContent = town.name;
      h3.textContent = town.motto;
      founded.textContent = "Year Founded: " + town.yearFounded;
      population.textContent = "Population: " + town.currentPopulation;
      rainfall.textContent = "Annual Rainfall: " + town.averageRainfall;
      image.setAttribute("src", "images/" + town.photo.slice(0, -4) + "-560.jpg");
      image.setAttribute("alt", "Scenic " + town.name);
      image.setAttribute("class", "towncardimg");

      desc.appendChild(h2);
      desc.appendChild(h3);
      desc.appendChild(founded);
      desc.appendChild(population);
      desc.appendChild(rainfall);
      card.appendChild(desc);
      card.appendChild(image);
      document.querySelector("div#towncards").appendChild(card);
    });
  });
