var styleCalc = '';
isFirst = true;
firstNumber = '';
secondNumber = '';
isSecondNumber = false;
operation = '';
const selectorResult = '.container__result--number';

document.body.classList.add('primary');

function filterClassActive(classes) {
    return Object.entries(classes)
        .filter(([key, value]) => value)
        .map(([key, value]) => key)
        .join(' ');
}

function initElements() {
    const style = {
        'container-primary': this.typeCard === 'primary',
        'container-secondary': this.typeCard === 'secondary',
    };

    styleCalc = filterClassActive(style);
}


function getValueButton(event) {
    const simbols = ['+', '-', 'x', '/'];

    const value = event.target.value;
    let valor;
    if (!simbols.includes(value)) {
        valor = +value;
    }
    console.log(typeof event.target.value)
    console.log(valor);

    switch (value) {
        case 'del':
            break;
        case '+':
            clearResult();
            isSecondNumber = true;
            operation = 'sum';
            break;
        case '-':
            clearResult();
            isSecondNumber = true;
            operation = 'sub'
            break;
        case 'x':
            clearResult();
            isSecondNumber = true;
            operation = 'mult';
            break;
        case '=':
            clearResult();
            putValueResult(doOperation());
            break;
        case 'reset':
            clearResult();
            firstNumber = 0;
            secondNumber = 0;
            break;
        case '/':
            clearResult();
            isSecondNumber = true;
            operation = 'div';
            break;
        default:
            break;
    }


    if (!isSecondNumber && valor) {
        firstNumber = firstNumber + valor;
    } else if (valor){
        secondNumber = secondNumber + valor;
    }


    if (isFirst && valor) {
        putValueResult(valor);
        // document.querySelector('.container__result--number').textContent = valor;
    } else if (valor){
        putValueResult(document.querySelector(selectorResult).innerHTML + valor);
        // document.querySelector('.container__result--number').textContent = document.querySelector('.result').textContent + valor;
    }
    isFirst = false;

    console.warn(valor !== typeof 0);
    console.warn(firstNumber);


}

function putValueResult(value) {
    document.querySelector(selectorResult).innerHTML = value;
}

function clearResult() {
    document.querySelector(selectorResult).innerHTML = '';
    document.querySelector(selectorResult).textContent = '';
}

function doOperation() {
    let result;
    switch (operation) {
        case 'sum':
            result = Number.parseInt(firstNumber) + Number.parseInt(secondNumber);
            break;
        case 'sub':
            result = Number.parseInt(firstNumber) - Number.parseInt(secondNumber);
            break;
        case 'mult':
            result = Number.parseInt(firstNumber) * Number.parseInt(secondNumber);
            break;
        case 'div':
            result = Number.parseInt(firstNumber) / Number.parseInt(secondNumber);
            break;
        default:
            break;
    }

    return result;
}

function changeClass() {
    const position = document.querySelector('.multi-radio-toggle__slide-bg').offsetLeft;
    if (position < 25) {
    //    PRIMEIRO
        document.body.classList.remove('secondary');
        document.body.classList.remove('third');
        document.body.classList.add('primary')
    } else if (position >= 25 && position < 30) {
    //    segundo
        document.body.classList.remove('third');
        document.body.classList.remove('primary');
        document.body.classList.add('secondary')

    } else {
    //    terceiro
        document.body.classList.remove('secondary');
        document.body.classList.remove('primary');
        document.body.classList.add('third')

    }
}
