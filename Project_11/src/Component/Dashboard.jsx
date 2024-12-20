import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, DataBase } from "../Firebase-Config";
export default function Dashboard() {
  const [user, setUser] = useState();
  const [userData, setUserData] = useState();
  const [task, setTask] = useState("");
  const [sub, setSub] = useState("");
  const [record, setRecord] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const navi = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data.uid);
      }
    });
  }, []);

  useEffect(() => {
    fetchUser();
    fetchData();
  }, [user]);

  const fetchUser = async () => {
    if (user) {
      await getDoc(doc(DataBase, "It's My DB", user)).then((data) => {
        setUserData(data.data());
      });
    }
  };

  const logout = () => {
    auth.signOut();
    navi("/");
  };

  const fetchData = async () => {
    const allData = await getDocs(collection(DataBase, "It's My DB"));
    let sameData = allData.docs.filter((data) => data.data().userId == user);
    const filteredData = sameData.map((data) => ({
      docId: data.id,
      ...data.data(),
    }));
    setRecord(filteredData);
  };

  const addData = async () => {
    if (editIndex == null) {
      await addDoc(collection(DataBase, "It's My DB"), {
        task,
        sub,
        userId: user,
      }).then((data) => {
        setRecord([...record, { task, sub, userId: user }]);
      });
    } else {
      await updateDoc(doc(DataBase, "It's My DB", editIndex), {
        task,
        sub,
        userId: user,
      });
      fetchData();
    }
    setEditIndex(null);
    setTask("");
    setSub("");
  };

  const deleteData = async (id) => {
    await deleteDoc(doc(DataBase, "It's My DB", id)).then(() => {
      let remainingData = record.filter((data) => data.docId !== id);
      setRecord(remainingData);
    });
  };

  const editData = async (id) => {
    let singledata = record.find((item) => item.docId == id);
    setEditIndex(id);
    setTask(singledata.task);
    setSub(singledata.sub);
  };

  return (
    <>
      <div className="navbar">
        <h1>My Application</h1>
        <div className="navbar-menu">
          <button onClick={logout}>Logout</button>
        </div>
      </div>

      <div className="dashboard-container">
        <h1>Welcome {userData && userData.name} to Dashboard</h1>
        <input
          type="text"
          value={task}
          placeholder="Enter Your Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={sub}
          placeholder="Enter Your Description"
          onChange={(e) => setSub(e.target.value)}
        />
        <br />
        <button onClick={addData}>{editIndex ? "Update" : "Add Data"}</button>
        {
            record > 0 ? (           
                record.map((task) => {
                return (<div key={task.docId} className="record-item">
               <div className="product-info">
                 <h4>Task : {task.task}</h4>
                 <p>Description: {task.sub}</p>
               </div>
               <div>
                 <button
                   className="edit-button"
                   onClick={() => editData(task.docId)}
                 >
                   Edit
                 </button>
                 <button
                   className="delete-button"
                   onClick={() => deleteData(task.docId)}
                 >
                   Delete
                 </button>
               </div>
             </div>)
 })) : (<p>No Data Found</p>)

          
        }
      </div>
    </>
  );
}
