import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

export default function API() {
    const [record, setRecord] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [no, setNo] = useState("");
    const [address, setAddress] = useState("");
    const [editingId, setEditingId] = useState(null); 
    useEffect(() => {
        fetchAPI();
    }, []);

    const fetchAPI = async () => {
        let data = await axios.get("http://localhost:5001/contacts");
        console.log(data);
        setRecord(data.data);
    };

    const submit = async () => {
        if (editingId) {
            let updatedObj = { id: editingId, name, email, no, address };
            await axios.put(`http://localhost:5001/contacts/${editingId}`, updatedObj);
            setRecord(record.map(item => (item.id === editingId ? updatedObj : item)));
            setEditingId(null); 
        } else {
            let Obj = { id: String(record.length + 1), name, email, no, address };
            await axios.post("http://localhost:5001/contacts", Obj);
            setRecord([...record, Obj]);
        }
        setName("");
        setEmail("");
        setNo("");
        setAddress("");
    };

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:5001/contacts/${id}`);
        fetchAPI();
    };

    const editData = (item) => {
        setEditingId(item.id); 
        setName(item.name);
        setEmail(item.email);
        setNo(item.no);
        setAddress(item.address);
    };

    return (
        <div className="container">
            <h1>API</h1>
            <hr />
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Enter Name ' /><br />
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter Email' /><br />
            <input onChange={(e) => setNo(e.target.value)} value={no} type="tel" placeholder='Enter Phone no.' /><br />
            <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" placeholder='Enter Address' /><br />
            <button onClick={submit}>{editingId ? "Update Data" : "Add Data in DataBase"}</button>
            <hr />
            {
                record &&
                record.map((item, index) => {
                    return (
                        <div key={index} className="record">
                            <h2>{item.id}</h2>
                            <h2>{item.name}</h2>
                            <h3>{item.email}</h3>
                            <button onClick={() => deleteData(item.id)}>Delete</button>
                            <button onClick={() => editData(item)}>Edit</button>
                        </div>
                    )
                })
            }
        </div>
    );
}