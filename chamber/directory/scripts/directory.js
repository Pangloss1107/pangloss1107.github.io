const requestURL = 'https://pangloss1107.github.io/chamber/directory/scripts/data.json'
const cards = document.querySelector('cards');

fetch(requestURL)
    .then(function (response){
        return response.json();
    })

    .then(function(jsonObject){
        const clients = jsonObject['clients'];
        clients.forEach(displayClients)
    })


function displayClients(clients){
    //create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let adress = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');


    //Change the textContent property of the h2 element to contain the companies name
    h2.textContent = clients.name;

    //Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 

    portrait.setAttribute('src', clients.image);
    portrait.setAttribute('alt', 'Image of ' + clients.name + ' company');
    portrait.setAttribute('loading', 'lazy');

    //Build the paragraph with the information
    adress.textContent = clients.adress
    phone.textContent = clients.phonenumber
    website.textContent = clients.website

    //Add the section(card) with the elements

    card.appendChild(h2);
    card.appendChild(adress);
    card.appendChild(phone);
    card.appendChild(website);

    document.querySelector('div.cards').appendChild(card);
}



   
    
    