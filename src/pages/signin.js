import React, { useState , useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../store/userSlice'
import Facebook from "../components/facebook"
import { Line } from "../components/line"
import liff from "@line/liff"
import Slider from "react-slick";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Div from "react-bootstrap/Div";


// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const axios = require("axios").default;
// import {
//   Container,
//   FormWrap,
//   Icon,
//   FormContent,
//   Form,
//   FormH1,
//   FormLabel,
//   FormInput,
//   Text,
// } from "./singinElement";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  profilePicture: "",
  bio: "",
};

const SignIn = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const [formData, setFormData] = useState(initialState);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const submit = () => {
    // console.log(firstName);
    console.log(formData)
    axios
      .post("http://localhost:3001/api/users", 
         formData
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate("/about");
  };

  return (
    <div style={{backgroundColor:'black'}}>
      {/* <Line></Line> */}
   </div>
  );
};

export default SignIn;
