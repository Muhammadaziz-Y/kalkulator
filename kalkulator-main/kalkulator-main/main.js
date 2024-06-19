// script.js
function calculate() {
    var firstNumber = parseFloat(document.getElementById('firstNumber').value);
    var operator = document.getElementById('operator').value;
    var secondNumber = parseFloat(document.getElementById('secondNumber').value);
    var result;

    switch(operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber !== 0) {
                result = firstNumber / secondNumber;
            } else {
                result = 'Nolga bo‘lish mumkin emas!';
            }
            break;
        default:
            result = 'Noto‘g‘ri amal!';
            break;
    }

    document.getElementById('result').textContent = result;
}
