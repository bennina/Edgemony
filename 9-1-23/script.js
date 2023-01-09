

function doCalc() {

  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var operator = document.getElementById("operator").value;
  const tipoOperatore = console.log(operator);
  const sum = (firstNum, secondNum) => {
    if (operator === "+") {
      return firstNum + secondNum;
    } else if (operator === "-") {
      return firstNum - secondNum;
    } else if (operator === "*") {
      return firstNum * secondNum;
    } else if (operator === "/") {
      return firstNum / secondNum;
    }
    callback(tipoOperatore)
  };
  

  console.log('function:',sum(parseInt(num1), parseInt(num2)));
}
