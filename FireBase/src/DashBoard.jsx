import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, DataBase } from './FireBaseConfig';
import { doc, getDoc, collection } from 'firebase/firestore';

export default function DashBoard() {

    const [ user, setUser ] = useState(null);
    const [ userData, setUserData ] = useState("");
    const [ record, setRecord ] = useState("");

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

    const fetchData = async () => {
      await getDoc(collection(DataBase,"Users")).then((data)=>{
        let details = data.docs.map((item)=>({docId : item.id, ...item.data()}))
        console.log(details);
        setRecord(details);
      })
    }

  return (
    <div>
        <h1>Welcome {userData.name} to DashBoard</h1>
    </div>
  )
}
