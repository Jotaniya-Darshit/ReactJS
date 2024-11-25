import { useState } from 'react'
import { BrowerRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import READ from './CRUDwithROUTER/READ'
import CREATE from './CRUDwithROUTER/CREATE'
import DELETE from './CRUDwithROUTER/DELETE'
import UPDATE from './CRUDwithROUTER/UPDATE'

function App() {

    const [record,setRecord] = useState([
      {id:1,name:'John',age:25},
      {id:2,name:'Anna',age:30},
      {id:3,name:'Peter',age:35}
    ])

  return (
    <>
      <BrowerRouter>
        <Routes>
          <Route path="/" element={<READ data={record} />}></Route>
          <Route path="/create" element={<CREATE/>}></Route>
          <Route path="/delete" element={<DELETE/>}></Route>
          <Route path="/update" element={<UPDATE/>}></Route>
        </Routes>
      </BrowerRouter>
    </>
  )
}

export default App
