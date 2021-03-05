var toWhat;
var toWhom;
function makeRequest(toWhat){
 return new Promise((resolve,reject)=>{
     if(toWhat === 'google'){
         console.log('Request Processing')
         resolve('Request Sent Succesfully')
     }
     else
     console.log('Request Denied')
     reject('Reason: Any requests apart from google is not accepted')
 })
}
function getResponse(toWhom){
    return new Promise((resolve,reject)=>{
        if(toWhom){
        resolve('The response is sent to '+toWhom)}
        else
        reject('Error')
    }
    
    )}

async function doWork(){
       await  Promise.all([
            makeRequest('google'),
            getResponse('Nikhil')
        ]).then((message)=>{console.log(message)}).catch((error)=>{console.log(error)})
    }
    doWork();