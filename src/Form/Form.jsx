import React, { useRef } from 'react'
import './Form.css'

const Form = () => {

  const nameRef = useRef("")
  const emailRef = useRef("")
  const passwordRef = useRef("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, name, password)
  } 

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name='name' 
          placeholder='John Doe'
          ref={nameRef}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name='email' 
          placeholder='johndoe09@example.ex' 
          ref={emailRef}
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name='password' 
          placeholder='enter your password please' 
          ref={passwordRef}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form