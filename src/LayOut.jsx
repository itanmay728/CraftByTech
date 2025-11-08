import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import BouncingBalls from './components/BouncingBalls/BouncingBalls'

const LayOut = () => {
  return (
    <div>
      <BouncingBalls/>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default LayOut