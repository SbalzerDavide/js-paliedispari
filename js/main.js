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

//referenza bottone
var generate = document.getElementById('go');

//evento generato dal click
generate.addEventListener('click', function(){
    //recupero dati da HTML
    var word = document.getElementById('input-word').value;

    //elaborazione dati
    var wordLow = word.toLowerCase();
    var reverse = reverseWord(wordLow);
    var result = '';
    if (wordLow == reverse){
        result= 'la parola inserita è palindorma';
    } else{
        result = 'la parola inserita NON è palindorma';
    }

    //ritorno valore su HTML
    var outPutResult = document.getElementById('result').innerHTML = result;
})



//seconda parte
//pari e dispari contro il computer

//var choiceUser = prompt('Scegli pari o dispari');

var startGame = document.getElementById('confirm');

startGame.addEventListener('click', function(){
    //acquisizione scelta dell'utente
    var choiceUser= document.getElementById('pari-dispari').value;
    
    //generazione numero casuale utente
    var userNumber = randomNumber(1,5);
    var userNumberOutPut = document.getElementById('user').innerHTML = userNumber;

    //generazione numero casuale computer
    var computerNumber = randomNumber(1,5);
    var computerNumberOutPut = document.getElementById('computer').innerHTML = computerNumber;
    
    //analisi vincitore
    var game = pariDispari(userNumber, computerNumber);
    
    var winner = '';
    if (choiceUser == game){
        winner = 'Complimenti: hai vinto';
    } else {
        winner = 'Ha vinto il computer';
    }

    //esportazione dati su html
    var printWinner = document.getElementById('winner').innerHTML = winner;

})

//funzioni

/**
 * Data una parola in ingresso, ne restituisce la stessa letta al contrario
 * @param {*} wordRev input parola da invertire
 */
function reverseWord(wordRev){
    var rev = '';
    for (var i = wordRev.length -1; i >= 0; i--){
        rev += wordRev[i];
    }
    return rev 
}

/**
 * Dati in ingresso il numero più basso e quello più alto, ne restituisce un numero random compreso tra i due 
 * @param {*} min numero minimo (compreso) 
 * @param {*} max numero massimo (compreso) 
 */
function randomNumber(min, max){
    var ran = Math.floor(Math.random()* (max - min +1)) + min;
    return ran;
}

/**
 * Dati due numeri in ingresso la funzione da in uscita se la somma dei due sarà pari o dispari 
 * @param {*} num1 primo numero
 * @param {*} num2 secondo numero
 */
function pariDispari(num1, num2){
    var somma = num1 + num2;
    if (somma %2 ==0 ) {
        return 'pari';
    }
    return 'dispari';
}




