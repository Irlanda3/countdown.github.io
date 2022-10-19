// Countdown to christmas
const contador = setInterval( function() {
        const christmasday = "25 December 2022";
        const christmasdayDate = new Date(christmasday);
        const currentDate = new Date();

        // A difference if 2 dates in miliseconds
        const daysToChristmas = christmasdayDate - currentDate;

        // Goal convert miliseconds to days because our answers is in miliseconds
        const sec = daysToChristmas / 1000;
        console.log("seconds: ", sec);
        const min = sec / 60;
        console.log("minutes: ", min);
        const hrs = min / 60;
        console.log("hrs: ", hrs);
        const days = hrs / 24;
        console.log("days: ", days);

        // Goal: now that we know the days, get hrs, min and sec
        const decimalDays = days - Math.trunc(days);
        console.log("decimal Days: ", decimalDays); // We get the decimal part
        const intDays = Math.floor(days);
        console.log("Integet days: ", intDays);

        // Decimal Days => hrs 
        const decimalHrs = decimalDays * 24;//0.5523569560185138 -
        console.log("decimalHrs: ",decimalHrs);
        const intHrs = Math.floor(decimalHrs);
        console.log("integer hrs: ", intHrs);

        // Hrs => min
        const decimalMins = (decimalHrs - Math.trunc(decimalHrs)) * 60;
        console.log("que es esto  pues minutos ",decimalMins);
        const intMins = Math.floor(decimalMins);
        console.log(intMins);

        //Min => sec
        const decimalSec = (decimalMins - Math.trunc(decimalMins)) * 60;
        console.log(decimalSec);
        const intSecs = Math.floor(decimalSec);
        console.log(intSecs);


    const dias = document.getElementById('days');
    const horas = document.getElementById('hours'); 
    const minutos = document.getElementById('mins');
    const segundos = document.getElementById('seconds');

    dias.innerHTML = intDays;
    horas.innerHTML= intHrs;
    minutos.innerHTML = intMins;
    segundos.innerHTML = intSecs;

}, 1000); // the 1000 is to update the info every second

contador();
