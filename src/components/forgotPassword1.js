import './forgotPassword.css';
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
import Forgot from '../components/forgot'; 




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
    const [email, setemail] = useState("");
    const [username, setusername]=useState('');
    const [isvalid, setvalid]=useState('');

    if(email==null)
    {
      alert("please enter Email")
    }

    if(username==null)
    {
      alert("please enter user name ")
    }
    
    
    
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
        setemail(response.data.user[0].email);
        setusername(response.data.user[0].username);
        
      }
    });
  }, []);

  const register = () => {
    // alert("hiiii");
      Axios.post("http://localhost:3001/forgotpassword1", {
        
          email:email,
          username:username,
         
      
       
        //password: passwordReg,
      }).then((response) => {
        console.log(response);

        var indexmail=response.data[0];

        if(response.data[0].email==email)
        {
          alert("Emailed matched");
          setvalid(true);
        }
        else{
          alert("Emailed not matched");
        }
        

        //setLoginStatus({message: "Personal Details is successfull"});
        //console.log(loginStatus);
      });
    };

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

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setSessionUser(response.data.user[0]);
        console.log(SessionUser)
      }
    });
  }, []);

  return (
    <>

      {
        isvalid?<Forgot usr={username}/>: <React.Fragment>
      
      
      {/* <DarkTheme light={lightTheme} dark={darkTheme} /> */}
      <div className="login-ct1">
        <div className="main1" style={{ backgroundColor: myTheme.background, color: myTheme.text }}>
          <div className="sub-main1"style={{ backgroundColor: myTheme.background, color: myTheme.text }}>
            {/* <div> */}
            <div className="imgs1">
                <div className="container-image">
                  <img src='../images/forgot.png' alt="profile" className="profile_login"/>
                </div>
            </div>
           
            <h1>Forgot Password</h1>

            <div id="j11">
              
              <div className="second-input1">
                <input type="emailid" 
                placeholder="  Enter emailId " 
                className="emailid1"
                onChange={e=>setemail(e.target.value)}
              required/>

              
              </div>
              <div className="second-input2">
                <input type="emailid" 
                placeholder=" Enter Username " 
                className="username "
                onChange={e=>setusername(e.target.value)}
              required/>

              
              </div>
            </div>
            <div className="login-button1">
              <button id='bubble1'  onClick={handleSubmition} >Next </button>
            </div>
               
            {/* </div> */}

          </div>
        
        </div>
        {/* <h1> {loginStatus} </h1> */}
      </div>
      </React.Fragment>
}
      
    </>
  );
}

export default SignIn;