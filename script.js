let firstNum;
let operator;
let secondNum;
let result = 0;
let step = 0;

let numArray = [];
let secondNumArray = [];

const display = document.querySelector(".display");

function getNum(num) {
    if (step === 0 || step === 1){
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
    operator = op;
    step = 2;
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
    }
}

function clearDisplay() {
    display.textContent = 0;
    firstNum = null;
    secondNum = null;
    operator = null;
    numArray = [];
    secondNumArray = [];
    result = 0;
    step = 0;
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

