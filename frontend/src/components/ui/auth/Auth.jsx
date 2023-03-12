import React, { useState } from 'react';
import axios from "axios";
import "./auth.css"
export default function Auth() {
  


  const [inputs, setInputs] = useState()

  const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    axios.post('http://localhost:80/auth/api/save');

    console.log(inputs);
  }

  

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <label>Email: </label>
        <input type="text" name='name' onChange={handleChange} />   
      </div>

      <div>
        <label>Password: </label>
        <input type="text" name='password' onChange={handleChange} /> 
      </div> 

      <div>
        <label>Name: </label>
        <input type="text" name='username' onChange={handleChange} /> 
      </div>     
      <button>Save</button>


    </form>
  )
}
