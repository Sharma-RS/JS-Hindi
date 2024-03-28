/**
Function & Parameters in java script
Browse the complete JavaScript reference documentation.
Standard objects
Array, Boolean, Date, Error, Function, JSON, Math, Number, Object, RegExp, String, Map, Set, WeakMap, WeakSet, and others.

Expressions and operators
JavaScript's operators instanceof, typeof, new, this, the operator precedence, and more.

Statements and declarations
Learn how do-while, for-in, for-of, try-catch, let, var, const, if-else, switch, and more JavaScript statements and keywords work.

Functions
Learn how to work with JavaScript's functions to develop your applications.

Classes
JavaScript classes are the most appropriate way to do object-oriented programming.
Standard built-in objects
First Class function
A programming language is said to have first class function whaen functions in that language are treated like any other variable,
in such a language a function can be passed as an argumment to other functions. can be rtetuned by another function and can be assigned as a value 
to a variable.
**************************/
// const foo = () => {
//       console.log("foobar");
// }
// foo();

// function sayHello(){
//    console.log("Hello");
// }
// function greating(helloMessage,name){
//                   console.log(helloMessage() +" --  "+ name)
// }

// greating(sayHello,"Radhey")

// function sayHello(){
//          return () => {
//             console.log("hello");
//      };
// }
// const xxx = sayHello()
// console.log(xxx())


// (function foo() {
//     console.log('Hello Foo');
//   }());
//   (function(a, b) {
//       console.log(a,b)})("hello", "world");

// typeof function (a, b) {
//     console.log(a, b);
// } ("Radhey", "Shyam");

// (function () { /* ... */ })();
// (function () { /* ... */ }());
// (() => { /* ... */ })(); // With ES6 arrow functions (though parentheses only allowed on outside)
// There are other ways to enforce a function expression:[citation needed]

// !function () { /* ... */ }();
// ~function () { /* ... */ }();
// -function () { /* ... */ }();
// +function () { /* ... */ }();
// void function () { /* ... */ }();
// delete function () { /* ... */ }();
// typeof function () { /* ... */ }();
// await function () { /* ... */ }();
// In contexts where an expression is expected, wrapping in parentheses is not necessary:

// let f = function () { /* ... */ }();
// true && function () { /* ... */ }();
// 0, function () { /* ... */ }();
// Passing variables into the scope is done as follows:

// (function(a, b) { /* ... */ })("hello", "world");
// An initial parenthesis is one case where the automatic semicolon insertion (ASI) in JavaScript can cause problems; the expression is instead interpreted as a call to the last term on the preceding line. In some styles that omit optional semicolons, the semicolon is placed in front of the parenthesis, and is known as a defensive semicolon.[7][8] For example:

// a = b + c
// ;(function () {
//   // code
// })();
// ...to avoid being parsed as c().

// Examples
// The key to understanding design patterns such as IIFE is to realize that prior to ES6, JavaScript only featured function scope (thus lacking block scope), passing values by reference inside closures.[9] This is no longer the case, as the ES6 version of JavaScript implements block scoping using the new let and const keywords.[10]

// Evaluation context
// A lack of block scope means that variables defined inside (for example) a for loop will have their definition "hoisted" to the top of the enclosing function. Evaluating a function that depends on variables modified by the outer function (including by iteration) can be difficult. We can see this without a loop if we update a value between defining and invoking the function.[11]

// let v, getValue;
// v = 1;
// getValue = function () { return v; };
// v = 2;

// getValue(); // 2
// While the result may seem obvious when updating v manually, it can produce unintended results when getValue() is defined inside a loop.

// Hereafter the function passes v as an argument and is invoked immediately, preserving the inner function's execution context.[12]

// let v, getValue;
// v = 1;
// getValue = (function (x) {
//     return function () { return x; };
// })(v);
// v = 2;

// getValue();  // 1
// This is equivalent to the following code:

// let v, getValue;
// v = 1;
// function f(x) {
//     return function () { return x; };
// };
// getValue = f(v);
// v = 2;

// getValue();  // 1
// Establishing private variables and accessors
// IIFEs are also useful for establishing private methods for accessible functions while still exposing some properties for later use.[13] The following example comes from Alman's post on IIFEs.[1]

// // "counter" is a function that returns an object with properties, which in this case are functions.
let counter = (function () {
    let i = 0;

    return {
        get: function () {
            return i;
        },
        set: function (val) {
            i = val;
        },
        increment: function () {
            return ++i;
        }
    };
})();

// These calls access the function properties returned by "counter".
// counter.get();       // 0
// counter.set(3);
// counter.increment(); // 4
// counter.increment(); // 5
// console.log(counter.get());
 console.log(counter.set(3))
 console.log(counter.increment())
 