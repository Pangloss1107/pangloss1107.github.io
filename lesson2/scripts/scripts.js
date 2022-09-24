const oLastModif = new Date(document.lastModified);
const dayModif = oLastModif.getDate(); 
const monthModif = oLastModif.getMonth(); 
const yearModif = oLastModif.getFullYear() ;
const hourModif = oLastModif.getHours();
const minuteModif = oLastModif.getMinutes();
const secondsModif = oLastModif.getSeconds();
const completeMod = `Last Updated: ${dayModif}/${monthModif + 1 }/${yearModif} ${hourModif}:${minuteModif}:${secondsModif}`;
document.getElementById("modified2").textContent = completeMod;


//To find and print the current Year
const options = {weekday:"long", day:"numeric", month: "long" + 1, year: "numeric"};
const d = new Date();
const year = d.getFullYear();
const month = d.getMonth();

document.getElementById("year2").textContent = year;