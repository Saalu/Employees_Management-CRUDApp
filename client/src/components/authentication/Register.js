import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className='login-form-container'>
    <form>
      <h3>sign up</h3>
      <span>Username</span>
      <input type='username' name='' placeholder='Enter your username'/>
      <span>Email</span>
      <input type='email' name='' placeholder='Enter your email'/>
      <span>Password</span>
      <input type='password' name='' placeholder='Enter your password'/>

      <button type='submit' className='btn'>sign in</button>
      <p>already have an account? <><Link to='/login'>Sign in</Link></></p>
    </form>

  </div>
  )
}

export default Register
