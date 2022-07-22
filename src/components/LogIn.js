import './login.css';
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
//import error_page from '../components/pages/Error_404'

import DarkTheme, { createTheme } from 'react-dark-theme'

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

  //alert(props.status);
  const history = useHistory();
  const history2 = useHistory();

  function handlefailure() {
    history.push("/sign-up")
  }

  function handleSuccess(){
    props.lg();
    history2.push("/");
  }


  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [SessionUser, setSessionUser] = useState("");

  Axios.defaults.withCredentials = true;

  
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        //console.log("in if");
        setLoginStatus(response.data.message);
        toast.error(response.data.message);
      handlefailure()
      } else {
        //console.log("inside else");
        console.log(response.data[0].username);
        setLoginStatus(response.data[0].username);
        toast.success('Welcome '+response.data[0].username);
    
          handleSuccess();
      }
    }
    );
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setSessionUser(response.data.user[0]);
        console.log(SessionUser)
      }
    });
  }, []);

  return (
    <div className="login-ct">

    <div className="main" style={{ backgroundColor: myTheme.background, color: myTheme.text }}>
      
     <div className="sub-main" style={{ backgroundColor: myTheme.background, color: myTheme.text }}>
       <div>
        <div className="imgs">
           <div className="container-image">
             <img src='../images/renu.png' alt="profile" className="profile_login"/>
           </div>
        </div>
        <h1>Login Page</h1>

        <div id="j1">
           <div>
             <input type="text" 
             placeholder="user name" 
             className="name"
             onChange={(e) => {
              setUsername(e.target.value);
              }}
              required
            />
           </div>
           <div className="second-input">
             <input type="password" 
             placeholder="password" 
             className="name"
             onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            />
           </div>
      </div>
      <div className="login-button">
          <button id='bubble' onClick={login}>Login</button>
      </div>
            <p className="link">
              <a href="/Forgot">Forgot password ?</a> Or <a href="/abc">Sign Up</a>
            </p>
      </div>

    </div>
    <img id="login" src="../images/login.jpeg"/>
     </div>
    <h1> {loginStatus} </h1>
    </div>
  );
}

export default SignIn;