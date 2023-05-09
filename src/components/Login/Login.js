import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
 // import Vector(15).png from '../assets/Vector(15).png';
// import PropTypes from 'prop-types';


const Login = () => {
  let [ email, setEmail] = useState('');
  let [ password, setPassword ] = useState('');

  const navigate = useNavigate();
  
  const submitForm = (elem) =>{
    console.log("submitted");
     elem.preventDefault();
      const inputEntry = {
         email: email,
         password: password,
      }
      console.log('inputEntry', inputEntry);

       let storePackage = JSON.stringify(localStorage.setItem('Email', email))
      console.log("storePackage>>", storePackage);
      if(email && password){
        setTimeout(() => navigate('/dashboard'), 2000)
        console.log("successful");  
      }
  }

  const handleEmail = (elem) =>{
    let input = elem.target.value.trim();
     setEmail(input);
     if (input.length === 0) {
      elem.target.setCustomValidity('Please enter an email address');
    } else if (!input.includes('@') || !input.includes('.')) {
      elem.target.setCustomValidity('Please enter a valid email address');
    } else {
      elem.target.setCustomValidity(''); 
    }
   };


   const handlePassword = (elem) =>{
    let input = elem.target.value.trim();
     setPassword(input);
     if (input.length === 0) {
      elem.target.setCustomValidity('Please enter a password');
    } else if (input.length < 8) {
      elem.target.setCustomValidity('Password must be at least 8 characters long');
    } else if (!input.match(/[A-Z]/)) {
      elem.target.setCustomValidity('Password must contain at least one uppercase letter');
    } else if (!input.match(/[a-z]/)) {
      elem.target.setCustomValidity('Password must contain at least one lowercase letter');
    } else {
      elem.target.setCustomValidity('');
    }
   };

  return (

    <div className="bg-indigo-700 w-full h-screen py-20">
      <p className="text-center text-white mt-9 text-3xl font-bold">Login Page</p>

      <form onSubmit={submitForm} className="mt-[40px]">
        <div className="flex flex-col px-[90px] md:px-[440px]">
          <label className="text-white">Email</label>
          <input onChange={handleEmail} value={email} className="border-2 rounded px-3 font-bold py-3 outline-blue-400" type="email" placeholder="Enter Email"/>
        </div>

        <div className="flex flex-col  mt-9 px-[90px] md:px-[440px]">
          <label className="text-white">Password</label>
          <input onChange={handlePassword} value={password} className="border-2 rounded px-3 font-bold py-3 outline-blue-400" type="password" placeholder="Enter Password"/>
        </div>

        <div className="flex mt-5 text-white">
          <button className="bg-blue-500 md:px-[156px] px-28 py-3 rounded mx-auto">Submit</button>
        </div>
      </form>
    </div>


    )
}
  

  

// Login.propTypes = {};

// Login.defaultProps = {};

export default Login;
