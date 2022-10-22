
let temperature = parseFloat(document.querySelector('.tempfaren').textContent); 
let windspeed =   parseFloat(document.querySelector('.windspeed').textContent);
document.querySelector('.windchill').textContent = windChill(temperature, windspeed);;

function windChill(temperature, windspeed) {
    if (temperature <=50 && windspeed >= 3){

        let windchill = 35.74 + 0.6215 * temperature - 35.75 * (Math.pow(windspeed, 0.16)) + 0.4275 * temperature * (Math.pow(windspeed, 0.16));
        return windchill.toFixed(1) + "°" + "F";
    } else{
        return windchill = "N/A"
    }
    
}



