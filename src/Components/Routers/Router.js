import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Pages/Home'
import About_Us from '../Pages/About_Us'
import Blog from '../Pages/Blog'
import Book from '../Pages/Book'
import Loging from '../Pages/Loging'
import Singup from '../Pages/Singup'
import Blog_detile from '../Pages/Blog_detile'
import Location_detile from '../Pages/Location_detile'

function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='home' element={<Home />} />
                <Route path='blog' element={<Blog />} />
                <Route path='blog/:id' element={<Blog_detile />} />
                <Route path='book' element={<Book />} />
                <Route path='aboutus' element={<About_Us />} />
                <Route path='book/:id' element={<Location_detile />} />
                <Route path='loging' element={<Loging />} />
                <Route path='singup' element={<Singup />} />
            </Routes>
        </div>
    )
}

export default Router