/***********************************************************************/
// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("welcome");
//         resolve();
//     }, 1000);
// })
// promiseOne.then(() => {
//      console.log("sencond wlcome");
// })
/***********************************************************************/
// new Promise(function(resolve,reject) {
//     setTimeout(() => {
//         console.log("direct promise");
//         //resolve();
//         reject();
//     }, 1000);
// }).then(function(){
//     console.log("Direct first then");
// }).then(()=> {
//     console.log("Direct Second then");
// }).catch(function(){
//        console.log("Error");
// })   
/***********************************************************************/
const promiseThree = new Promise((resolve,reject) => {
      let tf = true;
      if(tf){
         resolve({name:"Rahey Shyam Sharma", age: 48, location:"Nepal"})
      } else {
        reject("somthing went error");
      }
})
promiseThree.then((data)=> {
     console.log(data.location)
}).catch((error)=> {
      console.log(error);
}).finally(()=> {
    console.log("done resove or rejected");
})
    