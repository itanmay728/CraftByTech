import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import BouncingBalls from './components/BouncingBalls/BouncingBalls'
import Footer from './components/Footer/Footer'
import ChatBot from './components/ChatBot/ChatBot'

const LayOut = () => {
  return (
    <div>
      <ChatBot/>
      <BouncingBalls/>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LayOut