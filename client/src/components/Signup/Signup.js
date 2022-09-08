import React from 'react';
import './Signup.css'
import {useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import Login from '../Login/Login'; 
import { newUser } from '../../Redux/SignupSlice';
import { useNavigate} from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlesignup = (e) =>{
    const userName = e.target.elements[0].value;
    const userEmail = e.target.elements[1].value;
    const userPassword = e.target.elements[2].value;
    const userImage = e.target.elements[3].value;
    e.target.elements[0].value = "";
    e.target.elements[1].value = "";
    e.target.elements[2].value = "";
    e.target.elements[3].value = "";
    e.preventDefault();
    dispatch(newUser({userName,userEmail,userPassword,userImage}));
    navigate("../login");
  }

  return (
    <div>
      <form className='signup-form' onSubmit={handlesignup}>
        <img src="../img/user.png" alt="" className='userimage'></img>
        <input type="text" placeholder='username' className='username'></input>
        <input type="email" placeholder='e-mail' className='email'></input>
        <input type="password" placeholder='password' className='password'></input>
        <input type="text" placeholder='Image link' accept="image/png, image/jpeg" className='image'></input>
        <button className="btn">Signup</button>
        <button><Link to="/Login">Login</Link></button>
      </form>
    </div>
  )
}

export default Signup
