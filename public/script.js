//Imports
import {calculatorKeys} from './calculatorKeyboard.js';
// import { trig, inverseTrig } from './trigFunctions.js';
import { search } from './search.js';
import { factorial, toThePower, squareRoot } from './specialFunction.js';
import { updateDisplayOperation, updateDisplayResult } from './updateDisplay.js';

//Select elements
const inputElement = document.querySelector('.input');

//Operational Variables
const OPERATORS = ["+", "-", "*", "/"];
let data = {
  operation: [],
  formula: []
}
let ans = 0;

// Create Calculator Keyboard
function createCalculatorKeyboard(keysPerRow) {
  let addedKeys = 0;

  calculatorKeys.forEach(key => {
    if(addedKeys % keysPerRow == 0){
      inputElement.innerHTML += `<section class="row"></section>`;
    }

    const row = document.querySelector(".row:last-child");
    row.innerHTML += `<button id="${key.name}">${key.symbol}</button>`;
    addedKeys++;
  })
}
createCalculatorKeyboard(7);

// Rad or Deg Selector
let RADIAN = true;
const radButton = document.getElementById("rad");
const degButton = document.getElementById("deg");

radButton.classList.add("active-angle");

function angleToggle() {
  radButton.classList.toggle("active-angle");
  degButton.classList.toggle("active-angle");
}

//Calculator Click Event Listener
inputElement.addEventListener('click', event => {
  const targetKey = event.target;

  calculatorKeys.forEach(button => {
    if(button.name == targetKey.id)
      calculator(button);
  })
})

//Calculator Backspace event listener
inputElement.addEventListener('keydown', event => {
  const targetKey = event.key;
  if(targetKey == "Backspace")
    calculator(button = {
      name: 'delete',
      symbol: 'Del',
      formula: false,
      type : 'key'
    });
    //More Keys to be added.
})

//Calculator
function calculator(button) {
  if(button.type == "operator"){
    data.operation.push(button.symbol);
    data.formula.push(button.formula);
  }else if(button.type == "number") {
    data.operation.push(button.symbol);
    data.formula.push(button.formula);
  }else if(button.type == "trigFunction"){
    data.operation.push(button.symbol + "(");
    data.formula.push(button.formula);
  }else if(button.type == "mathFunction") {
    let symbol, formula;
    if(button.name == "factorial"){
      symbol = "!";
      formula = button.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
      let index = search(data.formula, 'factorial(');
      let numberCopy = data.operation[index - 1];
      data.formula.pop();
      data.formula.pop();
      data.formula.push(formula);
      data.formula.push(numberCopy + ")");
    }else if(button.name == "power") {
      symbol = "^(";
      formula = button.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
      let index = search(data.formula, 'toThePower(Math.pow,');
      let numberCopy = data.operation[index - 1];
      data.formula.pop();
      data.formula.pop();
      data.formula.push(formula);
      data.formula.push(numberCopy + ",");
    } else if(button.name == "squareRoute") {
      symbol = '√';
      data.operation.push(symbol + "(");
      data.formula.push(button.formula);
    }else {
      symbol = button.symbol + "(";
      formula = button.formula + "(";
      data.operation.push(symbol);
      data.formula.push(formula);
    }
  }else if(button.type == "key") {
    if(button.name == "clearAll"){
      clearAll();
    }else if(button.name == "delete"){
      data.operation.pop();
      data.formula.pop();
    }else if(button.name == "rad"){
      RADIAN = true;
      angleToggle();
      clearAll();
    }else if(button.name == "deg"){
      RADIAN = false;
      angleToggle();
      clearAll();
    }
  }else if(button.type == "calculate") {
    let formulaString = data.formula.join('');

    console.log(formulaString);

    //Calculate
    let result;
    try {
      result = eval(formulaString);
    } catch (error) {
      if(error instanceof SyntaxError){
        result = "Equation Error!";
        updateDisplayResult(result);
        return;
      }
    }

    //Save Results for use later
    ans = result;
    data.operation = [result];
    data.formula = [result];

    updateDisplayResult(result);
    return;
  }
  updateDisplayOperation(data.operation.join(''));
}

//Trig Functions.
function trig(equation, angle) {
  if(!RADIAN){
    angle = angle * Math.PI/180;
  }
  return equation(angle);
}

function inverseTrig(equation, value) {
  let angle = equation(value);

  if(!RADIAN) {
    angle = angle * 180/Math.PI;
    Math.factorial(1);
  }
  return angle;
}

//Clear All Function .
function clearAll() {
  data.operation = [];
  data.formula = [];
  updateDisplayResult(0);
}