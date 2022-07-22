//import './personalDetails.css';
import  React, {Component} from 'react'
import {TextField} from "@material-ui/core"
import {Button} from 'react-bootstrap';
//import Travel from './Travel';
import './Travel.css';
import  { useState,useEffect } from 'react';
import{useHistory} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

import Axios from "axios";

 

function App() {

    useEffect(() => {
        console.log("I reached bro");
        Axios.get("http://localhost:3001/temp").then((response) => {
        console.log(response.data[0].username);
        console.log("inside temp");
        setUserName(response.data[0].username);
    
    });
}, []);

    const [User,setUserName]=useState('');
    const [Date1, setDate]=useState('');
    const [State, setState]=useState('');
    

    const [Destination, setDestination]=useState('');
    const [Traveller, setTraveller]=useState('');
    const [Children, setChildren]=useState('');
    const [Adult, setAdult]=useState('');
    const [Stop, setStop]=useState('');
    

    const [serrmsg,setAErrmsg]=useState('');
    const history=useHistory();

    const [loginStatus, setLoginStatus] = useState("");


    
    const handleSubmition=(e)=>{
        e.preventDefault();
        
        if(!Date1 || !State || !Stop  || !Destination || !Traveller || !Children || !Adult  ){
            alert("please fill All the field");
        }
        
        else if(Date<"2022-06-20"){
            alert("enter Proper Date  ") ;   
        }
        
        else if(Traveller<0||Traveller==0){
            alert("invalid no of travelers ") ;   
        }
        
        else if(Adult<0||Adult==0){
            alert("invalid no of Adults ") ;   
        }
        
        else if(Traveller<Adult){
        alert("Adults should be less than or equal to Travellers  ") ;   
        }
        
        else if(Children<0||Children==0){
            alert("invalid no of Childerns");   
        }
        
        else if(Traveller<Children){
            alert("childrens should be less than or equal to Travellers  ") ;   
            }
        
        else{
        
            setAErrmsg("");
            history.push('/Hotels');
        
            register();
        
        }
        
        }

const register = () => {
    try{
    Axios.post("http://localhost:3001/Bus", {
      Date1:Date1,
      State:State,
      Stop:Stop,
      Destination:Destination,
      Traveller:Traveller,
      Adult:Adult,
      Children:Children,
      User:User,
     
      //password: passwordReg,
    }).then((response) => {
      console.log(response.data);
      setLoginStatus({message: "Personal Details is successfull"});
      console.log(loginStatus);
    });
}catch(error){
    console.log(error);
}
    updateActivityTable();
  };

const updateActivityTable=()=>{
    Axios.post("http://localhost:3001/activity_table", {
        User:User,
        Mode:"Bus",
       
        //password: passwordReg,
      }).then((response) => {
        console.log(response);
        //setLoginStatus({message: "Personal Details is successfull"});
        //console.log(loginStatus);
      });
}




/*
            // Example starter JavaScript for disabling form submissions if there are invalid fields
            (function() {
                'use strict';
                window.addEventListener('load', function() {
                    // Fetch all the forms we want to apply custom Bootstrap validation styles to
                    var forms = document.getElementsByClassName('needs-validation');
                    // Loop over them and prevent submission
                    var validation = Array.prototype.filter.call(forms, function(form) {
                    form.addEventListener('submit', function(event) {
                        if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                    });
                }, false);
                })();

 */

  return (

    
    
    <div className="UserDetails1">
      <div id="d4">
      <button id="PersonalDetails"><h3>PERSONAL DETAILS</h3></button>
        <button id="TravelDetail"><h3>TRAVEL DETAILS</h3></button>
        <button id="AccDetail"><h3>ACCOMODATION DETAILS</h3></button>
        <button id="ActivityDetails"><h3>ACTIVITY DETAILS</h3></button>
        


      </div>

  
            
      <div id="drop">
            
               
            <h4> Select Mode of TransPort</h4>

            
                        <div style={{ display: 'block', 
                                width: 700,
                                paddingLeft:50 
                                }}>
                    
                    <Dropdown>
                        <Dropdown.Toggle  >
                        Bus
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item onClick={(e)=>{e.preventDefault();history.push('/Bus')}}>
                            Bus
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{e.preventDefault();history.push('/Flight')}}>
                            Flight
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{e.preventDefault();history.push('/Train')}}>
                            Train
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
          
           
          
        </div>

      <br></br><br></br>

      
    
      <div class="container" >
          <div class="row">
                <div class="col-lg">
                     <form class="needs-validation" novalidate>

                         
                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Prefered date</i></h3></label>
                            <input type="date" class="form-control" id="exampleInputPreferedDate" aria-describedby="emailHelp" placeholder="" onChange={e=>setDate(e.target.value)} required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                     
                        <div id="bording_state">
                                
                                <label for="transport"><i><h3>Select Boarding State:</h3></i></label><br></br>
                                <select id="state"onChange={e=>setState(e.target.value)} required >
                                            <option value="0"><b>Select Boarding state</b></option>
                                             <option value="Maharashtra"><b>Maharastra</b></option>
                                            <option value="Delhi"><b>Delhi</b></option>
                                            <option value="Panjab"><b>Punjab</b></option>
                                            <option value="Rajasthan"><b>Rajasthan</b></option>
                        
                                </select>
                                <div class="invalid-feedback">
                                Please provide a valid zip.
                                </div>
                                
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Enter Boarding Stop:</i></h3></label>
                            <input type="Text" class="form-control" id="Boarding_Stop" aria-describedby="emailHelp" placeholder="Enter Boarding Stop" onChange={e=>setStop(e.target.value)} required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                        <div id="Destination">
                                
                                <label for="transport"><i><h3>Select Destination:</h3> </i></label><br></br>
                                <select id="Dest"onChange={e=>setDestination(e.target.value)} required >
                                            <option value="0"><b>Select Destination</b></option>
                                             <option value="Panjim"><b>Panjim</b></option>
                                            <option value="vasco"><b>Vasco</b></option>
                                            <option value="Mapusa"><b>Mapusa</b></option>
                                            <option value="Canacona"><b>Canacona</b></option>
                        
                                </select>
                                
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>No. of Travellers</i></h3></label>
                            <input type="number" class="form-control" id="Travellers" aria-describedby="emailHelp" placeholder="No Of Travellers" onChange={e=>setTraveller(e.target.value)}required/>
                            <div class="invalid-feedback">
                                 Please provide a valid zip.
                            </div>
                        </div>

                 

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>No. of Adults :</i></h3></label>
                            <input type="number" class="form-control" id="AdultsBus" aria-describedby="emailHelp" placeholder="No. of Adults" onChange={e=>setAdult(e.target.value)} required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>


                    
                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>No. of Childrens:</i></h3></label>
                            <input type="number" class="form-control" id="childrensBus" aria-describedby="emailHelp" placeholder="No. of Childrens"onChange={e=>setChildren(e.target.value)} required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>


                  
                        
                       <br></br><br></br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" class="btn btn-primary" onClick={handleSubmition}>Next</button>
                    </form> 

                    </div>         

          

      
            <div class="col-lg">
            <img src="../images/day_bus.gif" alt="profile" className="profile"/>
            </div>
        </div>
st
    </div>

   
    </div>

    

      

      );
}

export default App;