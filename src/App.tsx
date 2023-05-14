import React from 'react'
import './App.css'
import HomePage from './components/pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import { Header } from './components/Header'

export const App = ()=> {
  return(
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </React.Fragment>
  )
}

