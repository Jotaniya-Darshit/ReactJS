import './App.css'
import DashBoard from './DashBoard'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' Component={SignUp}></Route>
          <Route path='/signin' Component={SignIn}></Route>
          <Route path='/dashboard' Component={DashBoard}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
