import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './Component/SignUp'
import SignIn from './Component/SignIn'
import Dashboard from './Component/Dashboard'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={SignUp}></Route>
          <Route path='/signin' Component={SignIn}></Route>
          <Route path='/Dash' Component={Dashboard}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
