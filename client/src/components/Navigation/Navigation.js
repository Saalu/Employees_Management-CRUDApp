import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='navigation'>
      <ul>
          <div className='logo'>
             <li ><Link to="/">Logo</Link></li>
          </div>
          <div className='center'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </div>
        <div className='auth'>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;




