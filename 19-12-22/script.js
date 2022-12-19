// Chiedo all'utente il tipo di operazione che vuole svolgere?
let userOperator = prompt("Ciao, Che operazione vuoi fare?");
// Chiedo all'utente il di inserire il primo numero
let firstNumber = prompt("Inserisci il primo operatore");
// Chiedo all'utente il di inserire il secondo numero
let secondNumber = prompt("Inserisci il secondo operatore");

//dichiaro la variabile in cui stampare i risultati.
var result = '';

if (userOperator === '*' || userOperator === 'moltiplicazione' || userOperator === 'Moltiplicazione') {
    //Stampo la moltiplicazione
    result = "moltiplicazione:" + firstNumber +"*"+ secondNumber +' = ' + (firstNumber * secondNumber);
} else if (userOperator === '-' || userOperator === 'sottrazione' || userOperator === 'Sottrazione') {
    //Stampo la sottrazione
    result = "sottrazione: " + firstNumber +" - "+ secondNumber +' = ' + (firstNumber - secondNumber);
} else if (userOperator === '+' || userOperator === 'addizione'  || userOperator === 'Addizione') { 
    //Stampo la addizione
    result = "addizione: " + firstNumber +" + "+ secondNumber +' = ' + (firstNumber + secondNumber);
} else if (userOperator === '/' || userOperator === ':' || userOperator === 'divisione' || userOperator === 'Divisione') { 
    //Stampo la divisione
    result = "divisione: " + firstNumber +" : "+ secondNumber +' = ' + (firstNumber / secondNumber);
} else {
    alert('siamo spiacenti ma ' + userOperator + ' non è un operazione prevista');
    alert(' prova con moltiplicazione - sottrazione - addizione oppure divisione');
    window.location.reload();
}

// Ho pensato visto l'utilizzo del prompt per l'inserimento dei dati di usare l'alert per stampare l'esito
alert(result);
console.log(result);




