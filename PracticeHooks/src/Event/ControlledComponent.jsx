import React, { useState } from 'react'

export default function ControlledComponent() {
  const [name,setName]=useState("")
  const [sub,setSub]=useState("")
  const [city,setCity]=useState("")
  const [data,setData]=useState([])


  const handleSubmit =(e)=>{
      e.preventDefault()
      if (name && sub && city !='') {
          let obj ={name,sub,city}
      setData([...data,obj])
      setName("")
      setSub("")
      setCity("")
      
      }
      else{
          alert("Please Enter Value")
      }
  }
 const handleDelete = (index) => {
 setData(data.filter((_, i) => i !== index));
};

const handleUpdate = (index) => {
 const item = data[index];
  setName(item.name);
  setSub(item.sub);
  setCity(item.city);
  handleDelete(index);  
};
  return (
  <div>
      <h1>Controlled Component</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
          <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="text" placeholder='Enter Subject' value={sub} onChange={(e)=>setSub(e.target.value)}/>
          <input type="text" placeholder='Enter Your City' value={city} onChange={(e)=>setCity(e.target.value)}/>
          <button type='submit'>SUBMIT</button>
      </form>
      <table border='2' width='100%'>
          <thead>
              <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>City</th>
              <th>Action</th>
              </tr>
          </thead>
          <tbody>
              {
                  data &&
                  data.map((e,i)=>{
                      return <tr key={i}>
                          <td>{e.name}</td>
                          <td>{e.sub}</td>
                          <td>{e.city}</td>
                          <td>
                              <button  onClick={() => handleUpdate(i)}>Update
                              </button>
                              <button onClick={() => handleDelete(i)}>Delete</button>
                          </td>
                      </tr>
                  })
              }
          </tbody>
      </table>
  </div>
)
}
