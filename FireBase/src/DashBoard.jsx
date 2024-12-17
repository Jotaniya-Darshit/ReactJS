import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, DataBase } from './FireBaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function DashBoard() {

    const [ user, setUser ] = useState(null);
    const [ userData, setUserData ] = useState("");

    useEffect(()=>{
      onAuthStateChanged(auth, (data)=>{
        if(data){
          setUser(data.uid);
        }
      });
    },[]);

    useEffect(()=>{
      fetchUser();
    },[user]);

    const fetchUser = async () =>{
      if(user){
        await getDoc(doc(DataBase, "Users", user)).then((data)=>{
          setUserData(data.data());
          console.log(userData);
        })
      }
    }

  return (
    <div>
        <h1>Welcome {userData.name} to DashBoard</h1>
    </div>
  )
}
