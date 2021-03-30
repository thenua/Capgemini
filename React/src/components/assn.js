import React, { Component } from 'react'
class Assn extends React.Component {
    state = { 
        id:'',
        name: '',
        job: '',
        list: []
     }
    
    idChange = (event)=>{
        this.setState({ 
            
            id: event.target.value
        })
    }
    nameChange = (event)=>{
        this.setState({ 
            
            name: event.target.value
        })
    }
    jobChange = (event)=>{
        this.setState({ 
           
            job: event.target.value
        })
    }
    addEmp = (id,name,job)=>{
        id = this.state.id
        name = this.state.name
        job = this.state.job
        var  newObject = {
            id: id,
            name: name,
            job: job,
            Working: true
         }
        var updatedList = [...this.state.list,newObject]
        this.setState({ 
           ...this.state,
           name: '',
           job: '',
           id: '',
           list: updatedList 
        })
        console.log(...this.state.list)
       
    }
    delete =(i)=>{
        var newList = this.state.list.filter(item => item.id !== i )
       this.setState({
           ...this.state,
           list: newList
       })
    }
    render() { 
        return ( 
            <>
            <div>
                <input
                    type = "text"
                    placeholder = "Id"
                    value = {this.state.id}
                    onChange = {this.idChange}
                     />
            </div>
            <div>
                <input
                    type = "text"
                    placeholder = "name"
                    value = {this.state.name}   
                    onChange = {
                        this.nameChange
                    } / >
            </div>
            <div>
                <input
                    type = "text"
                    placeholder = "Job"
                    value = {this.state.job}
                    onChange = {
                        this.jobChange
                } / >
            </div>
            <div>
                <button
                onClick = {this.addEmp}
                >
                    add
                </button>
            </div>
            <h2>Employee Database</h2>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>

                    </tr>
                    {this.state.list.map(item =>{
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.job}</td>
                                <button onClick={()=>{this.delete(item.id)}} >Delete</button>
                            </tr>
                        )
                    })}
                </table>
            </div>

            
            </>
                     );
    }
}
 
export default Assn;