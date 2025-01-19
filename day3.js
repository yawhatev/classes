//create a calculator function that takes two numbers and an operator(+,-,*,/) as argument of the function and returns the result. hint:switch()


function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}

//example usages of the function
console.log(calculator(5, 3, '+')); // Output: 8
console.log(calculator(5, 3, '-')); // Output: 2
console.log(calculator(5, 3, '*')); // Output: 15
console.log(calculator(5, 3, '/')); // Output: 1.6666666666666667
console.log(calculator(5, 3, '%')); // Output: Invalid operator
