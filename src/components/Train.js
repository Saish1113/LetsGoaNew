//import './personalDetails.css';
import  React, {Component} from 'react'
import {TextField} from "@material-ui/core"
import {Button} from 'react-bootstrap';
//import Travel from './Travel';
//import profile2 from "../images/train.gif";
import{useHistory} from 'react-router-dom';
import  { useState,useEffect } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import './train.css'

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
                const [User,setUserName]=useState('');
                const [Date, setDate]=useState('');
                const [State, setState]=useState('');
                const [Boarding, setBoarding]=useState('');

                const [Destination, setDestination]=useState('');
                const [Traveller, setTraveller]=useState('');
                const [Children, setChildren]=useState('');
                const [Adult, setAdult]=useState('');
                const [Class, setClass]=useState('');
                

                const [serrmsg,setAErrmsg]=useState('');
                const history=useHistory();

                const [loginStatus, setLoginStatus] = useState("");


                
    const handleSubmition=(e)=>{
        e.preventDefault();

        const t=Number(Adult)+Number(Children);
      
        if(!Date ){
            alert("please fill the date ");
        }

        if( !State  ){
            alert("please enter the state");
        }

        if( !Boarding  ){
            alert("please enter boarding station");
        }

        if( !Destination  ){
            alert("please enter Destination");
        }

        if( !Traveller  ){
            alert("please enter total no of travellers ");
        }

        if( !Children ){
            alert("please enter no of children");
        }

        if( !Adult ){
            alert("please enter no of Adults");
        }

        if( !Class ){
            alert("please select All the Train class");
        }

        else if(Date<"2022-07-20"){
            alert("enter Proper Date  ") ;   
        }
        
        else if(Traveller<t){
            alert("invalid no of travelers ") ;   
        }

        
        else if(Traveller>t){
            alert("invalid no of travelers ") ;   
        }

        else if(Adult<0){
            alert("invalid no of Adults ") ;   
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
        Axios.post("http://localhost:3001/Train", {
          Date:Date,
          State:State,
          Boarding:Boarding,
          Destination:Destination,
          Traveller:Traveller,
          Adult:Adult,
          Children:Children,
          Class:Class,
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
    console.log("Inside new Function");
    Axios.post("http://localhost:3001/activity_table", {
        User:User,
        Mode:"Train",
       
        //password: passwordReg,
      }).then((response) => {
        console.log(response);
        //setLoginStatus({message: "Personal Details is successfull"});
        //console.log(loginStatus);
      });
}


  return (

    
    
    <div className="UserDetails3">
     
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
                        Train
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item onClick={(e)=>{e.preventDefault();history.push('/Train')}}>
                            Train
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{e.preventDefault();history.push('/Flight')}}>
                            Flight
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{e.preventDefault();history.push('/Bus')}}>
                            Bus
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
                                <select id="state" onChange={e=>setState(e.target.value)} required >
                                            <option value="0"><b>Select Boarding state</b></option>
                                             <option value="Maharashtra"><b>Maharastra</b></option>
                                            <option value="Delhi"><b>Delhi</b></option>
                                            <option value="Punjab"><b>Punjab</b></option>
                                            <option value="Rajasthan"><b>Rajasthan</b></option>
                        
                                </select>
                                <div class="invalid-feedback">
                                Please provide a valid zip.
                                </div>
                                
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Enter Boarding Station</i></h3></label>
                            <input type="Text" class="form-control" id="Adhar" aria-describedby="emailHelp" placeholder="Enter Boarding Stop"  onChange={e=>setBoarding(e.target.value)}required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                        <div id="Destination">
                                
                                <label for="transport"><i><h3>Select Destination:</h3> </i></label><br></br>
                                <select id="Dest"onChange={e=>setDestination(e.target.value)} required >
                                            <option value="0"><b>Select Destination</b></option>
                                             <option value="Vasco"><b>Vasco</b></option>
                                             <option value="margao"><b>Margao</b></option>
                                             <option value="Curchorem"><b>Curchorem</b></option>
                                             <option value="Balli Cuncolim"><b>Balli Cuncolim</b></option>
                                           
                        
                                </select>
                                
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>No. of Travellers</i></h3></label>
                            <input type="number" class="form-control" id="TravellersInputtext" aria-describedby="emailHelp" placeholder="No Of Travellers"  onChange={e=>setTraveller(e.target.value)}required/>
                            <div class="invalid-feedback">
                                 Please provide a valid zip.
                            </div>
                        </div>

                 

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>No. of Adults :</i></h3></label>
                            <input type="number" class="form-control" id="AdultsBus" aria-describedby="emailHelp" placeholder="No. of Adults"  onChange={e=>setAdult(e.target.value)} required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>


                    
                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>No. of Childrens:</i></h3></label>
                            <input type="number" class="form-control" id="childrensBus" aria-describedby="emailHelp" placeholder="No. of Childrens"  onChange={e=>setChildren(e.target.value)}required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                        <div id="TrainClass">
                                
                                <label for="transport"><i><h3>Select train Class:</h3></i></label><br></br>
                                <select id="TrainClass"onChange={e=>setClass(e.target.value)}  required >
                                            <option value="0"><b>Select Class</b></option>
                                             <option value="AC"><b>Ac</b></option>
                                            <option value="Class A"><b>Class A</b></option>
                                            <option value="Class B"><b>Class B</b></option>
                                            
                        
                                </select>
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
            <img src='../images/train.gif' alt="profile" className="profile"/>
            </div>
        </div>
    </div>

   
    </div>

    

      

      );
}

export default App;