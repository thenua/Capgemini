import React, { Component } from 'react';
import Data from './MOCK_DATA.json'
class RandomUser extends Component {
    state = { 
        search: '',

     }
     setSearchTerm = ()=>{

     }
    render() { 
        return ( 
            <div>
                <div>
                <input type = "text"
                 placeholder ="Search..."
                 onChange = {this.setSearchTerm}
                 />
                 </div>
                 <div>
                     <p>)</p>
                 </div>
            </div>
           
         );
    }
}
 
export default RandomUser;