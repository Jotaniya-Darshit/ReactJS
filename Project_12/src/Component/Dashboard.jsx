import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { auth, DB } from '../../FireConfig';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
export default function Dashboard() {

    const [ user, setUser ] = useState();
    const [ userData, setUserData ] = useState();
    const navi = useNavigate();


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
            await getDoc(doc(DB, "It's My DB", user)).then((data)=>{
                setUserData(data.data());
            })
        }
    }

    const signout = () =>{
        auth.signOut();
        navi("/");
    }


    return (
    <>
        <Navbar userData={userData} /> 
            <div className="dashboard-container">
                <h1 className="dashboard-title">Welcome to Dashboard</h1>
                <h1 className="dashboard-info">Name: {userData?.name}</h1>
                <h1 className="dashboard-info">Age: {userData?.age}</h1>
                <h1 className="dashboard-info">Email: {userData?.email}</h1>
                <h1 className="dashboard-info">City: {userData?.city}</h1>
            </div>
        </>
    );
}
