/*Constructor
  Promise() Constructor 
*/
 const promise1 = new Promise((resolve, reject) => {
                  setTimeout(()=>{
                       resolve("Hello");
                       reject("rejected");
                    },300);


 });

 promise1.then((value)=>{
           console.log(value)
 }).catch(error=>{
         console.log(error);
 })   

 console.log(promise1);





// Properties
// Methords

