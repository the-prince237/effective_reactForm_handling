import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div>
      <form className='form'>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' placeholder='John Doe' />
        <label htmlFor="email">Email</label>
        <input type="email" name='email' placeholder='johndoe09@example.ex' />
        <label htmlFor="password">Password</label>
        <input type="password" name='password' placeholder='enter your password please' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form