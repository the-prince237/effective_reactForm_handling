import React, { useReducer } from 'react'
import './Form.css'

const initialState = {
  name: "",
  email: "",
  password: ""
};
const reducer = (state, action) => {
  switch(action.type){
    case 'SETNAME' :
      return { ...state, name: action.payload };
    case 'SETEMAIL' :
      return { ...state, email: action.payload };
    case 'SETPASSWORD' :
      return { ...state, password: action.payload }
    default: 
      return state;
  }
}

const Form = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
  } 

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name='name' 
          placeholder='John Doe'
          value={state.name}
          onChange={(e) => dispatch({ type: 'SETNAME', payload: e.target.value})}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name='email' 
          placeholder='johndoe09@example.ex' 
          value={state.email}
          onChange={(e) => dispatch({ type: 'SETEMAIL', payload: e.target.value})}
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name='password' 
          placeholder='enter your password please'
          value={state.password}
          onChange={(e) => dispatch({ type: 'SETPASSWORD', payload: e.target.value})}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form