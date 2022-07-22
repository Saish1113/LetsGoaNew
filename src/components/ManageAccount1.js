import React from 'react'
//import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import './manageAccount.css';
import Axios from "axios";
import  { useState,useEffect } from 'react';
    

const AccountManage = () => {
    // const paperStyle = { padding: '30px 20px', width: 300, margin: "200px auto" }
    // const headerstyle = { margin: 0 }

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [username, setusername]=useState('');
    const [phone, setphone]=useState('');
    const [password, setPassword]=useState('');
    const [id, setid]=useState('');
    
    console.log(name);
    const handleSubmition=(e)=>{
      e.preventDefault();
   register();
    }
    
    useEffect(() => {

      
        
      Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn == true) {
          console.log("data");
          //setSessionUser(response.data.user[0]);
          console.log(response.data.user[0]);
          setName(response.data.user[0].fullname);
          setEmail(response.data.user[0].email);
          setusername(response.data.user[0].username);
          setphone(response.data.user[0].Phone);
          setid(response.data.user[0].id);
          //setName(response.data.user[0].fullname);
         // setEmail(response.data.user[0].email);
          //setUserName(response.data.user[0].username);
        }
      });
    }, []);

   const register = () => {
    // alert("hiiii");
      Axios.post("http://localhost:3001/ManageAccount", {
        
          name: name,
          //address: Address,
          //age:Age,
          email:email,
          username:username,
          //dob: Dob,
          phone:phone,
          password:password,
          id:id,
      
       
        //password: passwordReg,
      }).then((response) => {
        console.log(response);
        //console.log(loginStatus);
      });
    };

    var pass=document.getElementById("npswd");
    var cpass=document.getElementById("repswd");

    var err = document.getElementById("error");
    var pss = document.getElementById("success");
  

   function checkpassword(e)
   {



    if (pass.value == cpass.value)
    {
       
        err.style.display = "none";
        pss.style.display = "block";
        document.getElementById("submitbtn").disabled = false;
    }
    else if (document.getElementById("repswd").value != document.getElementById("npswd").value)
    {

      err.style.display = "block";
      pss.style.display = "none";
      document.getElementById("submitbtn").disabled = true;
    }
    


   }
  

   
    return (
    <>
         <div className="container border"
        style={{marginTop:"50px",
        width:'50%',
        backgroundImage:`url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`,
        backgroundPosition :"center",
        backgroundSize: "cover",
        }}>

        <h1><i><b>Manage Account</b></i></h1>
        <div class="form_div">

        <form runat="server" id="Userprofile" name="Userprofile">
            <div class="row">
                <div class="col-sm-6" style={{display: 'none'}}>
                    <div class="form-group">
                        <label for="ID" class="form-label">ID:</label>
                        <input type="text" class="form-control1" placeholder={id} name="session_id" id="session_id" runat="server" onChange={e=>setid(e.target.value)} />
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="fname" class="form-label"><b>Full Name:</b></label>
                        <input type="text" class="form-control1" placeholder={name}  name="fname" id="fname"  onChange={e=>setName(e.target.value)}/>
                    </div>
                </div>
              
 
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="email" class="form-label"><b>Email:</b></label>
                        <input type="text" class="form-control1" id="email" placeholder={email} name="email"  width="36px" onChange={e=>setEmail(e.target.value)}/>
                    </div>
                </div>
            </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="uname" class="form-label"><b>Username:</b></label>
            <input type="text" class="form-control1" id="uname" placeholder={username} name="uname"  pattern = "[A-Za-z]{4,10}[#!@$%^&*-_]?[0-9]{1,5}" title="Please Enter in format Abcd@123 Or abcd@123" onChange={e=>setusername(e.target.value)}/>
          </div>
        </div>

          <div class="col-sm-6">
          <div class="form-group">
            <label for="mobile" class="form-label"><b>Mobile Number:</b></label>
            <input type="text" id="mobile" class="form-control1" placeholder={phone} name="mobile" runat="server" onChange={e=>setphone(e.target.value)}/>
          </div>
        </div>

      </div>
      


      {/* <div class="row">

        <div class="col-sm-6"style={{display: 'none'}}>
          <div class="form-group">
            <label for="pswd" class="form-label">Old Password:</label>
            <input type="text" id="oldpswd" class="form-control" placeholder="Enter Password" name="oldpswd" runat="server"/>
          </div>
        </div>

      </div> */}


      <div class="row">

        <div class="col-sm-6">
          <div class="form-group">
            <label for="pswd" class="form-label"><b> Password:</b></label>
            <input type="text" id="npswd" class="form-control1" placeholder="Enter Password" name="npswd" pattern = "([A-Za-z0-9]{1,}[#!@$%^&-]?[0-9]){8,}" title="Please Enter in format Jhon@2121" />
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label for="repswd" class="form-label"><b>ConfirmPassword:</b> </label>
            <input type="text" id="repswd" class="form-control1"  placeholder="Confirm-Password" name="repswd"  runat="server" pattern = "([A-Za-z0-9]{1,}[#!@$%^&-]?[0-9]){8,}" title="Please Enter in format Jhon@2121" onChange={e=>checkpassword(e.target.value)}/>
          </div>
          <div id="error" style={{display: 'none'}}>Password Does not Match</div>
          <div id="success" style={{display: 'none'}} >Password Match</div>
        </div>

      </div>


      <br/>

      <div class="justify-content-center">
        <button type="submit" class="btn btn-primary" id="submitbtn"  onClick={handleSubmition}>Update</button> 
      </div>
        </form>

        </div>

    </div>

        


    </>

    )
}



export default AccountManage;