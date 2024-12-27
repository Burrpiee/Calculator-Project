let firstNum;
let operator;
let secondNum;
let result = 0;
let step = 1;

let numArray = [];
let secondNumArray = [];

const display = document.querySelector(".display");

function negative() {
    if (step === 1){
        
    }    
}

function getNum(num) {
    if (step === 1){
        numArray.push(num);
        step = 1;
        firstNum = Number(numArray.join(''));
        display.textContent = firstNum;
    }
    else if (step === 2){
        secondNumArray.push(num)
        secondNum = Number(secondNumArray.join(''));
        display.textContent = secondNum;
    }
}

function getOp(op) {
    if (step === 1){
        operator = op;
        step = 2;
    }
    else if (step === 2){
        operate();
        firstNum = result;
        numArray = [];
        secondNumArray = [];
    }
}

function operate() {
    switch (operator){
        case '+':
            result = add(firstNum, secondNum);
            display.textContent = result;
            break;
        case '-':
            result = subtract(firstNum, secondNum);
            display.textContent = result;
            break;
        case '*':
            result = multiply(firstNum, secondNum);
            display.textContent = result;
            break;
        case '/':
            result = divide(firstNum, secondNum);
            display.textContent = result;
            break;
        case '%':
            result = remainder(firstNum, secondNum);
            display.textContent = result;
    }
}

function clearMemory() {
    firstNum = null;
    secondNum = null;
    operator = null;
    numArray = [];
    secondNumArray = [];
    result = 0;
    step = 1;
}

function clearDisplay() {
    display.textContent = 0;
    clearMemory();
}


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function remainder(num1, num2) {
    return num1 % num2;
}

function equal() {
    operate();
    clearMemory();
}

