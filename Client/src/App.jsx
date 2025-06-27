import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './pages/authpage/Login'
import Signup from './pages/authpage/Signup'
import UploadBook from './pages/Books/UploadBook'
import Home from './pages/Home/Home'
import BookDetail from './pages/Books/BookDetail'
import EditBook from './pages/Books/EditBook'




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/upload" element={<UploadBook />} />
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetail />} />
<Route path="/book/edit/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
