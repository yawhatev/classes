//a program that prints all even numbers from 1 to 50 
for(let i=1; i<=50; i++){
    if(i%2 === 0){ // '==' is used for comparison, '===' is used for comparison and type checking
// 2=='2' is true, 2==='2' is false
        console.log(i);
    }
}

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

//Defining Variables with Different Data Types and Logging their Types
let name = 'John Doe'; // String
let age = 25; // Number
let isMarried = false; // Boolean
let childrenNames = ['Alice', 'Bob']; // Array
let years= null; // Null
let car = undefined; // Undefined

console.log(typeof name); // Output: string 
console.log(typeof age); // Output: number  
console.log(typeof isMarried); // Output: boolean
console.log(typeof childrenNames); // Output: object
console.log(typeof years); // Output: object
console.log(typeof car); // Output: undefined
console.log(typeof x); // Output: undefined

//a person class with name, age and method introduce that logs a message 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}

const person1 = new Person('Alice', 25);
person1.introduce(); // Output: Hello, my name is Alice and I am 25 years old

//Declaring Variables with var, let, and const and reassigning them; note the errors
var x = 5;
let y = 10;
const z = 15;

x = 50;
y = 100;
z = 150; // TypeError: Assignment to constant variable.

console.log(x); // Output: 50
console.log(y); // Output: 100
console.log(z); // Output: 150

//function findMax to Find the Maximum Number in an Array
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([5, 2, 9, 1, 5, 6])); // Output: 9

//Object car with Properties and getDetails Method
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    getDetails: function() {//getDetails is a method of the car object
        console.log(`This car is a ${this.brand} ${this.model}`);//this refers to the object that the method is called on
    }
};
console.log(car.getDetails); 

//Convert a traditional function that calculates the square of a number into an arrow function.
function getsquare(num) {
    return num * num;
}
console.log(getsquare(5)); // Output: 25

//Write a program that iterates over an array of names and logs each name to the console with its index.
const names = ['Alice', 'Bob', 'Charlie', 'Deborah'];
for (let i = 0; i < names.length; i++) {// names.lenght is the number of elements in the array
    console.log(`Index ${i}: ${names[i]}`);
}

//Write a program that filters out even numbers from an array and returns a new array with only the odd numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const oddNumbers = numbers.filter(function(num) {//filter() method creates a new array with all elements that pass the test implemented by the provided function.
    return num % 2 !== 0;
});
console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]

//Use template literals to log a sentence.
const name = 'Alice';
const age = 25;
console.log(`Hello, my name is ${name} and I am ${age} years old`); 

//Create a Book class with properties title, author, and year. Add a method to display information about the book using template literals.
class Book { //c++ jastai class ko object banauna milcha
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    displayInfo() {
        console.log(`The book ${this.title} was written by ${this.author} in ${this.year}`);
    }
}
const book1 = new Book('The Alchemist', 'Paulo Coelho', 1988);
book1.displayInfo(); // Output: The book The Alchemist was written by Paulo Coelho in 

//Use map to create a new array where each number in an array is doubled.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(num) {//map() method creates a new array with the results of calling a provided function on every element in the calling array.
    return num * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

/* traditional function:Defined with the function keyword. Can be named or anonymous. Can use the this keyword dynamically (depending on how it is called). 
Arrow function: Does not use the function keyword.
Automatically binds the this value to the surrounding context (lexical scoping).
When there is a single expression, you can omit the {} and return statement (implicit return)*/

/* template literals to log a sentence means writing a string in JavaScript using backticks (`) instead of regular quotes (' or ")*/
//console.log(`My name is ${name} and I am ${age} years old.`);

/*filter() method creates a new array with all elements that pass the test implemented by the provided function.
map() method creates a new array with the results of calling a provided function on every element in the calling array.*/

/*map():Transforms every element of the array
filter():Filters the array to include only elements that meet a condition. */
