import React, { useEffect, useState } from 'react'

export default function Task() 
{
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[gender,setGender]=useState("")
    const[city,setCity]=useState("")
    const[record,setRecord]=useState([])
    const[editID,setEditID]=useState(null);

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("Information")) || [];
        setRecord(data);
    },[])

    const handleSubmit = () => {
        if(editID == null)
        {
            let obj = { id:Date.now(),name,age,gender,city}
            setRecord([...record,obj]);
            localStorage.setItem("Information",JSON.stringify([...record,obj]));
        }
        else
        {
            let singleData = record.find((item)=>item.id == editID);
            singleData.id = editID;
            singleData.name = name;
            singleData.age = age;
            singleData.gender = gender;
            singleData.city = city;
            localStorage.setItem("Information",JSON.stringify(record));
        }

        setName("")
        setAge("")
        setGender("")
        setCity("")
        setEditID(null)
    }
    const handleEdit = (i) => {
        let singleData = record.find((item)=> item.id == i);

        setName(singleData.name)
        setAge(singleData.age)
        setGender(singleData.gender)
        setCity(singleData.city)
        setEditID(i)
    }
    const handleDelete = (i) => {
        let data = record.filter((item)=>item.id != i)
        setRecord(data)
        localStorage.setItem("Information", JSON.stringify(data))
    }
  return (
    <>
        <center>
            <h3>INQURY FORM</h3>
            <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' /><br />
                <input type="Number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter Your AGE' /><br />
                <label>Gender : </label>
                <input type="radio" name='gender' value="Male" onChange={(e)=>setGender(e.target.value)} />
                <label> Male </label>
                <input type="radio" name='gender'  value="Female" onChange={(e)=>setGender(e.target.value)} />
                <label> Female </label> <br />
                <label>City : </label>
                <select onChange={(e)=>setCity(e.target.value)} >
                    <option disabled selected >Select City</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Bangalore">Bangalore</option>
                </select><br /><br />
                <button onClick={(handleSubmit)}>{editID == null ? "ADD" : "UPDATE" }</button>
            </div>
            <br /><br /><br />
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th colSpan={2} >Actions</th>
                </thead>
                <tbody>
                    {
                        record &&
                        record.map((e,i)=>{
                            return <tr key={i}>
                                <td>{i+1}</td>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.gender}</td>
                                <td>{e.city}</td>
                                <td><button onClick={()=>handleEdit(e. id)}>Edit</button></td>
                                <td><button onClick={()=>handleDelete(e. id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </center>
    </>
  )
}
