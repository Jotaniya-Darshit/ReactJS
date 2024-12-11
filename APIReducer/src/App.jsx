import { useState } from 'react'
import './App.css'
import API from './API'
import { store } from './Component/Store'
import { Provider } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <API/>
      </Provider>
    </>
  )
}

export default App
