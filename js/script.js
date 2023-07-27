let userWord ="";


const inputUser = prompt("inserisci una parola");



function ciao(){
    for (let i = inputUser.length - 1; i >= 0; i--){

    
            userWord += inputUser[i];
            
            console.log(userWord);
            
        }
        
        if(inputUser === userWord){
            alert("la parola è palindroma");
        }
        
        else{
            alert("la parola non è palindroma");
        }
        return(userWord);
        
}

ciao();



