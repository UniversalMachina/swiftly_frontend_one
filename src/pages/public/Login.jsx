import React, { useState } from "react";
import axios from 'axios'; // Ensure axios is imported
import LoginComponent from "../../components/public/Authentication/LoginComponent";

const Login = ({ onLogin }) => {


  return (

        <LoginComponent onLogin={onLogin}/>

  );
};

export default Login;
