//Working on promises

const { promises } = require("fs")

 
 function showX(x){
     
    return new Promise((resolve)=>{
        resolve("the value of x is: "+x)
    })
}
 function showY(y){
    return new Promise((resolve)=>{
        resolve("the value of y is: "+y)
    })
}
var showSum = function sum(x,y){
    return new Promise((resolve,reject)=>{
        add1 =  parseInt(x);
        add2 = parseInt(y);
        resolve('The sum is : '+add1+add2);
    })
}
function doWork(){
    numberInX = parseInt(4);
    numberInY= parseInt(4);
   Promise.all(
   [
     showX(numberInX),
     showY(numberInY),
      showSum(numberInX,numberInY)
   ]).then((message)=>{
       console.log(message)
   })
}
doWork()