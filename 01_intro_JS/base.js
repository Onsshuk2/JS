//1
let number = +prompt("Enter number: ")
function Power(a)
{
 
    return a*a;
}
alert("Power = " + Power(number))

//2
let numA = +prompt("Enter your number A : ");
let numB = +prompt("Enter your number B : ");
function Average(num1,num2)
{
 
    return (num1+num2)/2;
}
alert("Average = " + Average(numA, numB))

//3
let num = +prompt("Enter side of the square: ")
function Area(d)
{
 
    return d*d;
}
alert("Area of the square = " + Area(num))

//4
let numberK = +prompt("Enter number: ")
function Converter(k)
{
 
    return k * 0.621371;
}
alert("Converter = " + Converter(numberK))

//5
let numberA = +prompt("Enter your number A : ");
let numberB = +prompt("Enter your number B : ");
function Sum(numm1,numm2)
{
 return numm1+numm2;
}
function Subtraction(numm1,numm2)
{
 return numm1-numm2;
}
function Multiplication(numm1,numm2)
{
 return numm1*numm2;
}
function Division(numm1,numm2)
{
 return numm1/numm2;
}
alert("Subtraction = " + Subtraction(numberA,numberB))
alert("Sum = " + Sum(numberA,numberB))
alert("Multiplication = " + Multiplication(numberA,numberB))
alert("Division = " + Division(numberA,numberB))

//6
let number1A = +prompt("Enter your number A : ");
let number1B = +prompt("Enter your number B : ");
function Mathematical_equation(n1,n2)
{
 return -(n1/n2);
}
alert("x = " + Mathematical_equation(number1A,number1B))

//7
let currentHours=+prompt("What hour: ")
let currentMinutes=+prompt("What minute: ")
let minutesInDay = 24 * 60; 
let passedMinutes = currentHours * 60 + currentMinutes; 
let remainingMinutes = minutesInDay - passedMinutes;

let hoursLeft = remainingMinutes / 60 ; 
let minutesLeft = remainingMinutes % 60; 

//здається, щось з годинами не те
alert(`Hour: ${hoursLeft}, Minute: ${minutesLeft}.`)

//8
let digit_3 = +prompt("Enter 3 digit number: ")

let second = (digit_3 % 100) / 10 |0
alert(`Second digit: ${second}`)

//9
let numberDigit = +prompt("Enter 5 digit number: ");

let lastDigit = numberDigit % 10; 
let remainingDigits = (numberDigit - lastDigit) / 10; 
let result = +(lastDigit + '' + remainingDigits); 


alert(`Result: ${result}`);

//10
let totalSales = +prompt("Enter the total sales for the month:");
let baseSalary = 250;
let bonus = totalSales * 0.1;
let totalSalary = baseSalary + bonus;

alert(`The total salary is: $${totalSalary}`);