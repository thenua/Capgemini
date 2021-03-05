//part-1
var func = (...array)=>{x=array[2];
console.log(x)}
func(1,2,3,4);

//part-2
 let Org={
     name: 'Apple',
     Address:{
         city: 'California',
         street: 'Silicon Valley',
         Pincode: 144232
     }
 }
 var getPincode = Org.Address.Pincode;
 console.log(getPincode);