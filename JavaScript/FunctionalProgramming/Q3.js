let a = [1,2,3,4,5];
function check(array,isEven){
    isEven(array);
}
 function isEven(a){
   for( var i=0;i<a.length;i++){
     if(a[i]%2==0){console.log(a[i])}
   }
}
check(a,isEven)