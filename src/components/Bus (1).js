import logo from './logo.svg';
//import './personalDetails.css';
import  React, {Component} from 'react'
import {TextField} from "@material-ui/core"
import {Button} from 'react-bootstrap';
//import Travel from './Travel';
import profile2 from "./images/day_bus.gif";
import './Travel.css';
import  { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

 

function App() {


    const [Date, setDate]=useState('');
    const [State, setState]=useState('');
    

    const [Destination, setDestination]=useState('');
    const [Traveller, setTraveller]=useState('');
    const [Children, setChildren]=useState('');
    const [Adult, setAdult]=useState('');
    const [Stop, setStop]=useState('');
    

    const [serrmsg,setAErrmsg]=useState('');
    const navigate=useNavigate();


    
const handleSubmition=(e)=>{
e.preventDefault();

if(!Date || !State || !Stop  || !Destination || !Traveller || !Children || !Adult  ){
setAErrmsg("Fill all the fields");
return;
}
setAErrmsg("");
navigate('/Hotels');


}


    const handleSubmition1=(e)=>{
        e.preventDefault();
      
       
        navigate('/Flight');
    

    }

    const handleSubmition3=(e)=>{
        e.preventDefault();
      
       
       
        navigate('/Train');
    

    }

    const handleSubmition2=(e)=>{
        e.preventDefault();
      
       
        navigate('/Bus');
    

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
      <i><b><h1> Goa Tour</h1></b></i>
      <div id="d0">
        
       
      
        <button id="home"><b>HOME</b></button>{'  '}
        <button id="gallery"><b>GALLERY</b></button>{'  '}
        <button id="about us"><b>ABOUT US</b></button>{'  '}
        <button id="signin"><b>SIGNIN</b></button>{'  '}
        

      </div>
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
                        Select Transport
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="/Bus">
                            Bus
                        </Dropdown.Item>
                        <Dropdown.Item href="/Flight">
                            Flight
                        </Dropdown.Item>
                        <Dropdown.Item href="/Train">
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
                                             <option value="1"><b>Maharastra</b></option>
                                            <option value="2"><b>Delhi</b></option>
                                            <option value="3"><b>Punjab</b></option>
                                            <option value="4"><b>Rajasthan</b></option>
                        
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
                                             <option value="1"><b>Panjim</b></option>
                                            <option value="2"><b>Vasco</b></option>
                                            <option value="3"><b>Mapusa</b></option>
                                            <option value="4"><b>Canacona</b></option>
                        
                                </select>
                                
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>No. of Travellers</i></h3></label>
                            <input type="number" class="form-control" id="TravellersInputtext" aria-describedby="emailHelp" placeholder="No Of Travellers" onChange={e=>setTraveller(e.target.value)}required/>
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
            <img src={profile2} alt="profile" className="profile"/>
            </div>
        </div>
      

    </div>

   
    </div>

    

      

      );
}

export default App;