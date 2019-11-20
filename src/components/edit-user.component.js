import React, {Component} from 'react';
import axios from 'axios';



export default class EditUser extends Component {

    constructor(props) {

        super(props);
        this.onChangesurname= this.onChange.bind(this);
        this.onChangefirstname= this.onChange.bind(this);
        this.onChange= this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
        this.state = { 
            
            
            user : [
                {
            firstname: '',
            surname: '',
            age: '',
            height: '',
            weight: '',
            haircolor: '',
             
                }
            ]


    
        };
    }

    Get(){
        var url = 'http://localhost:4000/user/' + this.props.match.params.id;
        axios.get(url)
        .then((user) => {
          console.log(user.data);
          
            this.setState( { user: [{ 

                firstname : user.data[0].firstname,
                surname :   user.data[0].surname,
                age :   user.data[0].age,
                height :   user.data[0].height,
                haircolor :   user.data[0].haircolor,
                weight: user.data[0].weight,



            }] });
         
        //   console.log(this.state.user[0].firstname);
        })
      };
    componentDidMount() {

        this.Get();
 
    }

    onChange (e){
                
        this.setState( { user: [{ [e.target.name] : e.target.value}] });

    }

    onChangefirstname (e){
                
        this.setState( { user: [{ [this.state.user.firstname] : e.target.value}] });

    }

    onChangesurname (e){
                
        this.setState( { user: [{ [this.state.user.surname] : e.target.value}] });

    }
   

   
    onSubmit(e) {
        e.preventDefault();
        const obj = {

            firstname: this.state.user[0].firstname,
            surname: this.state.user[0].surname,
            age: this.state.user[0].age,
            height: this.state.user[0].height,
            weight: this.state.user[0].weight,
            haircolor: this.state.user[0].haircolor,


        };
        console.log(this.state.user[0].firstname);
       console.log(obj) ;
        axios.put('http://localhost:4000/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        window.location = '/';
    }


 
    render() {



        return this.state.user.map( auser => (
            
            
                    <div className ="Content ">
    <br/>
    <br/>
    <div className="">
    <div className="row justify-content-center">
    <div className="col-md-6">
    
    <small id="helpId" class="text-muted"><h5>Personal Information</h5></small>
    <br/>
    <form onSubmit={this.onSubmit} >
           
    <div>
        <div className="form-group">
        <small id="helpId" class="text-muted">Firstame</small>
        <input type="text" name="firstname" value={auser.firstname}  onChange = {this.onChangefirstname} id="" class="form-control" placeholder="" />
        
        </div>
        
        <div className="form-group">
        <small id="helpId" class="text-muted">Surname</small>
        <input type="text" name="surname"  value={auser.surname}  onChange = {this.onChangesurname} id="" class="form-control" placeholder="" />
        
        </div>
        
        <div className="form-group">
        <small id="helpId" class="text-muted">Age</small>
        <input type="text" name="age"  value={auser.age}  onChange = {this.onChange}  class="form-control" placeholder="" aria-describedby="helpId" />
        </div>
        
        <br/>
        <small id="helpId" class="text-muted"><h5>Attribute Information</h5></small>
        
        <div className="form-group">
        <small id="helpId" class="text-muted">Height</small>
        <input type="text" name="height"  value={auser.height}   onChange = {this.onChange} id="" class="form-control" placeholder="" aria-describedby="helpId"/>
        
        </div>
        
        <div className="form-group">
        <small id="helpId" class="text-muted">Hair Color</small>
        <input type="text" name="haircolor"  value={auser.haircolor}  onChange = {this.onChange} id="" class="form-control" placeholder="" aria-describedby="helpId"/>
        
        </div>
        
        <div className="form-group">
        <small id="helpId" class="text-muted">Weight</small>
        <input type="text" name="weight"  value={auser.weight}  onChange = {this.onChange} id="" class="form-control" placeholder="" aria-describedby="helpId"/>
        
        </div>
    
       </div>
                    
                    
                    <div className="form-group">
    
    <input type="submit" onSubmit = {this.onSubmit}    value="Update"  class="form-control btn btn-success" placeholder="" aria-describedby="helpId" />
    </div>
    <br/>

    </form>
    
    </div>
    </div>
    </div>
    
    
    
    
    
    </div>

                    
                    
                    
        ) 
        )        
                    
        
    }
}