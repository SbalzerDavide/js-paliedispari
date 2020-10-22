/*
Palindroma
Chiedere all'utente di inserire una parola
Creare una funzione per invertire i caratteri di una stringa.
Capire se la parola inserita è palindroma
Pari e Dispari
L'utente sceglie pari o dispari
L'utente inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto in base alla scelta pario o dispari fatta all'inizio dall'utente.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

//prima parte
//trovare se una data parola in ingesso è palindoma o meno 
var word = prompt ('Inserisci una parola').toLowerCase().trim();

var reverse = reverseWord(word);

if (word == reverse){
    console.log('la parola inserita è palindorma')
} else{
    console.log('la parola inserita NON è palindorma')
}





//funzioni

/**
 * funzione che, data una parola in ingresso, ne restituisce la stessa letta al contrario
 * @param {*} wordRev input parola da invertire
 */
function reverseWord(wordRev){
    var rev = '';
    for (var i = wordRev.length -1; i >= 0; i--){
        rev += wordRev[i];
    }
    return rev 
}




