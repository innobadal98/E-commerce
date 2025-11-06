import { useContext, useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Home from './components/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './components/pages/Details'
import Header from './components/header.jsx/Header'
import Footer from './components/footer/Footer'
import Non from './components/notAvilableRightNow/Non'

function App() {
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<Details/>}/>
      <Route path='/non' element={<Non/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
