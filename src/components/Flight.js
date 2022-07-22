//import './personalDetails.css';
import  React, {Component} from 'react'
//import {TextField} from "@material-ui/core"
import {Button} from 'react-bootstrap';
//import Travel from './Travel';
//import profile2 from "./images/flight2.gif";
import{useHistory} from 'react-router-dom';
import  { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


import Dropdown from 'react-bootstrap/Dropdown';

import './flight.css'

import Axios from "axios";



 

function App() {

    useEffect(() => {
        console.log("I reached bro");
        Axios.get("http://localhost:3001/temp").then((response) => {
        //console.log(response.data[0].username);
        console.log("inside temp");
        setUserName(response.data[0].username);
    
    });
}, []);


    

    const [Date, setDate]=useState('');
    const [State, setstate]=useState('');
    const [Boarding, setBoarding]=useState('');
    const [Destination, setDestination]=useState('');
    const [Traveller, setTraveller]=useState('');
    const [Children, setChidrens]=useState('');
    const [Adult, setAdult]=useState('');
    const [FlightClass, setFlightClass]=useState('');
    const [Airlines, setAirlines]=useState('');
    const [User,setUserName]=useState('');

    const [serrmsg,setAErrmsg]=useState('');
	const history=useHistory();

    const [loginStatus, setLoginStatus] = useState("");


    const handleSubmition=(e)=>{
        e.preventDefault();

        const t=Number(Adult)+Number(Children);
      
        
        console.log("t is :" + t);
        
        if(!Date)
        {
            alert("please Enter the Date "); 
        }

        else if(!State)
        {
            alert("please Enter the Bording State  "); 
        }

        else if(!Boarding)
        {
            alert("please Enter the Bording Airport  "); 
        }

        else if(!Destination)
        {
            alert("please Enter the Destination"); 
        }

        else if(!Traveller)
        {
            alert("please Enter the no of travelers "); 
        }

        else if(!Children)
        {
            alert("please Enter no of childern "); 
        }

        else if(!Adult)
        {
            alert("please Enter no of Adults "); 
        }

        else if(!FlightClass)
        {
            alert("please Enter no of Flight Class "); 
        }

        else if(!Airlines)
        {
            alert("please Enter no of Airlines "); 
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

        else if(Traveller>t){
            console.log("Adult " + Adult + "Children is : " + Children + "Traveller : " +Traveller);
        alert("Please enter valid number of total travellers") ;   
        }

        else if(Traveller<t){
            console.log("Adult2 " + Adult + "Children is : " + Children);
        alert("Please enter valid number of total travellers") ;   
        }
        
        else if(Children<0){
            alert("invalid no of Childerns");   
        }
        

        else{

            setAErrmsg("");
            history.push('/Hotels');
    
            register();

        }
        
        }
       
	

    

    const register = () => {
        Axios.post("http://localhost:3001/Flight", {
          Date:Date,
          State:State,
          Boarding:Boarding,
          Destination:Destination,
          Traveller:Traveller,
          Children:Children,
          Adult:Adult,
          FlightClass:FlightClass,
          Airlines:Airlines,
          User:User,
         
          //password: passwordReg,
        }).then((response) => {
          console.log(response.data);
          setLoginStatus({message: "Personal Details is successfull"});
          console.log(loginStatus);
        });
        updateActivityTable();
      };

      
const updateActivityTable=()=>{
    console.log("Inside new flight");
    Axios.post("http://localhost:3001/activity_table", {
        User:User,
        Mode:"Flight",
       
        //password: passwordReg,
      }).then((response) => {
        console.log(response);
        //setLoginStatus({message: "Personal Details is successfull"});
        //console.log(loginStatus);
      }).then((error)=>{
        console.log(error);
      })
}  

   


    
           /* // Example starter JavaScript for disabling form submissions if there are invalid fields
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
                })();*/

 

  return (

    
    
    <div className="UserDetails2">
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
                        Flight
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item  onClick={(e)=>{e.preventDefault();history.push('/Bus')}}>
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
                            <input type="date" class="form-control" id="exampleInputPreferedDate" aria-describedby="emailHelp"  dateFormat="MM/dd/yyyy EE hh:mm a" placeholder="" onChange={e=>setDate(e.target.value)}required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                     
                        <div id="bording_state">
                                
                                <label for="transport"><i><h3>Select Boarding State:</h3></i></label><br></br>
                                <select id="state"onChange={e=>setstate(e.target.value)} required >
                                            <option value="0"><b>Select Boarding state</b></option>
                                             <option value="Maharashtra"><b>Maharashtra</b></option>
                                            <option value="Delhi"><b>Delhi</b></option>
                                            <option value="Punjab"><b>Punjab</b></option>
                                            <option value="Rajasthan"><b>Rajasthan</b></option>
                        
                                </select>
                                <div class="invalid-feedback">
                                Please provide a valid zip.
                                </div>
                                
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Enter Boarding Airport:</i></h3></label>
                            <input type="Text" class="form-control" id="Adhar" aria-describedby="emailHelp" placeholder="Enter Boarding Stop" onChange={e=>setBoarding(e.target.value)} required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                        <div id="Destination">
                                
                                <label for="transport"><i><h3>Select Destination:</h3> </i></label><br></br>
                                <select id="Dest" onChange={e=>setDestination(e.target.value)} >
                                            <option value="0"><b>Select Destination</b></option>
                                             <option value="Dabolim_Airport_Vasco"><b>Dabolim Airport Vasco</b></option>
                                           
                        
                                </select>
                                
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>No. of Travellers</i></h3></label>
                            <input type="number" class="form-control" id="TravellersInputtext" aria-describedby="emailHelp" placeholder="No Of Travellers" onChange={e=>setTraveller(e.target.value)} required/>
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
                            <input type="number" class="form-control" id="childrensBus" aria-describedby="emailHelp" placeholder="No. of Childrens" onChange={e=>setChidrens(e.target.value)} required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                        <div id="Airlines">
                                
                                <label for="transport"><i><h3>Select Airlines:</h3></i></label><br></br>
                                <select id="Airlines" onChange={e=>setAirlines(e.target.value)} required >
                                            <option value="0"><b>Select Airlines</b></option>
                                             <option value="Air_India"><b>Air India</b></option>
                                            <option value="King_Fisher"><b>King Fisher</b></option>
                                            <option value="Spice_Jet"><b>Spice Jet</b></option>
                                            
                        
                                </select>
                                <div class="invalid-feedback">
                                Please provide a valid zip.
                                </div>
                                
                        </div>

                        
                        <div id="Flightclass">
                                
                                <label for="transport"><i><h3>Select Flight Class:</h3></i></label><br></br>
                                <select id="FlightClass" onChange={e=>setFlightClass(e.target.value)}required >
                                            <option value="0"><b>Select Class</b></option>
                                             <option value="Class_A"><b>Class A</b></option>
                                            <option value="Class_B"><b>Class B</b></option>
                                            <option value="Class_C"><b>Class C</b></option>
                                            
                        
                                </select>
                                <div class="invalid-feedback">
                                Please provide a valid zip.
                                </div>
                                
                        </div>

                        




                  
                        
                       <br></br><br></br>

                       <h6>{serrmsg}</h6>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" class="btn btn-primary" onClick={handleSubmition}> Next</button>
                    </form> 

                    </div> 



          

      
            <div class="col-lg">
            <img src="../images/flight2.gif" alt="profile" className="profile"/>
            </div>
        </div>
      

    </div>

   
    </div>

    

      

      );
}

export default App;