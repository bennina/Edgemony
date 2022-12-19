// Chiedo all'utente il tipo di operazione che vuole svolgere?
let userOperator = prompt("Ciao, Che operazione vuoi fare?");
// Chiedo all'utente il di inserire il primo numero
let firstNumber = prompt("Inserisci il primo operatore");
// Chiedo all'utente il di inserire il secondo numero
let secondNumber = prompt("Inserisci il secondo operatore");

var result = '';

if (userOperator === '*' || userOperator === 'moltiplicazione') {
    result = "moltiplicazione: " + (firstNumber * secondNumber);
} else if (userOperator === '-' || userOperator === 'sottrazione') {
    result = "sottrazione: " + (firstNumber - secondNumber);
} else if (userOperator === '+' || userOperator === 'addizione') { 
    result = "addizione: " + (firstNumber + secondNumber);
} else if (userOperator === '/' || userOperator === ':' || userOperator === 'divisione') { 
    result = "divisione: " + (firstNumber / secondNumber);
} else {
    alert('siamo spiacenti ma ' + userOperator + ' non è un operazione prevista');
    alert(' prova con moltiplicazione - sottrazione - addizione oppure divisione');
    window.location.reload();
}
alert(result);
console.log(result);




