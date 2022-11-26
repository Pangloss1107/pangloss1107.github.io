const requestURL = 'https://pangloss1107.github.io/chamber/directory/scripts/data.json'
const cards = document.querySelector('spotlights');

async function getData() {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonObject = await response.json();
    const allCompanies = jsonObject['clients'];
    const companies = allCompanies.filter(
      (company) =>
        company.membership === 'silver' || company.membership === 'gold'
    );
    const index = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    companies.splice(index - 1, 1);
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
        <img width="100" height="100" src="${company.imageurl}" alt="${
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
  