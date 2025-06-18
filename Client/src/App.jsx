import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './pages/authpage/Login'
import Signup from './pages/authpage/Signup'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element = {<Signup />} />
        <Route path='/login' element = {<Login />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
