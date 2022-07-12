import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import Axios from "axios";
import {
    toast,
    ToastContainer
  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Logout() {
    const history = useHistory();

    const login = () => {
      Axios.get("http://localhost:3001/logout").then((response) => {
                console.log(response);
                toast.error(response.data);
                localStorage.removeItem('status');
                history.push('/sign-up');
                
              }
            )
    }
    return(
      login()
            
    )
}

export default Logout;

