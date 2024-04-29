import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-form-container'>
      <form>
        <h3>sign in</h3>
        <span>Email</span>
        <input type='email' name='' placeholder='Enter your email'/>
        <span>Password</span>
        <input type='password' name='' placeholder='Enter your password'/>

        <button type='submit' className='btn'>sign in</button>
        <p>don't have an account? <><Link to='/register'>Create one</Link></></p>
      </form>

    </div>
  )
}

export default Login
