//Printing the next fibonacci number
var next = (number,nextFibonacciNumbe)=>{
    nextfibonacciNumber(number);
}
var nextfibonacciNumber = (number)=>{
    let n1 = 0;
    let n2 = 1;
    var n3;
    if(number>1000){
        console.log("the number should be less than 1000");
    }
    if(number == 0 || 1){
        console.log('the next fibonacci number is: 1');
    }
   for(let i=0;i<=number;i++){
      n3 = n1+n2;
      n1=n2;
      n2=n3;
   }
    console.log(n1);


}
next(8);


