import React, { Component } from 'react'
import axios from 'axios';

import swal from 'sweetalert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 


const Users = props =>(

  <tr>
  <td>{props.user.firstname}</td>
  <td>{props.user.surname}</td>
  <td>{props.user.age}</td>
  <td>{props.user.height}</td>        
  <td>{props.user.weight}</td> 
<td>{props.user.haircolor}</td>
   <td> <Link to={"/edit/" + props.user.id}  class="btn btn-danger btn-sm"><strong>Edit</strong></Link>  </td> 
 <td><button onClick={ () => {props.delete(props.user.id) }} class="btn btn-primary btn-sm">Delete</button></td>           
</tr>
)




export default class UserList extends Component {
  
  constructor(){
    super();
    
  
    this.state = { user: [ ]
    
    };
  }


  
Get(){
  var url = 'http://localhost:4000/user';
  axios.get(url)
  .then((user) => {
    console.log(user.data);
    this.setState({
      user: user.data,
    }) 
  })
};

  componentDidMount(){
   this.Get();
        }
        
        
        Remove(e) {
          var array = [...this.state.user]; // make a separate copy of the array
          var index = array.indexOf(e.target.value)
          if (index !== -1) {
            array.splice(index, 1);
            this.setState({user: array});
          }
        }

        Remove(e){

          this.setState({user: this.state.user.filter(id => id !== e.target.value)});
          
        }

        deleteUser(id){
          axios.delete( 'http://localhost:4000/user/' + id)
          .then(res => console.log(res.data));

         
          window.location = '/';
          
        }
   

list(){
  const one = this.state;
  return this.state.user.map(auser =>{
    return <Users user ={auser}   delete={this.deleteUser} key={auser._id} />;  })
}






  render() {
    
    return (
      <div>
    
          
      <br/>
      <div className="container" >
        
        <div className="row  ">
     
      <br/>
      <br/>
      <table align="right" className="table table-striped table-inverse table-hover table-responsive ">
        <thead className="thead-inverse">
          <tr>
           
            <th>Firstname</th>
            <th>Surname</th>
            <th>Age</th>
            <th>height</th><th>weight</th><th>haircolor</th><th>Edit</th><th>Delete</th>
          </tr>
          </thead>
          <tbody>
            
           { this.list() }
           
          </tbody>
      </table>
      </div>
            </div>


</div>
    )
  }
}

