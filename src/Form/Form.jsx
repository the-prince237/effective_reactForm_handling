import React, { useState } from 'react'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import produce from 'immer'

import './Form.css'

const initialState = {
    name: "",
    email: "",
    password: ""
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers:{
    setName: {
      reducer(state, action){
        return produce(state, (draft) => {
          draft.name = action.payload
        })
      },
      prepare: (name) => {
        return { 
          payload: name
        }
      }
    },
    setEmail: {
      reducer(state, action){
        return produce(state, (draft) => {
          draft.email = action.payload
        })
      },
      prepare: (email) => {
        return {
          payload: email
        }
      }
    },
    setPassword: {
      reducer(state, action){
        return produce(state, (draft) => {
          draft.password = action.payload
        })
      },
      prepare: (password) => {
        return{
          payload: password
        }
      }
    }
  }
})

const store = configureStore({
  reducer: {
    form: formSlice.reducer
  }
})

const { setName, setEmail, setPassword } = formSlice.actions;

const Form = () => {

  const [inputs, setInputs] = useState(initialState)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
  } 


  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Name</label>
        <input 
          type="text" 
          name='name' 
          placeholder='John Doe'
          value={inputs.name}
          onChange={(e) =>{
            setInputs({...inputs, name: e.target.value});
            store.dispatch(setName(inputs.name))
          }}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name='email' 
          placeholder='johndoe09@example.ex' 
          value={inputs.email}
          onChange={(e) =>{
            setInputs({...inputs, email: e.target.value});
            store.dispatch(setEmail(inputs.email))
          }}
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name='password' 
          placeholder='enter your password please'
          value={inputs.password}
          onChange={(e) =>{
            setInputs({...inputs, password: e.target.value});
            store.dispatch(setPassword(inputs.password))
          }}
        />
        <button type='submit'>Submit</button>
      </form>
      <div>
        {inputs.name} <br/> {inputs.email} <br/> {inputs.password}
      </div>
    </div>
  )
}

export default Form