// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.
// Dare l’output relativo

//chiedo all'utente di inserire una parola
    //prompt di richiesta e salvo una variabile
//creo una funzione che mi dica se la parola e polindroma quindi booleana
//se è vera mi dice che è polindroma altrimenti normale

function palindrome(str) {
    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}



let parolaUser = prompt("inserisci una parola e ti dirò se è palindroma");

let siONo = palindrome(parolaUser);
console.log(siONo,parolaUser);

if(siONo == false){
    alert("la parola che hai inserito è normale")
}else {
    alert("la parola che hai inserito si può leggere anche al contrario")
}
