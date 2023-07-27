// let userWord ="";


// const inputUser = prompt("inserisci una parola");



// function ciao(){
//     for (let i = inputUser.length -1; i >= 0; i--){

    
//             userWord += inputUser[i];
            
//             console.log(userWord);
            
//         }
        
//         if(inputUser === userWord){
//             alert("la parola è palindroma");
//         }
        
//         else{
//             alert("la parola non è palindroma");
//         }
//         return(userWord);
        
// }

// ciao();



const max = 5;
const min = 1;


const userChoice = prompt("inserisci paro o disparo")

const userNumber = parseInt(prompt("inserisci un numero compreso fra " + max + " e " + min))



console.log(userChoice);
console.log(userNumber);


let randomCpu = 0 ;


function randomNumber() {
let random = Math.floor(Math.random() * (5 - 1));

return random
    
}

randomNumber()

console.log("Numero CPU " + randomNumber())


