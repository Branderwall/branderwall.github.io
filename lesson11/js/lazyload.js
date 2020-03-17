let imagesToLoad = document.querySelectorAll("img[data-src]");

let loadImages = image => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

//Intersection Observer

const imgOptions = {
  threshold: 1,
  rootmargin: "0px 0px 50px 0px"
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach(item => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach(img => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach(img => {
    loadImages(img);
  });
}
