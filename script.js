const calcMath = document.getElementById('calc__math');
const calcResult = document.getElementById('calc__result');
const calcBtns = document.getElementById('calc__btns');

let firstNum = "";
let secondNum = "";
let operation = "";
let dot = "";

calcBtns.addEventListener('click', function(e) { 
    const button = e.target;
    const buttonValue = button.textContent;

    if (buttonValue === 'C') {
        firstNum = "";
        secondNum = "";
        operation = "";
        dot = "";
        calcMath.textContent = "";
        calcResult.textContent = "0";
    } else if (button.classList.contains('number')) {
        if (operation.length > 0) {
            secondNum += buttonValue;
        } else {
            firstNum += buttonValue;
        }
    } else if (button.classList.contains('operation') && firstNum > 0) {
        operation = buttonValue;
        dot = '';
    } else if (buttonValue === '.') {
        if (secondNum.length == 0 && dot.length == 0) {
            firstNum = String(firstNum);
            firstNum += buttonValue;
            dot = '.';
        } else if (operation.length > 0 && dot.length == 0) {
            secondNum = String(secondNum);
            secondNum += buttonValue;
            dot = '.';
        }
    }

    
    if (button.classList.contains('operation') && operation.length > 0 && secondNum.length == 0) {
        operation = buttonValue;
        secondNum = '';
    }

    if (button.classList.contains('operation') && operation.length > 0 && secondNum.length > 0) {
        firstNum = calcResult.textContent;
        operation = buttonValue;
        secondNum = '';
    }
    if (operation.length > 0 && secondNum.length > 0) {
        mathLine(firstNum, secondNum, operation);
    } 
    
    calcMath.textContent = `${firstNum} ${operation} ${secondNum}`;
    

    
    if (buttonValue === '=' && secondNum > 0) {
        calcMath.textContent = '';
    }

    // if (buttonValue === '=' && operation.length > 0 && secondNum > 0) {
    //     mathLine(firstNum, secondNum, operation);
    //     // calcMath.textContent = calcResult.textContent;
    // }



})




let mathLine = function (firstNum, secondNum, operation) { 
     {
        if (operation === '/') {
            calcResult.textContent = (firstNum / secondNum).toFixed(3);
        } else if (operation === '*') {
            calcResult.textContent = (firstNum * secondNum).toFixed(3);
        } else if (operation === '-') {
            calcResult.textContent = (firstNum - secondNum).toFixed(3);
        } else if (operation === '+') {
            firstNum = Number(firstNum);
            secondNum = Number(secondNum);
            calcResult.textContent = (firstNum + secondNum).toFixed(3);
        }
        firstNum = calcResult.textContent;
        secondNum = '';
    }
}