// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function generatoreRandom (min,max){
    let numero= Math.floor(Math.random()*max + min)
    return numero
}

function disparipari(numsomma) {
    if (numsomma % 2 == 0){
        let somma = "pari";
        return somma
    }else {
        let somma = "dispari";
        return somma
    } 
}

//1 l'utente sceglie pari o dispari => un prompt con un controllo che se non mette quei due lo richiediamo
//inserisce un numero da uno a cinque => prompt parseint e il controllo con if
//l'utente inserisce un numero tra 1 e 5 = prompt con un controlle while minore o maaggiore di 1 e 5 richiedi il numero
//2 generiamo 1 numero random  da 1 a 5 con l'uso di una funzione => mat.random () con i segnaposto 
//sommiamo i due numeri che ci sono usciti dalla funzione con le rispettive variabili 

//se il risultato è pari  o dispari  con una funzioni 
//se è uguale a quello che ha scelto il giocatore vince 

let sceltaUser = prompt("scegli pari o dispari");
while (( sceltaUser != "pari") && (sceltaUser != "dispari")) {
   sceltaUser = prompt("ti ho detto di scegliere tra pari e dispari");
}
let numeroUser = parseInt(prompt("scegli un numero da 1 a 5"))
while ((numeroUser < 1) || (numeroUser > 5)){
    numeroUser = parseInt(prompt("ti ho detto di inserire un numero tra 1 e 5"))
}

let numerorandomPc= generatoreRandom(0,5)
console.log(numerorandomPc);
console.log(numeroUser);

let risultato = numeroUser + numerorandomPc
let paridispari = disparipari(risultato)


console.log(risultato, paridispari);

if(paridispari == sceltaUser){
    alert("hai vinto la somma tra il tuo numero e quello del pc risulta " + risultato + " quindi " + paridispari);
}else {
    alert("hai perso la somma tra il tuo numero e quello del pc risulta " + risultato + " quindi " + paridispari);
}





