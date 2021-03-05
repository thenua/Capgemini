
function sendRequest(location){
  return new Promise((resolve,reject)=>{
      if(location == 'google'){
          resolve('The HTTP request has been made');
      }
      else{
          reject('Only google requests are allowed in the browser')
      }
  })
}
function getResponse(user){
    return new Promise((resolve,reject)=>{
        if(user){
        resolve('The request has been processed and sent to: '+user)}
        else {
            reject('Users is not valid')
        }
    }
    
    )
}
var  doWork = ()=>{
    //pass the requests in this function
    Promise.all([
        sendRequest('opera'),
        getResponse('Gray')
    ]).then((message)=>{console.log(message)}).catch((error)=>{console.log(error)})
} 
doWork();

