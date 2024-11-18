import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Task/>
    </>
  )
}

export default App
