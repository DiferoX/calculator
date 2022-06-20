let firstNum = 0;
let secondNum = 0;
let simbol = "";
let total = 0;



function sum(num1, num2)
{
  return (num1 + num2);
}

function rest(num1, num2)
{
  return (num1 - num2);
}

function multiply(num1, num2)
{
  return (num1 * num2);
}

function divide(num1, num2)
{
  return (num1 / num2);
}

function operate(num1, num2, simb)
{
  switch(simb)
  {
    case "+":
    return sum(num1, num2);

    case "-":
    return rest(num1, num2);

    case "*":
    return multiply(num1, num2);

    case "/":
    return divide(num1, num2);
  }
}

function prueba (n1, s)
{
  firstNum = Number(n1);
  simbol = s;
  document.calculator.show.value = firstNum + " " + simbol;
  document.calculator.answ.value = "";
}

function equal(n2)
{
  secondNum = Number(n2);
  total = operate(firstNum, secondNum, simbol);
  document.calculator.answ.value = total;
  document.calculator.show.value = firstNum + " " + simbol + " " + secondNum + " = ";
}

function reset()
{
  firstNum = 0;
  secondNum = 0;
  simbol = "";
  total = 0;
  document.calculator.answ.value = "";
  document.calculator.show.value = "";
}
