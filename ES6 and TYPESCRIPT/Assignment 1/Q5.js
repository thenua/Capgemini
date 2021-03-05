//Part-1

const a =2;
const b= 3;
var add = ()=>{console.log(a+b)}
add()

//part-2

var userFriends = (username,listFriends)=>{
    console.log('Username is '+username);
    console.log('List of Friends: '+listFriends)
}
userFriends('Nick',['tom','ivan']);

//Part-3

function toCap(...array){
       newArray = []
       array.map((name)=>{newName= name.toUpperCase();
        newArray.push(newName);
        console.log(newArray.join(','));
    })
}
toCap('ion','mark');