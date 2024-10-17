let firstNumber = '';
let secondNumber = '';
let currentOperation = null;
let shouldResetScreen = false;

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const mult = document.querySelector(".mult");
const divi = document.querySelector(".divi");

const equal = document.querySelector(".equal");
equal.addEventListener("click", evaluate);

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearMemory);

const numerals = document.querySelectorAll(".numeral");
const operators = document .querySelectorAll(".operator");
function bindButtons() {
    numerals.forEach(element => {
        element.addEventListener("click", () => appendNumber(element.textContent));
    });
    operators.forEach(element => {
        element.addEventListener("click", () => setOperation(element.textContent));
    });
}

function setOperation(operator) {
    if (currentOperation !== null) {
        evaluate();
    }
    firstNumber = screen.textContent;
    currentOperation = operator;
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) {
        return;
    }
    secondNumber = screen.textContent;
    screen.textContent = operate(currentOperation, firstNumber, secondNumber);
    currentOperation = null;
}

const screen = document.querySelector(".screen");
function appendNumber(number) {
    if (screen.textContent === "0" || shouldResetScreen) {
        resetScreen();
    }
    screen.textContent += number;
}
function resetScreen() {
    screen.textContent = "";
    shouldResetScreen = false;
}

function clearMemory() {
    screen.textContent = "0";
    shouldResetScreen = false;
    firstNumber = '';
    secondNumber = '';
    currentOperation = null;
}

function operate(operator, first, second) {
    first = Number(first);
    second = Number(second);

    switch (operator) {
        case "+":
            return add(first, second);
        case "-":
            return subtract(first, second);
        case "*":
            return multiply(first, second);
        case "/":
            return divide(first, second);
    }
}

function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    if (second === 0) {
        return 0;
    } else {
        return first / second;
    }
}

bindButtons();