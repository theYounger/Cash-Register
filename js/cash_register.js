"use strict";

//get elements/id by simple variable
var content = document.getElementById('content');
var dot = document.getElementById('.');
var zero = document.getElementById('0');
var doubleZero = document.getElementById('00');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var divOP = document.getElementById('/');
var multOP = document.getElementById('x');
var minusOP = document.getElementById('-');
var addOP = document.getElementById('+');
var equalOP = document.getElementById('=');
var clear = document.getElementById('clear');
var getBalance = document.getElementById('get balance');
var deposit = document.getElementById('deposit cash');
var withdraw = document.getElementById('withdraw cash');

//number variables
var firstNum;
var memNum;
var operator;

//array
var numArray = [];;

//turn elements of numArray into number; print number; return number
var joinNumArray = function() {
  firstNum = Number(numArray.join(''));
  content.innerHTML = firstNum;
  return firstNum;
};

/*-------------------------------------------------------------------
-------------------------------NUMPAD--------------------------------
---------------------------------------------------------------------*/
dot.addEventListener('click', function() {numArray.push('.'); joinNumArray();} );
zero.addEventListener('click', function() {numArray.push(0); joinNumArray();} );
doubleZero.addEventListener('click', function() {numArray.push(0); numArray.push(0); joinNumArray();} );
one.addEventListener('click', function() {numArray.push(1); joinNumArray();} );
two.addEventListener('click', function() {numArray.push(2); joinNumArray();} );
three.addEventListener('click', function() {numArray.push(3); joinNumArray();} );
four.addEventListener('click', function() {numArray.push(4); joinNumArray();} );
five.addEventListener('click', function() {numArray.push(5); joinNumArray();} );
six.addEventListener('click', function() {numArray.push(6); joinNumArray();} );
seven.addEventListener('click', function() {numArray.push(7); joinNumArray();} );
eight.addEventListener('click', function() {numArray.push(8); joinNumArray();} );
nine.addEventListener('click', function() {numArray.push(9); joinNumArray();} );

/*-------------------------------------------------------------------
----------------------------OPERATORS--------------------------------
---------------------------------------------------------------------*/
divOP.addEventListener('click', function() {
  calculator.load(firstNum);
  numArray = [];
  operator = 1;
} );
multOP.addEventListener('click', function() {
  calculator.load(firstNum);
  numArray = [];
  operator = 2;
} );
minusOP.addEventListener('click', function() {
  calculator.load(firstNum);
  numArray = [];
  operator = 3;
} );
addOP.addEventListener('click', function() {
  calculator.load(firstNum);
  numArray = [];
  operator = 4;
} );
equalOP.addEventListener('click', function() {
  if(operator === 1) {
    calculator.divide(firstNum);
    content.innerHTML = calculator.getTotal();
  }
  if(operator === 2) {
    calculator.multiply(firstNum);
    content.innerHTML = calculator.getTotal();
  }
  if(operator === 3) {
    calculator.subtract(firstNum);
    content.innerHTML = calculator.getTotal();
  }
  if(operator === 4) {
    calculator.add(firstNum);
    content.innerHTML = calculator.getTotal();
  }
  numArray = [];
} );

/*-------------------------------------------------------------------
----------------------------REG BUTTONS------------------------------
---------------------------------------------------------------------*/
clear.addEventListener('click', function() {
  memNum = 0;
  calculator.saveMemory(calculator.load(memNum));
  content.innerHTML = '';
  numArray = [];
  return numArray;
} );

deposit.addEventListener('click', function() {
  memNum = calculator.recallMemory();
  memNum += firstNum;
  calculator.saveMemory(calculator.load(memNum));
  numArray = [];
} );

withdraw.addEventListener('click', function() {
  memNum = calculator.recallMemory();
  memNum -= firstNum;
  calculator.saveMemory(calculator.load(memNum));
  numArray = [];
} );

getBalance.addEventListener('click', function() {
  content.innerHTML = calculator.recallMemory();
} );