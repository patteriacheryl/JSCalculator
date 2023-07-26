let displayValue = '0';

function appendToDisplay(val) {
    if (displayValue === '0') {
        displayValue = val;
    } else {
        displayValue += val;
    }
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}
