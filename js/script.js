const inputUser = prompt("inserisci una parola");

console.log("parola: " + inputUser)
// console.log(inputUser.length)

max = inputUser.length;

let userWord ="";

for (let i = inputUser.length - 1; i >= 0; i--){

    
    userWord += inputUser[i];
    
    console.log(userWord);
    
}

if(inputUser === userWord){
    alert("la parola è palindroma")
}

else{
    alert("la parola non è palindroma")
}


