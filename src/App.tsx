import React from 'react'
import './App.css'
import HomePage from './components/pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import AdminLoginPage from './components/pages/AdminLoginPage'
import { Header } from './components/Header'
import EnquiryPage from './components/pages/EnquiryPage'
import SignupPage from './components/pages/SignupPage'
import AdminPage from './components/pages/AdminPage'
import UserLoginPage from './components/pages/UserLoginPage'
import ProductPage from './components/pages/ProductPage'
import AddProductPage from './components/pages/AddProductPage'

export const App = ()=> {
  return(
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/admin/login' element={<AdminLoginPage/>}/>
        <Route path='/admission' element={<EnquiryPage/>}/>
        <Route path='/admin/signup' element = {<SignupPage/>}/>
        <Route path='/admin' element = {<AdminPage />}/>
        <Route path='/user/login' element = {<UserLoginPage/>}/>
        <Route path='/products' element = {<ProductPage/>}/>
        <Route path='/products/addproduct' element = {<AddProductPage/>} />
      </Routes>
    </React.Fragment>
  )
}

