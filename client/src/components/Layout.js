import React from 'react'
import Home from './Home'
import Login from './authentication/Login'
import Register from './authentication/Register'
import Blog from './Blog'
import Footer from './Footer/Footer'
import Navigation from './Navigation/Navigation'

import { Outlet } from 'react-router-dom';

import NoPage from './NoPage'
import Logo from './Logo'

const Layout = () => {
  return (
    <div>   
      <Navigation/>
      <Outlet />

    </div>
  )
}

export default Layout
