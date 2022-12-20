// FOR CLASSICO 
let arrayCasuale = []; 
console.log('FOR CLASSICO');

for (let i = 1; i <= 10; i++) {
    arrayCasuale.push(prompt("Scrivi qualcosa che ti viene in mente: parola" + i))
}
console.log(arrayCasuale);

// FOR IN
console.log('FOR IN');
for (let index in arrayCasuale) {
   console.log('elemento '+ index + ': ' + arrayCasuale[index]);
}

// FOR OF 
console.log('FOR OF');
for (var parole of arrayCasuale) {
    console.log('parola: ' + parole);
}
