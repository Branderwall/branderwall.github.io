let now = new Date();
let currentDay = now.getDay();

if( currentDay !== 3) {
    document.getElementsByClassName("promo")[0].classList.add("hidden");
}