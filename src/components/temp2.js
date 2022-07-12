import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Col, Container, Row} from "react-bootstrap";
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import {
  toast,
  ToastContainer
} from 'react-toastify'

const App = () => {

  const history=useHistory();

    function handleSuccess(){
      toast.success("New User added Successfully");
      history.push("/sign-up");
    }

    const register_new = (fullname,username,email,password,phone,gender) => {
      console.log("Inside Register")
        Axios.post("http://localhost:3001/register", {
          fullname: fullname,
          username:username,
          password: password,
          phone: phone,
          email: email,
          gender: gender,
        }).then(function(response) {
          
          //handleSuccess()
        });
        handleSuccess();
      };
    
      useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
          if (response.data.loggedIn == true) {
           
          }
        });
      }, []);
    
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required("Fullname is required"),
        username: Yup.string()
          .required("Username is required")
          .min(6, "Username must be at least 6 characters")
          .max(20, "Username must not exceed 20 characters"),
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string()
          .required("Password is required")
          .min(6, "Password must be at least 6 characters")
          .max(40, "Password must not exceed 40 characters"),
        confirmPassword: Yup.string()
          .required("Confirm Password is required")
          .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
        acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
      });

      const formik = useFormik({
        initialValues: {
          fullname: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone:"",
          gender:"",
          acceptTerms: false,
        },
        validationSchema,
        // validateOnChange: false,
        // validateOnBlur: false,
        onSubmit: (data) => {
          //console.log(JSON.stringify(data, null, 2));
          const dname=data.fullname;
          const uname=data.username;
          const email=data.email;
          const dpass=data.password;
          const dgender=data.gender;
          const phone=data.phone;
          register_new(dname,uname,email,dpass,phone,dgender);
        },
      });

  return (
    <Container className="mt-5" id="reg" background-color="black">
    <Row>
    <div className="register-form"   style={{
        backgroundColor: 'cyan',
        font:"40px",
      }}>
    <Col lg={4} md={6} sm={12} className="mt-5 p-3">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            name="fullname"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.fullname}
          />
          <div className="text-danger">
            {formik.errors.fullname ? formik.errors.fullname : null}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="username"> Username </label>
          <input
            name="username"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <div className="text-danger">
            {formik.errors.username ? formik.errors.username : null}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email"> Email </label>
          <input
            name="email"
            type="email"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div className="text-danger">
            {formik.errors.email ? formik.errors.email : null}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone"> Contact No </label>
          <input
            name="phone"
            type="tel"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <div className="text-danger">
            {formik.errors.phone ? formik.errors.phone : null}
          </div>
        </div>
        <div className="form-group" >
        <label htmlFor="password"> Password </label>
          <div role="group" aria-labelledby="my-radio-group" onChange={formik.handleChange}
            value={formik.values.phone}>
            <label>
              <input type="radio" name="gender" value="Male" />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" />
              Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password"> Password </label>
          <input
            name="password"
            type="password"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className="text-danger">
            {formik.errors.password ? formik.errors.password : null}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword"> Confirm Password </label>
          <input
            name="confirmPassword"
            type="password"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <div className="text-danger">
            {formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null}
          </div>
        </div>
        <div className="form-group form-check">
          <input
            name="acceptTerms"
            type="checkbox"
            className="form-check-input"
            onChange={formik.handleChange}
            value={formik.values.acceptTerms}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className="text-danger">
            {formik.errors.acceptTerms ? formik.errors.acceptTerms : null}
          </div>
        </div>
        <div className="form-group" align="center" margin-top="30px">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button
            type="button"
            className="btn btn-warning float-right"
            onClick={formik.handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </Col>
    <Col lg={8} md={6} sm={12}>
      <div style={{
        padding: '10px',
      }}>
                        <img className="w-100" height="650px" src={'../images/sign-up.jpeg'} alt="image"/>
    </div>
    </Col>

    </div>
    </Row>
    </Container>
  );
}
export default App;