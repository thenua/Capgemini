var a = [1,2,3,4,5]
var solutionArray= [];
function find(array,isEven){
    isEven(array);
}
function isEven(a){
    a.slice(0,a.length-1)
    for( var i=0;i<a.length;i++){
        if(a[i]%2==0){solutionArray.push(a[i]);}
      }
}
find(a,isEven);
console.log(solutionArray.join(","))