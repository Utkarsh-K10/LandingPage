import React from 'react'
import './App.css'
import HomePage from './components/pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import { Header } from './components/Header'
import EnquiryPage from './components/pages/EnquiryPage'

export const App = ()=> {
  return(
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/admission' element={<EnquiryPage/>}/>
      </Routes>
    </React.Fragment>
  )
}

