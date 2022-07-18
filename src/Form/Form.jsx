import React, { useReducer, useState } from 'react'
import './Form.css'

const initialState = {
  inputs : {
    name: "",
    email: "",
    password: ""
  }
};
const reducer = (state, action) => {
  switch(action.type){
    case 'SETINPUTS' :
      return { ...state, inputs: action.payload };
    default: 
      return state;
  }
}

const Form = () => {

  const [inputs, setInputs] = useState(initialState.inputs)

  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
  } 

  function handleChange(e){
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    dispatch({ type: 'SETINPUTS', payload: inputs })
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name='name' 
          placeholder='John Doe'
          value={inputs.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name='email' 
          placeholder='johndoe09@example.ex' 
          value={inputs.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name='password' 
          placeholder='enter your password please'
          value={inputs.password}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      <div>
        {state.inputs.name} {state.inputs.email} {state.inputs.password}
      </div>
    </div>
  )
}

export default Form