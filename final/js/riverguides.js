let fetchRequest = "https://branderwall.github.io/final/data/riverguides.json";


let mediumWidth = "560px";

fetch(fetchRequest)
  .then(function (response) {
    return response.json();
  })
  .then(function (guideObject) {
    let guides = guideObject["guides"];

    guides.forEach((guide) => {
      let advitem = document.createElement("section");
      let imgframe = document.createElement("div");
      let desc = document.createElement("div");
      let pic = document.createElement("picture");
      let source = document.createElement("source");
      let img = document.createElement("img");
      let name = document.createElement("h2");
      let cert = document.createElement("p");
      let exp = document.createElement("p");
      let email = document.createElement("p");
      let bio = document.createElement("p");

      advitem.setAttribute("class", "advitem");
      imgframe.setAttribute("class", "imgframe");
      desc.setAttribute("class", "advdescription");

      source.setAttribute("media", `(max-width: ${mediumWidth}`);
      source.setAttribute("srcset", `images/${guide.image}-500.jpg`);
      img.setAttribute("src", `images/${guide.image}-300.jpg`);
      img.setAttribute("alt", guide.name);

      name.textContent = guide.name;
      cert.textContent = guide.cert;
      exp.textContent = `${guide.exp} years experience`;
      email.textContent = `Email: ${guide.email}`;
      bio.textContent = guide.bio;

      advitem.appendChild(imgframe);
      imgframe.appendChild(pic);
      pic.appendChild(source);
      pic.appendChild(img);
      advitem.appendChild(desc);
      desc.appendChild(name);
      desc.appendChild(cert);
      desc.appendChild(exp);
      desc.appendChild(bio);

      document.querySelector("div#riverguides").appendChild(advitem);
    });
  });
