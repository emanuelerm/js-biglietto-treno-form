/* 
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/




const ageBox = document.querySelector('input[name="age"]');

const distanceBox = document.querySelector('input[name="distance"]');

const btn = document.querySelector('button');

const price = document.getElementById('ticketPrice');



btn.addEventListener('click', function () {

    let age = ageBox.value;
    let distance = distanceBox.value;
    const pricexKm = 0.21;
    const discountUnder = -0.20;
    const discountOver = -0.40;
    let priceForDistance = distance * pricexKm;

    if (age >= 18 && age <= 65) {
        ticketPrice = priceForDistance.toFixed(2);
    }


    else if (age <= 17) {
        ticketPrice = (priceForDistance * discountUnder + priceForDistance).toFixed(2);
    }


    else if (age >= 66) {
        ticketPrice = (priceForDistance * discountOver + priceForDistance).toFixed(2);
    }
    price.innerHTML = `${ticketPrice} €`;

})