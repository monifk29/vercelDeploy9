import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import Res from '../Pages/Res'

const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Res/>}/>
    <Route path= "/cart" element={<Cart/>}/>
   </Routes>
  )
}

export default AllRoutes