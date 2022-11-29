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

// Spotlights
/*const requestURL = "https://pangloss1107.github.io/chamber/directory/scripts/data.json";
const cards = document.querySelector('spotlights');


async function getData() {
  const request = new Request(requestURL);
  const response = await fetch(request);
  const jsonObject = await response.json();
  const allCompanies = jsonObject['clients'];
  console.log(allCompanies)
  const companies = allCompanies.filter(
    (company) =>
      company.membership === 'Silver' || company.membership === 'Gold'
  );
  const index = Math.floor(Math.random() * (4 - 1 + 1) + 1);
  companies.splice(index - 1, 1);
  for (let i = companies.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [companies[i], companies[j]] = [companies[j], companies[i]];
  }
  companies.forEach((company, index) => {
    displayCompanies(company, index);
  });
}

function displayCompanies(company, index) {
  let spotlight = document.createElement('div');
  spotlight.innerHTML = `
  <div class="spotlight${index + 1} spotlight">
    <h2>${company.name}</h2>
    <picture>
      <source srcset="${company.imageUrl}">
      <img width="100" height="100" src="${company.imageUrl}" alt="${
    company.name
  }">
    </picture>
    <div class="info">
      <p>${company.address}</p>
      <p>Phone: ${company.phonenumber}</p>
      <a target="_blank" href="${company.website}">${company.website}</a>
    </div>
  </div>
  `;
  cards.appendChild(spotlight);
}

const prove = getData();

console.log(getData) */

const requestURL = "https://pangloss1107.github.io/chamber/directory/scripts/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const clients = jsonObject["clients"];
    
    for (let i = 0; i < 3; i++) {
        let clientsbox = document.createElement("div");      
        let p1 = document.createElement("h3");
        let portrait = document.createElement("img");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let web = document.createElement("a")

      clientsbox.setAttribute('class', 'clients');
      p1.textContent = clients[i].name;
      p1.setAttribute('class', 'par1')
      portrait.setAttribute('src', clients[i].imageUrl);
      portrait.setAttribute('alt', 'Image of ' + clients[i].name + ' company');
      portrait.setAttribute('loading', 'lazy');
      p3.textContent = clients[i].adress;
      p3.setAttribute('class', 'adressline');
      p4.textContent = `Phone number: ${clients[i].phonenumber}`;
      p4.setAttribute('class', 'pnumber')
      web.setAttribute('href', clients[i].website);
      web.textContent = clients[i].website

      clientsbox.appendChild(p1);
      clientsbox.appendChild(portrait);
      clientsbox.appendChild(p3);
      clientsbox.appendChild(p4);
      clientsbox.appendChild(web);


      document.querySelector("div.spotlights").appendChild(clientsbox);
    }
  });



  const subTime = document.querySelector("#submissionTime");
  subTime.value = new Date()