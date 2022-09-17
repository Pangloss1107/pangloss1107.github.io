let monthnames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"

];

let daynames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

//To find and print the current Year
const options = {weekday:"long", day:"numeric", month: "long", year: "numeric"};
const d = new Date();
const year = d.getFullYear();
document.getElementById("year").textContent = year;


   
//To show the las updated 
let oLastModif = new Date(document.lastModified);
let dayModif = oLastModif.getDate() 
let monthModif = oLastModif.getMonth()
let yearModif = oLastModif.getFullYear() 
let hourModif = oLastModif.getHours()
let minuteModif = oLastModif.getMinutes()
let secondsModif = oLastModif.getSeconds()
let completeMod = `Last Updated: ${dayModif}/${monthModif}/${yearModif} ${hourModif}:${minuteModif}:${secondsModif}`
document.getElementById("modified").textContent = completeMod;
