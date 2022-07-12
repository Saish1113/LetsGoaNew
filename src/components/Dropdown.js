import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown1 from 'react-bootstrap/Dropdown';
import { useHistory } from "react-router-dom";
import { ArrowDropDownRounded } from "@material-ui/icons";

const Dropdown=()=>{
const history=useHistory();  
    return (
        <div style={{ display: 'block', 
                  width: 120, 
                  padding: 10 }}>
      <Dropdown1 navbar="true" alignRight>
        <Dropdown1.Toggle variant="success">
          Manage Account <i class="fa-solid fa-user-gear"></i>
        </Dropdown1.Toggle>
        <Dropdown1.Menu>
          <Dropdown1.Item onClick={(e)=>{e.preventDefault();history.push('/products')}}>
            Manage Account
          </Dropdown1.Item>
          <Dropdown1.Item href="#">
            Manage Bookings
          </Dropdown1.Item>
          <Dropdown1.Item href="/logout">
            Logout
          </Dropdown1.Item>
        </Dropdown1.Menu>
      </Dropdown1>
    </div>
  )
}

export default Dropdown;
