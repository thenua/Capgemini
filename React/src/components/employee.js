import React from 'react'
import Table from 'react-bootstrap/Table'
class Employee extends React.Component {
    state = { 
        id: '',
        name : '',
        job: '',
       
        database: [],
     }
     idChange= (event)=>{
        this.setState({
            ...this.state,
            id: event.target.value,
            
        })
     }
      //  delete = (id)=>{
    //      var list = [...this.state.database]
    //      var databaseAfterDeletion = list.filter(item => item.id !== id)
    //      this.setState({
    //          ...this.state,
    //          database: databaseAfterDeletion
    //      })
   nameChange=(event)=>{
        this.setState({
            ...this.state,
            name: event.target.value,
            
        })
   }
   jobChange = (event)=>{
    this.setState({
        ...this.state,
        job: event.target.value
    })
}
   clickOperation = (id,name,job)=>{
    var  newObject = {
        id: id,
        addedName: name,
        addedJob: job,
        Working: true
     }
   var updatedDatabase = []
   updatedDatabase = [ ...this.state.database, newObject]
    this.setState({
        ...this.state,
       database: updatedDatabase,
       
    })
    console.log("New Employee added")
    console.log(...this.state.database)
 }
    render() { 
        return ( <>
         <div>
        <input type= "text"
         value = {this.state.id} 
         placeholder = "Employee Id"
         onChange ={this.idChange} />
      </div>
         <div>
        <input type= "text"
         value = {this.state.name} 
         placeholder = "Employee Name"
         onChange ={this.nameChange} />
      </div>
      <div>
        <input type= "text" 
        value = {this.state.job}
         placeholder = "job"
         onChange ={this.jobChange} />
      </div>
      <div>
          <button onClick = {this.clickOperation(this.state.id,this.state.name,this.state.job)}>
          add
          </button>
     </div>
     <div>
         <h3>Employee database</h3>
        
     </div>
    <table>
       <tr>
           <th>ID</th>
           <th>Name</th>
           <th>Job</th>
          
       </tr>
      {this.state.database.map(item => {
          return(
          <tr>
               <td>{item.id}</td>
              <td>{item.addedName}</td>
              <td>{item.addedJob}</td>
              <td>{item.stillWorking}</td>
              <button className = "warning-btn"
             
              >delete</button>
          </tr>
       ) })}
    </table>
     
      
        </> );
    }
}
 
export default Employee;
