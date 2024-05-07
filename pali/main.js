'use strict'

const palindromeButton = document.getElementById('pulsante');




palindromeButton.addEventListener('click', function ()
{ 

    const parolaInput = prompt('inserisci una parola palindroma');
    
    if (isNaN(parolaInput)) {
        
        let re = /[\W_]/g;
        const parola = parolaInput.toLowerCase().replace(re, '');
        let lettere = parola.split('');
        let lettereInverite = lettere.reverse();
        const palindromo = lettereInverite.join('');
    

        if (parola === palindromo) {
           alert('è una frase palindroma!')
   
           console.log(parola);
           console.log(palindromo);
   
       }
       else {
           alert('NO')
   
           console.log(parola);
           console.log(palindromo);
       }
   
   
       
   }
   else {
       alert('non è una parola')
   }
});

/*
function palindrome(str) {

   let re = /[\W_]/g;
   let lowRegStr = str.toLowerCase().replace(re, '');
   let reverseStr = lowRegStr.split('').reverse().join(''); 
   return reverseStr === lowRegStr;
}
*/ 


 



 