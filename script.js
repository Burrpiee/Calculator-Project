let firstNum;
let operator;
let secondNum;
let result = 0;
let step = 1;

let numArray = [];
let secondNumArray = [];

const display = document.querySelector(".display");

function negative() {
    let x;

    if (step === 1){
        x = numArray.shift();
        numArray.unshift(x);
    }
    else if (step === 2){
        x = secondNumArray.shift();
        secondNumArray.unshift()
    }
    
    if (x === undefined){
        return;
    }
    else if (x !== '-' && step === 1){
        numArray.unshift('-');
        displayAndStoreFirstNum();
    }
    else if (x === '-' && step === 1){
        numArray.shift();
        displayAndStoreFirstNum();
    }
    else if (x !== '-' && step === 2){
        secondNumArray.unshift('-');
        displayAndStoreSecondNum();

    }
    else if(x === '-' && step === 2){
        secondNumArray.shift('-');
        displayAndStoreSecondNum();
    }
}

function getNum(num) {
    if (step === 1){
        numArray.push(num);
        displayAndStoreFirstNum();
    }
    else if (step === 2){
        secondNumArray.push(num)
        displayAndStoreSecondNum();
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

function displayAndStoreFirstNum() {
    firstNum = Number(numArray.join(''));
    display.textContent = firstNum;
}

function displayAndStoreSecondNum() {
    secondNum = Number(secondNumArray.join(''));
    display.textContent = secondNum;
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

