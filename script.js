// Building basic arithemetic calculator without frontend

let theOperator = prompt("Enter the operator : Example +, -, *, /, %, 0r ^");
if (theOperator === '+'){
    let num1 = parseFloat(prompt('Enter first value'));
    let num2 = parseFloat(prompt('Enter second value'));
    let result = num1 + num2;
    alert(num1 + ' + ' + num2 + ' = ' + result);
}
else if (theOperator === '-'){
    let num1 = parseFloat(prompt('Enter first value'));
    let num2 = parseFloat(prompt('Enter second value'));
    let result = num1 - num2;
    alert(num1 + ' - ' + num2 + ' = ' + result);
}
else if (theOperator === '*'){
    let num1 = parseInt(prompt('Enter first value'));
    let num2 = parseInt(prompt('Enter second value'));
    var result = num1 * num2;
    prompt(num1 + ' * ' + num2 + ' = ' + result);
}
else if (theOperator === '/'){
    let num1 = parseInt(prompt('Enter first value'));
    let num2 = parseInt(prompt('Enter second value'));
    var result = num1 / num2;
    prompt(num1 + ' / ' + num2 + ' = ' + result);
}
else if (theOperator === '%'){
    let num1 = parseInt(prompt('Enter first value'));
    let num2 = parseInt(prompt('Enter second value'));
    var result = num1 % num2;
    prompt(num1 + ' % ' + num2 + ' = ' + result);
}
else if (theOperator === '^'){
    let num1 = parseInt(prompt('Enter first value'));
    let num2 = parseInt(prompt('Enter second value'));
    var result = Math.pow(num1,num2);
    prompt(num1 + ' ^ ' + num2 + ' = ' + result);
}

else {
    alert('Please enter a valid mathematical operator');
}