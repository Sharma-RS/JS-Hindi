//1. Named Functions

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"

//2. Anonymous Functions
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Bob")); // "Hello, Bob!"

//3. Arrow Functions

const greet = (name) => `Hello, ${name}!`;

console.log(greet("Charlie")); // "Hello, Charlie!"

//4. Immediately Invoked Function Expressions (IIFE)
(function() {
    console.log("This function runs immediately!");
})();

//5. Constructor Functions
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person("Dave", 30);
console.log(person.name); // "Dave"
console.log(person.age); // 30

//6. Generator Functions

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

//7. Async Functions

async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
}

fetchData();

//8. Callback Functions
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John' };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log(data); // { id: 1, name: 'John' }
});

//9. Higher-Order Functions

function applyOperation(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
console.log(applyOperation(2, 3, add)); // 5