let currentDate = new Date();
let yearNum = currentDate.getFullYear();

document.getElementById("currentyear").textContent = yearNum;
document.getElementById("lastupdated").textContent = document.lastModified;