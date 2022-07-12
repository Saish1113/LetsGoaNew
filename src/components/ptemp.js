import './personalDetails.css';
import  React, {Component} from 'react'
import {TextField} from "@material-ui/core"
import {Button} from 'react-bootstrap';
import {
    toast,
    ToastContainer
  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios";

//import Travel from './Travel';
//import profile from "./images/personal3.gif";
//import{Link,useNavigate} from 'react-router-dom';

import  { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
 

function App() {

    useEffect(() => {
        
        Axios.get("http://localhost:3001/login").then((response) => {
          if (response.data.loggedIn == true) {
            //setSessionUser(response.data.user[0]);
            console.log(response.data.user[0]);
            setUserName(response.data.user[0].username);
            setName(response.data.user[0].fullname);
            setEmail(response.data.user[0].email);
            //setUserName(response.data.user[0].username);
          }
        });
      }, []);


    const history = useHistory();
    
    const [User,setUserName]=useState('');
    const [name, setName]=useState('');
    const [Address, setAddress]=useState('');
    const [Age, setAge]=useState('');
    const [Dob, setDob]=useState('');
    const [Adhar, setAdhar]=useState('');
    const [Email, setEmail]=useState('');
    const [errmsg,setAErrmsg]=useState('');
    const [Gender, setGender]=useState('');
    const [loginStatus, setLoginStatus] = useState("");

    const handleSubmition=(e)=>{
      
        e.preventDefault();
      
        if(!name || !Address || !Age || !Dob || !Adhar || !Email || !Gender ){

            alert("please fill all the field");
        }
        else if(Age<0|| Age==0){
            alert("Invaid age entered");
        }

        else if(Adhar.length!=12)
        {
            alert("enter proper adhar card no ");
        }

        else if(Dob>"2022-06-18")
        {
            alert("enter proper Date of Birth");
        }

        else{
        register();
        history.push("/Flight");
        }

    }

    const register = () => {
        Axios.post("http://localhost:3001/personaldetails", {
            name: name,
            address: Address,
            age:Age,
            email:Email,
            aadhar: Adhar,
            dob: Dob,
            gender:Gender,
            user:User,

         
          //password: passwordReg,
        }).then((response) => {
          console.log(response.data);
          setLoginStatus({message: "Personal Details is successfull"});
          console.log(loginStatus);
        });
      };

  return (

    
    
    <div className="UserDetails1">
      <div id="d4">
      <button id="PersonalDetail"><h3> PERSONAL DETAILS</h3></button>
        <button id="TravelDetails"><h3>TRAVEL DETAILS</h3></button>
        <button id="AccDetail"><h3>ACCOMODATION DETAILS</h3></button>
        <button id="ActivityDetails"><h3>ACTIVITY DETAILS</h3></button>
        


      </div>
      <br></br><br></br>

    
      <div class="container" >
          <div class="row">
                <div class="col-lg">
                     <form class="needs-validation" noValidate>
                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Name</i></h3></label>
                            <input type="text" class="form-control" id="fullname" aria-describedby="enter full name" placeholder={name}  disabled/>
                            <div class="invalid-feedback">
                                Please provide a valid name.
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Address</i></h3></label>
                            <input type="text" class="form-control" id="address" aria-describedby="Enter valid email" placeholder="Enter Address" onChange={e=>setAddress(e.target.value)}required/>
                            <div class="invalid-feedback">
                                Please provide a valid address.
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Age</i></h3></label>
                            <input type="number" class="form-control" id="age" aria-describedby="emailHelp" placeholder="Enter Age" min="1" onChange={e=>setAge(e.target.value)} required/>
                            <div class="invalid-feedback">
                                 Please provide a valid zip.
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>DOB</i></h3></label>
                            <input type="date" class="form-control" id="dob" aria-describedby="emailHelp" placeholder="Enter email" format="yy-mm-dd" maxDate="22-06-18" onChange={e=>setDob(e.target.value)}required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Adhar Card No.</i></h3></label>
                            <input type="tel" class="form-control"pattern="[0-9]{12}" id="aadhar" aria-describedby="emailHelp" placeholder="Enter Adhar Card no" onChange={e=>setAdhar(e.target.value)}required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>


                    
                     
                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Email address</i></h3></label>
                            <input type="email" class="form-control" id="email_id" aria-describedby="emailHelp" placeholder={Email} required />
                            <small id="email_tip" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                       
                        <label><i><h3>Gender</h3></i></label>
                        <div class="custom-control custom-radio">
                            
                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="Male" onChange={e=>setGender(e.target.value)}/>
                            <label class="custom-control-label" for="customRadio1"><h4>Male</h4></label>
                           
                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"  value="FeMale" onChange={e=>setGender(e.target.value)}/>
                            <label class="custom-control-label" for="customRadio2"><h4>Female</h4></label>
                        </div>
                        
                       <br></br><br></br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" onClick={handleSubmition} class="btn btn-primary" > Next</button>
                        
                    </form> 

                    </div>         

          
                   
      
            <div class="col-lg">
            <img src={'../images/personal3.gif'} alt="profile" className="profile"/>
            </div>
        </div>

        
      

    </div>
    <h3>{errmsg}</h3>
    </div>
   


   

    

);
}

export default App;