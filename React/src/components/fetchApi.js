import React, { Component } from 'react'
class FetchApi extends Component {
    state = { person: [] }
    componentDidMount=()=>{
        var url = "https://api.randomuser.me/"
        fetch(url).then(response =>{
            if(response.ok){console.log("succes")}
            else{ console.log("error")}
            return response.json()}).then(data=>{
                console.log(data)
                this.setState({person: data})})
    }

    // fetchInApi = ()=>{
    //     fetch("https://api.randomuser.me/").then(res=>{return res.json()}).then(data=>{console.log(data)})
    // }
    render() { 
        return (
             <div>
             {this.componentDidMount}
            
        </div> );
    }
}
 
export default FetchApi;