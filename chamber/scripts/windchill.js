let windchill = document.querySelector(".windchill");
let temperature = document.querySelector(".tempfaren");
let windspeed = document.querySelector(".windspeed");

if (temperature <= 50 && windspeed > 3) {
    
    let chill = 35.74 + 0.6215(temperature) - 35.75(windspeed **0.16) + 
    0.4275(temperature)(windspeed ** 0.16);

    windchill.innerHTML = `${chill}`; 
} else{
    chill = "N/A";

    windchill.innerHTML = `${chill}`; 
}

