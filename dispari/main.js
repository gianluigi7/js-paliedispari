'use strict'

const utenteInput = prompt('inserire un numero da 1 a 5');
let utentePariDispari = 0;

const utente = parseInt(utenteInput);
const pc = randomNumber(1, 5);
const sum = utente + pc;

function randomNumber(min,max) {
 return Math.floor(Math.random() * (max - min +1)) + min;
}

function PariDispari(num) {

    if (num % 2 === 0) return 'pari';

    return 'dispari';
}
console.log(utente);
console.log(pc);
console.log(sum);

if (!isNaN(utente)) {
    utentePariDispari = prompt('sceglire se pari o dispari');
    
     if (utentePariDispari === 'dispari' || 'pari') {


        if (utentePariDispari === PariDispari(sum)) {

            alert('hai vinto')

        }
        else {

            alert('hai perso')

        }

       




     }
     else {

        alert('non hai scritto pari o dispari')
    
     }





}

else {

    alert('non è un numero');
}


