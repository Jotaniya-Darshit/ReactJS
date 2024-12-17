import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { auth, DB } from '../../FireConfig';
export default function Dashboard() {

    const [ user, setUser ] = useState();
    const [ userData, setUserData ] = useState();

    useEffect(()=>{
        onAuthStateChanged(auth, (data)=>{
            if(data){
                setUser(data.uid);
                console.log(user);
                }
        });
    },[]);

    useEffect(()=>{
        fetchDetail();
    },[user]);

    const fetchDetail = async () =>{
        if(user){
            await getDoc(doc(DB, "It's My DB",user)).then((data)=>{
                setUserData(data.data());
                console.log(userData);
                console.log(user);
            })
        }
    }

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Welcome to Dashboard</h1>
            <h1 className="dashboard-info">Name: {userData && userData.name}</h1>
            <h1 className="dashboard-info">Age: {userData && userData.age}</h1>
            <h1 className="dashboard-info">Email: {userData && userData.email}</h1>
            <h1 className="dashboard-info">City: {userData && userData.city}</h1>
        </div>
    );
}
