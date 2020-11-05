// JSnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore con handlebars.
var bikes = [
  {
    nome: "trek",
    peso: 14,
  },
  {
    nome: "cannondale",
    peso: 13.5,
  },
  {
    nome: "scott",
    peso: 13,
  },
];

const weight = bikes.map( ( element,index ) => {
  const { peso } = element;
  return peso;
} );
let lowestWeight = weight[0];
weight.forEach( (element,index) => {
  if ( element < lowestWeight ) {
    lowestWeight = element;
  }
  return lowestWeight;
} );
console.log(lowestWeight);
// JSnack 2
// Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
// Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
// Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.
var names = [ "andrea","david","alessandro","riccardo" ];

let num1 = parseInt( prompt( `inserisci un numero compreso tra 1 e ${ names.length }` ) );
while ( isNaN( num1 ) || num1 < 1 || num1 > names.length ) {
  num1 = parseInt( prompt( `inserisci un numero compreso tra 1 e ${ names.length }` ) );
}
let num2 = parseInt( prompt( `inserisci un numero compreso tra ${ num1 } e ${ names.length }` ) - 1 );
while ( isNaN( num2 ) || num2 < num1 || num2 > names.length ) {
  num2 = parseInt( prompt( `inserisci un numero compreso tra ${ num1 } e ${ names.length }` ) - 1 );
}
num1 -= 1;

const selected = names.filter( (element,index) => {
  return index >= num1  && index <= num2;
} );
console.log(selected);

// JSnack 3
// Creiamo un array di oggetti (scelti da voi)
// Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
// Non dobbiamo modificare l'array iniziale.
