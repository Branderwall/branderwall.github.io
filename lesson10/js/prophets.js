const requestURL =
  "https://branderwall.github.io/lesson9/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    // console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    for (let i = 0; i < prophets.length; i++) {
      // Create HTML Elements
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let bdate = document.createElement("p");
      let bplace = document.createElement("p");
      let image = document.createElement("img");

      // Add full name

      h2.textContent = prophets[i].name + " " + prophets[i].lastname;

      // Add birth date

      bdate.textContent = "Date of Birth: " + prophets[i].birthdate;

      // Add birth place

      bplace.textContent = "Place of Birth: " + prophets[i].birthplace;

      // Add image

      image.setAttribute("src", prophets[i].imageurl);
      image.setAttribute(
        "alt",
        prophets[i].name +
          " " +
          prophets[i].lastname +
          " - " +
          prophets[i].order
      );

      // Add elements to the page

      card.appendChild(h2);
      card.appendChild(bdate);
      card.appendChild(bplace);
      card.appendChild(image);
      document.querySelector("div.cards").appendChild(card);
    }
  });
