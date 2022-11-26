//This is for Hamburguer Menu 
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open")
    document.getElementById("hamburgerBtn").classList.toggle("open")
 }
 
 const x = document.getElementById("hamburgerBtn")
 x.onclick = toggleMenu;

 //Footer Info 

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
let completeMod = `Last Updated: ${dayModif}/${monthModif + 1}/${yearModif} ${hourModif}:${minuteModif}:${secondsModif}`
document.getElementById("modified").textContent = completeMod;



// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;



// function showBanner(){
//    fecha = new Date();
  //  let actualday = fecha.getDay()

  //  if(actualday ===1){
 //       document.getElementById("banner").style.display = "";
  //  }
  //  if(actualday ===2){
 //       document.getElementById("banner").style.display = "";
 //   }
    
  //  else{
  //      document.getElementById("banner").style.display = "none";
  //  }
//}

const banner = document.querySelector('.banner');
// Actual day

const actualDay = d.getDay();
console.log(actualDay);
if (actualDay === 1 || actualDay === 2) {
  banner.classList.add('open');
  
}


const requestURL =
'https://pangloss1107.github.io/chamber/directory/scripts/data.json'
const cards = document.querySelector('.spotlights');
cards.innerHTML = '';

async function getData() {
  const request = new Request(requestURL);
  const response = await fetch(request);
  const jsonObject = await response.json();
  const allClients = jsonObject['clients'];
  const clients = allClients.filter(
    (client) =>
      client.membershiplevel === 'silver' || client.membershiplevel === 'gold'
  );
  const index = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  companies.splice(index - 1, 1);
  companies.forEach((client, index) => {
    displayClients(client, index);
  });
}

function displayClients(client, index) {
  let spotlight = document.createElement('div');
  spotlight.innerHTML = `
  <div class="spotlight${index + 1} spotlight">
    <h2>${client.name}</h2>
    <picture>
      <img width="100" height="100" src="${client.imageUrl}" alt="${
    client.name
  }">
    </picture>
    <div class="info">
      <p>${client.address}</p>
      <p>Phone: ${company.phonenumber}</p>
      <a target="_blank" href="${client.website}">${client.website}</a>
    </div>
  </div>
  `;
  cards.appendChild(spotlight);
}

const prove = getData();
