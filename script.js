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

function firstValue (n1, s)
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

/*
function probando(a)
{
  console.log(a);
}
*/

function keyboard()
{
  key = event.keyCode;

  //probando(key);

  switch(key)
  {
    // Number Key
    case 48:
      return document.calculator.answ.value += '0';
    case 49:
      return document.calculator.answ.value += '1';
    case 50:
      return document.calculator.answ.value += '2';
    case 51:
      return document.calculator.answ.value += '3';
    case 52:
      return document.calculator.answ.value += '4';
    case 53:
      return document.calculator.answ.value += '5';
    case 54:
      return document.calculator.answ.value += '6';
    case 55:
      return document.calculator.answ.value += '7';
    case 56:
      return document.calculator.answ.value += '8';
    case 57:
      return document.calculator.answ.value += '9';
    
    
    // Simbol Key
    case 107:
    case 187:
      return firstValue(document.calculator.answ.value, '+');
    case 109:
    case 189:
      return firstValue(document.calculator.answ.value, '-');
    case 106:
      return firstValue(document.calculator.answ.value, '*');
    case 191:
      return firstValue(document.calculator.answ.value, '/');
    case 190:
      return firstValue(document.calculator.answ.value, '.');

    // Equal key
    case 61:
    case 13:
      return equal(document.calculator.answ.value);

    // Reset
    case 27:  // Esc
      return reset();
    case 8:
      return document.calculator.answ.value = '';

  }
  
}

window.onkeydown = keyboard;
