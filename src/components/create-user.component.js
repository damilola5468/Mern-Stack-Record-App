import React, { Component } from 'react';
import axios from 'axios';


 class CreateUser extends Component {
constructor(props){
  super(props);

  this.state={
    firstname: " ",
    surname: " ",
    age: "",
    weight: " ",
    height: " ",
    haircolor: " ",
  
  } 

}

componentDidMount(){

}

  onChange = e => this.setState( { [e.target.name]: e.target.value});


  onSubmit = e => {
    e.preventDefault();
    const { firstname , surname, age, weight, height, haircolor } = this.state;
    const  User = { firstname , surname, age, weight, height, haircolor};
    

    axios.post( 'http://localhost:4000/user/',User)
       .then(res => console.log(res.data));
  
    this.setState({
      firstname: " ",
      surname: " ",
      age: " ",
      weight: " ",
      height: " ",
      haircolor: " ",
    
    })

    window.location ='/';
}
  render() {
    
    return (
     

    <div>

 



<div className ="Content ">
<br/>
<br/>
<div className="">
<div className="row justify-content-center">
<div className="col-md-6">

<small id="helpId" class="text-muted"><h5>Personal Information</h5></small>
<br/>
<form onSubmit={this.onSubmit} >
<div className="form-group">
<small id="helpId" class="text-muted">Firstame</small>
<input type="text" name="firstname"  onChange = {this.onChange} id="" class="form-control" placeholder="" aria-describedby="helpId"/>

</div>

<div className="form-group">
<small id="helpId" class="text-muted">Surname</small>
<input type="text" name="surname" onChange = {this.onChange} id="" class="form-control" placeholder="" aria-describedby="helpId"/>

</div>



<div className="form-group">
<small id="helpId" class="text-muted">Age</small>
<input type="text" name="age" onChange = {this.onChange} id="disabledInput" class="form-control" placeholder="" aria-describedby="helpId" />
</div>

<br/>
<small id="helpId" class="text-muted"><h5>Attribute Information</h5></small>

<div className="form-group">
<small id="helpId" class="text-muted">Height</small>
<input type="text" name="height"  onChange = {this.onChange}id="" class="form-control" placeholder="" aria-describedby="helpId"/>

</div>

<div className="form-group">
<small id="helpId" class="text-muted">Hair Color</small>
<input type="text" name="haircolor" onChange = {this.onChange} id="" class="form-control" placeholder="" aria-describedby="helpId"/>

</div>

<div className="form-group">
<small id="helpId" class="text-muted">Weight</small>
<input type="text" name="weight" onChange = {this.onChange} id="" class="form-control" placeholder="" aria-describedby="helpId"/>

</div>
<div className="form-group">

<input type="submit" name="" onSubmit = {this.onSubmit}   value="Submit"  class="form-control btn btn-success" placeholder="" aria-describedby="helpId" />
</div>
<br/>
</form>

</div>
</div>
</div>





</div>
      </div>

    
  );


    
  }
 }



  export default CreateUser;
 
