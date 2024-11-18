import { useState } from 'react'
import './App.css'
import CRUD from './CRUD'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CRUD/>
    </>
  )
}

export default App
