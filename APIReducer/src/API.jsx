import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAPI } from './Features/APISlice';
import { addData, updateData, deleteData } from './Features/APISlice';

export default function API() {
    const dispatch = useDispatch();

    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        dispatch(fetchAPI());
    }, []);

    const record = useSelector((state) => state.ApiKey.record1);
    console.log(record);

    const addRecord = () => {
        if (editId == null) {
            let obj = { id: String(record.length + 1), image, title, description, price, rating };
            dispatch(addData(obj));
        } else {
            let updateObj = { id: editId, image, title, description, price, rating };
            dispatch(updateData({ editId, updData: updateObj }));
            setEditId(null);
        }

        setImage("");
        setTitle("");
        setDescription("");
        setPrice("");
        setRating("");
    };

    const deleteRecord = (id) => {
        dispatch(deleteData(id));
    };

    const updateRecord = (e) => {
        setEditId(e.id);
        setImage(e.image);
        setTitle(e.title);
        setDescription(e.description);
        setPrice(e.price);
        setRating(e.rating);
    };

    return (
        <div className="container">
            <h1>Product Management</h1>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Enter Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Enter Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <button onClick={addRecord}>
                    {editId ? "Update Data" : "Add Data"}
                </button>
            </div>
            <ul className="product-list">
                {record.map((e) => (
                    <li key={e.id} className="product-item">
                        <img src={e.image} alt={e.title} className="product-image" />
                        <div className="product-details">
                            <h2>{e.title}</h2>
                            <p>{e.description}</p>
                            <p>Price: ${e.price}</p>
                            <p>Rating: {e.rating}</p>
                        </div>
                        <div className="button-group">
                            <button onClick={() => deleteRecord(e.id)} className="delete-button">Delete</button>
                            <button onClick={() => updateRecord(e)} className="edit-button">Edit</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}