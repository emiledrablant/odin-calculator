let firstNumber;
let secondNumber;
let operator;
let numberDisplayed = 0;

const numerals = document.querySelectorAll(".numeral");
function bindButtons() {
    numerals.forEach(element => {
        element.addEventListener("click", () => displayNumber(element.textContent));
    });
}

const screen = document.querySelector(".screen");
function displayNumber(number) {
    if (numberDisplayed === 0) {
        numberDisplayed = number;
    } else {
        numberDisplayed += number;
    }
    screen.textContent = numberDisplayed;
}

function operate(operator, first, second) {
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
    return first / second;
}

bindButtons();
displayNumber(0);