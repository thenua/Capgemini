function composed(square,double,n){
 var a= double(n)
  square(a)
}
function square(m){
   m=m*m;
   console.log(m);
}
function double(n){
    square(2*n);
}
composed(square,double,5);