// let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ]

// let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ]

// let currentDate = new Date();
// let dayName = days[currentDate.getDay()];
// let monthName = months[currentDate.getMonth()];
// let dayNum = currentDate.getDate();
// let yearNum = currentDate.getFullYear();

// let fullDate = dayName + ", " + monthName + " " + dayNum + ", " + yearNum;

// let lastUpdate = document.lastModified;

document.getElementById("lastupdated").textContent = document.lastModified;