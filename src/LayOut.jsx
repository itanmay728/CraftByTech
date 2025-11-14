import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import BouncingBalls from './components/BouncingBalls/BouncingBalls'
import Footer from './components/Footer/Footer'
import ChatBot from './components/ChatBot/ChatBot'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const LayOut = () => {
  return (
    <div>
      <ChatBot/>
      <ScrollToTop/>
      <BouncingBalls/>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LayOut