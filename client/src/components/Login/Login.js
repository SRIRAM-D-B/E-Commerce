import './Login.css';
// import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
// import Link from "react-router-dom"
import {useDispatch } from "react-redux";
import { findUser } from '../../Redux/LoginSlice.js';



const Login = () => {
  const navigate = useNavigate();
const dispatch = useDispatch();

const submit =(e)=>{
  e.preventDefault();
  const username = e.target.elements[0].value;
  const Password = e.target.elements[1].value;
  e.target.elements[0].value = "";
  e.target.elements[1].value = "";
  dispatch(findUser({username,Password}));
  navigate("../landing");
}


  
  return (
    <div >
      <h1 className=''>Amazon</h1>
      <form onSubmit={submit} className="Login-form"> 
        <label>Login</label>
        <input  type='text' placeholder='username' /><br/>
        <label>Password</label>
        <input   type='password' placeholder='🔐' /><br/>
        <button  type='submit' >submit</button>
      </form>
    </div>
  );
}

export default Login;
