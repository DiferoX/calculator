function sum(num1, num2)
{
  result = num1 + num2;
  return result;
}

function rest(num1, num2)
{
  result = num1 - num2;
  return result;
}

function multiply(num1, num2)
{
  result = num1 * num2;
  return result;
}

function divide(num1, num2)
{
  result = num1 / num2;
  return result;
}

function operate(simb, num1, num2)
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

console.log(operate ("+", 5, 15));
console.log(operate ("-", 5, 15));
console.log(operate ("*", 5, 15));
console.log(operate ("/", 5, 15));



/*
let var1 = [];
let i = 0;

let b1 = document.getElementById('b1');
b1.addEventListener('click', function()
{
  var1[0] = 1;
  let joinArr = var1.join("");
  document.querySelector('.mainTxt').innerHTML = joinArr;
  i++;
});

let b2 = document.getElementById('b2');
b2.addEventListener('click', function()
{
  var1 = "2";
  document.querySelector('.mainTxt').innerHTML = var1;
});
*/