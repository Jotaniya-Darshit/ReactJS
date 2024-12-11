import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Task() {
  const [record, setRecord] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    let data = await axios.get("http://localhost:5002/products");
    setRecord(data.data);
  };

  const submit = async () => {
    if (editingId) {
      let updatedObj = { id: editingId, name, url, weight, price };
      await axios.put(
        `http://localhost:5002/products/${editingId}`,
        updatedObj
      );
      setRecord(
        record.map((item) => (item.id === editingId ? updatedObj : item))
      );
      setEditingId(null);
    } else {
      let Obj = { id: String(record.length + 1), name, url, weight, price };
      await axios.post("http://localhost:5002/products", Obj);
      setRecord([...record, Obj]);
    }
    setName("");
    setUrl("");
    setWeight("");
    setPrice("");
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:5002/products/${id}`);
    fetchAPI();
  };

  const editData = (item) => {
    setEditingId(item.id);
    setName(item.name);
    setUrl(item.url);
    setWeight(item.weight);
    setPrice(item.price);
  };
  return (
    <div className="main-container">
  <div className="form-container">
    <h1>Task</h1>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter Name"
    />
    <input
      type="text"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      placeholder="Enter URL"
    />
    <input
      type="text"
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
      placeholder="Enter Weight"
    />
    <input
      type="text"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      placeholder="Enter Price"
    />
    <button onClick={submit}>
      {editingId ? "Update Data" : "Add Data to Database"}
    </button>
  </div>

  <div className="record-container">
    {record &&
      record.map((item, index) => (
        <div key={index} className="record">
          <h2>{item.id}.</h2>
          <img src={item.url} alt={item.name} />
          <h2>{item.name}</h2>
          <h3>Price: ₹{item.price}</h3>
          <h3>Weight: {item.weight}</h3>
          <button onClick={() => deleteData(item.id)}>Delete</button>
          <button onClick={() => editData(item)}>Edit</button>
        </div>
      ))}
  </div>
</div>

  );
}
