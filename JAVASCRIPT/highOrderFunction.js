function calculate(a,b, cb) {
    return cb(a,b);
} 

function add(x,y) {
    return x + y;          
}

const substract = (x,y) => {
   return x - y; 
}

const multiply = function(x,y){
 return x * y;
}








//   function divide(x, y) {
//      return x / y;
//  }

//  let result1 = applyOperation(5, 3, add); // 5 + 3 = 8
//  let result2 = applyOperation(5, 3, subtract); // 5 - 3 = 2
//  let result3 = applyOperation(5, 3, multiply); // 5 * 3 = 15
//  let result4 = applyOperation(5, 3, divide); // 5 / 3 = 1.6667


//  console.log(result1); // 8
//  console.log(result2); // 2
//  console.log(result3); // 15
//  console.log(result4); // 1.6667


// // Higher-order function that returns a function
// function createPowerFunction(exponent) {
//     return function(base) {
//         return Math.pow(base, exponent);
//     };
// }

// // Create specific power functions
// let square = createPowerFunction(2);
// let cube = createPowerFunction(3);

// // Using the created functions
// let result5 = square(4); // 4^2 = 16
// let result6 = cube(3); // 3^3 = 27

// console.log(result5); // 16
// console.log(result6); // 27

















// //high order functions examples
// function hrf(x, y ) {
//        let result =  x + y ;
//       // cb(result);

//        return () => console.log(result)
       
//  }
// let myfunction = hrf(5,6)
// //myfunction()

// ;() => {}
// ;(func) => {}
// ;(func) => () => {}
// ;(func) => async () => {}

// const asyncHandller = (fn) => async (req,res,next) => {
//       try {
//           await fn(req, res, next)
//       } catch (error) {
       
//       }

// }
