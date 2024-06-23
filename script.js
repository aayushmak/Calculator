const display = document.querySelector('.display');
let currentNumber = '';
let previousNumber = '';
let operator = '';
let isDecimal = false; // Flag to track decimal usage

function appendNumber(number) {
    if (number === '.' && isDecimal) return; // Prevent multiple decimals
    currentNumber += number;
    isDecimal = number === '.'; // Update decimal flag
    display.textContent = currentNumber;
}

function appendOperator(op) {
    if (currentNumber === '') return;
    calculate(); // Always calculate before changing operator
    previousNumber = currentNumber;
    currentNumber = '';
    operator = op;
    isDecimal = false; // Reset decimal flag for next number
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    isDecimal = false;
    display.textContent = '';
}

function calculate() {
    if (currentNumber === '' || operator === '') return;

    let result;
    const prevNum = parseFloat(previousNumber);
    const currNum = parseFloat(currentNumber);

    switch (operator) {
        case '+':
            result = prevNum + currNum;
            break;
        case '-':
            result = prevNum - currNum;
            break;
        case '*':
            result = prevNum * currNum;
            break;
        case '/':
            if (currNum === 0) {
                alert("Error: Division by zero!");
                return;
            }
            result = prevNum / currNum;
            break;
        default:
            return; // Invalid operator
    }

    // Handle overflow (large numbers)
    if (result.toString().length > 12) {
        alert("Error: Calculation result exceeds display capacity!");
        return;
    }

    currentNumber = result.toString();
    previousNumber = '';
    operator = '';
    display.textContent = currentNumber;
    isDecimal = false; // Reset decimal flag for next number
}
