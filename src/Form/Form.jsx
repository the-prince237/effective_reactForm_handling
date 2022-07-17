import React, { useState } from 'react'
import './Form.css'

const Form = () => {

  const initialState = { name: "", email: "", password: "" }

  const [inputs, setinputs] = useState(initialState);
  
  const handleChange = (e) => {
    setinputs({ ...inputs, [`${e.target.name}`]: e.target.value })
  }

  return (
    <div className='form'>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(inputs)
      }}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name='name' 
          placeholder='John Doe' 
          value={inputs.name}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name='email' 
          placeholder='johndoe09@example.ex' 
          value={inputs.email}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name='password' 
          placeholder='enter your password please' 
          value={inputs.password}
          onChange={(e) => handleChange(e)}
        />
        <button type='submit'>Submit</button>
      </form>
      <div>
        <p>{inputs.name}</p>
        <p>{inputs.email}</p>
        <p>{inputs.password}</p>
      </div>
    </div>
  )
}

export default Form