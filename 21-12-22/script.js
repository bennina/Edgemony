// ESERCIZIO UNO
var string = " io sono una stringa ";
function bootcamp(word) {
  var result = word + "bootcamp";
  console.log(result);
}
bootcamp(string);

// ESERCIZIO DUE
var spari = "pum! pum!";
function hobby() {
  console.log("Io che gioco a COD!");

  for (let i = 0; i < 10; i++) {
    console.log(spari);
  }
}

const io = {
  nome: "red", // proprietà
  cognome: "Ferrari", // proprietà
  eta: true, // proprietà
  professione: 3, // proprietà
  // metodo (ovvero una funzione ma sita all'interno di un oggetto)
  run: hobby(),
};


// Avanzato esercizio A e B
function calculator(a, b, operatore) {
  if (operatore === "+") {
    console.log(a + b);
  } else if (operatore === "-") {
    console.log(a - b);
  } else if (operatore === "*") {
    console.log(a * b);
  } else if (operatore === "/") {
    console.log(a / b);
  }
}

function doCalc() {
    // Avanzato esercizio A
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operator = document.getElementById("operator").value;

    calculator(parseInt(num1), parseInt(num2), operator);
    
    // Avanzato esercizio B
    var esercizio = {
        num1 : document.getElementById("num1").value,
        num2 : document.getElementById("num2").value,
        operator : document.getElementById("operator").value
    };

    calculator(parseInt(esercizio[num1]), parseInt(esercizio[num2]), esercizio[operator]);
}



