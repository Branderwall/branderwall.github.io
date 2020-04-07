let fetchRequest = "https://branderwall.github.io/final/data/riverguides.json";

fetch(fetchRequest)
  .then(function (response) {
    return response.json();
  })
  .then(function (guideObject) {
    let guides = guideObject["guides"];

    console.log("river dancing");

    guides.forEach((guide) => {
      let advitem = document.createElement("section");
      let imgframe = document.createElement("div");
      let desc = document.createElement("div");
      let img = document.createElement("img");
      let name = document.createElement("h2");
      let cert = document.createElement("p");
      let exp = document.createElement("p");
      let email = document.createElement("p");
      let bio = document.createElement("p");

      advitem.setAttribute("class", "advitem");
      imgframe.setAttribute("class", "imgframe");
      desc.setAttribute("class", "advdescription");

      img.setAttribute("src", `images/${guide.image}-500.jpg`);
      img.setAttribute("alt", guide.name);

      name.textContent = guide.name;
      cert.textContent = guide.cert;
      exp.textContent = `${guide.exp} years experience`;
      email.textContent = `Email: ${guide.email}`;
      bio.textContent = guide.bio;

      advitem.appendChild(imgframe);
      imgframe.appendChild(img);
      advitem.appendChild(desc);
      desc.appendChild(name);
      desc.appendChild(cert);
      desc.appendChild(exp);
      desc.appendChild(bio);

      document.querySelector("div#riverguides").appendChild(advitem);
    });
  });
