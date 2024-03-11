

var num1 = document.getElementById("first-box")
var num2 = document.getElementById("second-box")
var result = document.getElementById("result")




function addition()
{

var num1value=Number(num1.value)
var num2value=Number(num2.value)
var total= num1value + num2value
result.textContent= "Result : " + total
}

function subtraction()
{
var num1value=Number(num1.value)
var num2value=Number(num2.value)
var total= num1value - num2value
result.textContent= "Result : " + total
}


function multiply()
{
var num1value=Number(num1.value)
var num2value=Number(num2.value)
var total= num1value * num2value
result.textContent= "Result : " + total
}

function division()
{
var num1value=Number(num1.value)
var num2value=Number(num2.value)
var total= num1value / num2value
var remainder = num1value % num2value

result.textContent= "Result : Quotient :  "  + total  + "   ; Remainder :  " + remainder
}