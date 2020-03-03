const requestURL =
  "https://branderwall.github.io/lesson9/data/latter-day-prophets.json";

  console.table(["Audi", "Volvo", "Ford"]);

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    for (let i = 0; i < prophets.length; i++) {
      // Add Name
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      h2.textContent = prophets[i].name + " " + prophets[i].lastname;
      card.appendChild(h2);
      document.querySelector("div.cards").appendChild(card);

      // Add birth date

      // Add birth place

      // Add image
    }
  });

