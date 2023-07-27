 let userWord ="";


const inputUser = prompt("inserisci una parola");



 function stringReverse(){
     for (let i = inputUser.length -1; i >= 0; i--){

    
        userWord += inputUser[i];
    
        console.log(userWord);
            
         }
        
         if(inputUser === userWord){
             alert("la parola è palindroma");
         }
        
         else{
             alert("la parola non è palindroma");
         }    
 }

 stringReverse();



// const max = 5;
// const min = 1;

// const userChoice = prompt("inserisci paro o disparo")

// const userNumber = parseInt(prompt("inserisci un numero compreso fra " + max + " e " + min))


// console.log("scelta utente: " + userChoice);
// console.log("scelta numero utente: " + userNumber);


// function randomNumber() {

// let random = 0;
// random = Math.floor(Math.random() * max) + min ;
//  return random   
// }

// const random = randomNumber();

// console.log("numero CPU: " + random);

//  function result(){
     
//     let numbersResult = random + userNumber;
    
//     return numbersResult;
//  }

// numbersResult = result();

//  console.log("somma: " + numbersResult)

//  if(numbersResult % 2 == 0 && userChoice == "paro" || (numbersResult % 2 !== 0 && userChoice == "disparo")){
//     alert("l'utente ha vinto")
//  }
//     else{
//         alert("il Bot ha vinto")
//     }
 
// console.log(result())
// console.log(result())
// console.log(result())