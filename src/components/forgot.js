import './forgotPassword.css';
// import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { set } from 'date-fns';
import { BrowserRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import {
  toast,
  ToastContainer
} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
//import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import styled, { ThemeProvider } from "styled-components";
//import error_page from '../components/pages/Error_404'



import DarkTheme, { createTheme } from 'react-dark-theme'

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


const lightTheme = {
  background: 'white',
  text: 'black',
}
 
const darkTheme = {
  background: 'black',
  text: 'white',
}
 
const myTheme = createTheme(darkTheme, lightTheme)



const SignIn = (props) => {

    const [loginStatus, setLoginStatus] = useState("");
    const [passwd, setpass] = useState("");
    const history = useHistory();
    
   
    
    
    // console.log(name);
    const handleSubmition=(e)=>{
      e.preventDefault();
   register();
    }
    

  const [theme, setTheme] = useState("dark");


  useEffect(() => {

      
        
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        console.log("data");
        setSessionUser(response.data.user[0]);
        console.log(response.data.user[0]);
        //setemail(response.data.user[0].email);
        //setusername(response.data.user[0].username);
        setpass(response.data.user[0].passwd);
        
      }
    });
  }, []);

  const register = () => {
    // alert("hiiii");
      Axios.post("http://localhost:3001/forgot", {
        
          passwd:passwd,
          user:props.usr,
        
      
        }).then((response) => {
            console.log(response.data);
           // setLoginStatus({message: "Personal Details is successfull"});
           // console.log(loginStatus);
           history.push("/sign-up");
          });
        };
        

//         //password: passwordReg,
//       }).then((response) => {
//         console.log(response.data[0].email);

//         var indexmail=response.data[0];

//         if(response.data[0].email==email)
//         {
//           alert("saish");
//         }
//         //setLoginStatus({message: "Personal Details is successfull"});
//         //console.log(loginStatus);
//       });
//     };

  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  //alert(props.status);
//   const history = useHistory();
//   const history2 = useHistory();

//   function handlefailure() {
//     history.push("/sign-up")
//   }

//   function handleSuccess(){
//     props.lg();
//     history2.push("/");
    
//   }


//   const [usernameReg, setUsernameReg] = useState("");
//   const [passwordReg, setPasswordReg] = useState("");

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [loginStatus, setLoginStatus] = useState("");
 const [SessionUser, setSessionUser] = useState("");

//   Axios.defaults.withCredentials = true;

  
//   const login = () => { 
//     Axios.post("http://localhost:3001/login", {
//       username: username,
//       password: password,
//     }).then((response) => {
//       if (response.data.message) {
//         //console.log("in if");
//         setLoginStatus(response.data.message);
//         toast.error(response.data.message);
//       handlefailure()
//       } else {
//         //console.log("inside else");
//         console.log(response.data[0].username);
//         setLoginStatus(response.data[0].username);
//         toast.success('Welcome '+response.data[0].username);
    
//         handleSuccess();
//         console.log("hiii");
//       }
//     }
//     );
//   };

//   useEffect(() => {
//     Axios.get("http://localhost:3001/login").then((response) => {
//       if (response.data.loggedIn == true) {
//         setSessionUser(response.data.user[0]);
//         console.log(SessionUser)
//       }
//     });
//   }, []);


var pass=document.getElementById("npswd");
var cpass=document.getElementById("repswd");

var err = document.getElementById("error");
var pss = document.getElementById("success");


function checkpassword(e)
{

console.log("in function");

if (pass.value == cpass.value)
{
   
    err.style.display = "none";
    pss.style.display = "block";
    document.getElementById("bubble1").disabled = false;
}
else if (document.getElementById("repswd").value != document.getElementById("npswd").value)
{

  err.style.display = "block";
  pss.style.display = "none";
  document.getElementById("bubble1").disabled = true;
}



}

return (
    <>
    {console.log(props.usr)}
      
    {/* <DarkTheme light={lightTheme} dark={darkTheme} /> */}
    <div className="login-ct1">
      <div className="main1" style={{ backgroundColor: myTheme.background, color: myTheme.text }}>
        <div className="sub-main1"style={{ backgroundColor: myTheme.background, color: myTheme.text }}>
          {/* <div> */}
          <div className="imgs1">
              <div className="container-image">
                <img src='../images/forgotpass.png' alt="profile" className="profile_login"/>
              </div>
          </div>
         
          <h1>New  Password</h1>

          <div id="j11">
            
            <div className="second-input1">
              <input type="text" 
              placeholder="  Enter New Password " 
              className="pass1"
              id="npswd"
             onChange={e=>setpass(e.target.value)} 
            required/>

            
            </div>

            <div class="confirm">
            <div className="second-input1">
              <input type="emailid" 
              placeholder="  confirm password" 
              className="pass12"
              id="repswd"
             // onChange={e=>setpass(e.target.value)}
              //onSubmit= {e=>checkpassword(e.target.value)}
            required/>
            </div>
            <div id="error" style={{display: 'none'}}>Password Does not Match</div>
            <div id="success" style={{display: 'none'}} >Password Match</div>
            </div>
           

            
          
          </div>
          <div className="login-button1">
            <button id='bubble1'    onClick={handleSubmition} >Reset</button>
          </div>
             
          {/* </div> */}

        </div>
      
      </div>
      {/* <h1> {loginStatus} </h1> */}
    </div>
    
  </>
);
}

export default SignIn;