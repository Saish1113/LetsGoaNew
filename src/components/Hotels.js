//import './personalDetails.css';
import  React, {Component} from 'react'
import {TextField} from "@material-ui/core"
import {Button} from 'react-bootstrap';
//import Travel from './Travel';
//import profile2 from "./images/hotels.gif";

import './hotel.css'
import  { useState,useEffect } from 'react';
import{Link,useHistory} from 'react-router-dom';
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
    
    const [City, setCity]=useState('');
    const [Hotels, setHotels]=useState('');
    const [Rooms, setRooms]=useState('');
    const [Days, setDays]=useState('');
    const [Nights, setNights]=useState('');
    const [Lunch, setLunch]=useState('');
    const [Breakfast, setBreak]=useState('');
    const [Dinner, setDinner]=useState('');
    const [User,setUserName]=useState('');


    const [serrmsg,setAErrmsg]=useState('');
	const history=useHistory();

    const [loginStatus, setLoginStatus] = useState("");



    const handleSubmition=(e)=>{
        e.preventDefault();
      
        if(!Hotels ){
            alert("please select the Hotel");
        }

        if(!Rooms ){
            alert("please enter the Rooms");
        }

        if(!Days ){
            alert("please select the Days");
        }

        if(!Nights ){
            alert("please select the Nights");
        }

        else if(Rooms<0||Rooms==0){
            alert("invalid no of rooms") ;   
        }

        else if(Days<0||Days==0){
            alert("invalid no of days") ;   
        }

        else if(Nights<0||Nights==0){
            alert("invalid no of nights");   
        }

        else{

            setAErrmsg("");
            history.push('/Activity_cards');
    
            register();

        }
    }

    const register = () => {
        Axios.post("http://localhost:3001/Hotels", {
            City:"Margao",
           Hotels:Hotels,
            Rooms:Rooms,
            Days:Days,
            Nights:Nights,
            Lunch:Lunch,
            Breakfast:Breakfast,
            Dinner:Dinner,
            User:User,

        
        
         
          //password: passwordReg,
        }).then((response) => {
          console.log(response.data);
          setLoginStatus({message: "Personal Details is successfull"});
          console.log(loginStatus);
        });
      };

 

  return (

    
    
    <div className="UserDetails2">
      <div id="d4">
      <button id="PersonalDetails"><h3>PERSONAL DETAILS</h3></button>
        <button id="TravelDetails"><h3>TRAVEL DETAILS</h3></button>
        <button id="AccDetails"><h3>ACCOMODATION DETAILS</h3></button>
        <button id="ActivityDetails"><h3>ACTIVITY DETAILS</h3></button>
        


      </div>
      <br>
      </br><br></br><br></br>  
      <div class="container" >
          <div class="row">
                <div class="col-lg">
                     <form class="needs-validation" novalidate>

                         
                     <div id="City">

                     
                        
                        
                    
                                
                                  
                     <div style={{  variant: "transparent", 
                                width:400,
                                paddingTop:50,
                                
                                }}>
                    <label for="transport"><i><h3>City</h3></i></label><br></br>
                    
                    <Dropdown>
                        <Dropdown.Toggle style={{  backgroundColor: "white", 
                                color:"Black",
                                width:465,
                                height:30,
                                
                                
                                
                                }} 
                                   >
                        Margao
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item onClick={(e)=>{e.preventDefault();history.push('/Hotels')}} >
                            Margao
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e)=>{e.preventDefault();history.push('/Hotels1')}}>
                            Panjim
                        </Dropdown.Item>
                        
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                                
                        </div>

                       

                     
                        <div id="hotels">
                                
                                <label for="transport"><i><h3>Hotels</h3></i></label><br></br>
                                <select id="hotels"onChange={e=>setHotels(e.target.value)}  required >
                                            <option value="0"><b>Select Hotels</b></option>
                                             <option value="Lalit"><b>Lalit</b></option>
                                            <option value="Xero degree"><b>Xero degree</b></option>
                                           
                        
                                </select>
                                <div class="invalid-feedback">
                                Please provide a valid zip.
                                </div>
                                
                        </div>

                     

                      

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>No. of Rooms</i></h3></label>
                            <input type="number" class="form-control" id="No_of_Rooms"  aria-describedby="emailHelp" placeholder="No Of Rooms" onChange={e=>setRooms(e.target.value)} required/>
                            <div class="invalid-feedback">
                                 Please provide a valid zip.
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>No. of Days</i></h3></label>
                            <input type="number" class="form-control" id="No_of_Days" aria-describedby="emailHelp" placeholder="No Of Days" onChange={e=>setDays(e.target.value)} required/>
                            <div class="invalid-feedback">
                                 Please provide a valid zip.
                            </div>
                        </div>

                 

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>No. of Nights:</i></h3></label>
                            <input type="number" class="form-control" id="No_of_Nights" aria-describedby="emailHelp" placeholder="No. of Nights"  onChange={e=>setNights(e.target.value)} required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>


              

                        
                        <div class="Breakfast">
                            
                            <input type="radio" id="Breakfast" name="breakfast"  value="Yes"  onChange={e=>setBreak(e.target.value)} class="custom-control-input"/>
                            <label class="custom-control-label"  for="customRadio1"><h4>Break Fast</h4></label>

                        </div>

                          
                        <div class="lunch">
                            
                            <input type="radio" id="lunch" name="lunch"  value="Yes"  onChange={e=>setLunch(e.target.value)}  class="custom-control-input"/>
                            <label class="custom-control-label" for="customRadio1"><h4>Lunch</h4></label>

                        </div>

                          
                        <div class="Dinner">
                            
                            <input type="radio" id="Dinner" name="dinner"  Value="Yes" onChange={e=>setDinner(e.target.value)}   class="custom-control-input"/>
                            <label class="custom-control-label" for="customRadio1"><h4>Dinner</h4></label>

                        </div>




                        




                  
                        
                       <br></br><br></br>

                       <h6>{serrmsg}</h6>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" class="btn btn-primary"  onClick={handleSubmition} >Next</button>
                    </form> 

                    </div> 



          

      
            <div class="col-lg">
            <img src="../images/hotels.gif" alt="profile" className="profile"/>
            </div>
        </div>
      

    </div>

   
    </div>

    

      

      );
}

export default App;