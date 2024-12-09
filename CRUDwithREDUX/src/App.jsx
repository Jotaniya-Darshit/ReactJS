import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import CRUD from './Component/CRUD'
import { store }  from './App/Store'

function App() {

  return (
    <>
      <Provider store={store}>
        <CRUD/>
      </Provider>
    </>
  )
}

export default App
