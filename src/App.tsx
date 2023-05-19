import React from 'react'
import './App.css'
import HomePage from './components/pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import { Header } from './components/Header'
import EnquiryPage from './components/pages/EnquiryPage'
import SignupPage from './components/pages/SignupPage'
import AdminPage from './components/pages/adminPage'

export const App = ()=> {
  return(
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/admission' element={<EnquiryPage/>}/>
        <Route path='/signup' element = {<SignupPage/>}/>
        <Route path='/admin' element = {<AdminPage/>}/>
      </Routes>
    </React.Fragment>
  )
}

