var a= [1,2,3,4];
var newArray = [];
function mapElements(array,square){
   array.slice(0,array.length - 1)
    array.map(square);
}
function square(n){
    n = n*n;
    newArray.push(n);
}
mapElements(a,square);
console.log(newArray.join(","));