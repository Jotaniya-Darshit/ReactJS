import './App.css'
import Signup from './Component/Signup'
import Login from './Component/Login'
import Dashboard from './Component/Dashboard'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React, { StrictMode } from 'react'

function App() {

  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Signup} />
          <Route path="/Login" Component={Login} />
          <Route path="/Dashboard" Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

export default App
