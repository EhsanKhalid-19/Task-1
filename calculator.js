let calculation = '';

function appendNumber(num) {
    calculation += num;
    updateDisplay();
}

function appendOperator(operator) {
    calculation += operator;
    updateDisplay();
}

function clearDisplay() {
    calculation = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(calculation);
        calculation = result.toString();
        updateDisplay();
    } catch (error) {
        alert('Invalid calculation!');
        clearDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = calculation;
}