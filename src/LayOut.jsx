import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import BouncingBalls from './components/BouncingBalls/BouncingBalls'
import Footer from './components/Footer/Footer'

const LayOut = () => {
  return (
    <div>
      <BouncingBalls/>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LayOut