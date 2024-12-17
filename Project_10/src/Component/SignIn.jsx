import React from 'react'
import { auth } from '../../FireConfig'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

export default function SignIn() {
    const [ email,setEmail ] = useState("")
    const [ pass,setPass ] = useState("")
    const navigate = useNavigate("")

    const HandleLogIn = async() =>{
        await signInWithEmailAndPassword(auth,email,pass).then((data)=>{
            navigate("/Dash",{replace:true})
        })
    }


    return (
      <div>
          <style>
              {`
                  .container {
                      max-width: 400px;
                      margin: 0 auto;
                      padding: 20px;
                      border: 1px solid #ccc;
                      border-radius: 8px;
                      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                      background-color: #f9f9f9;
                  }
                  h1 {
                      text-align: center;
                      color: #333;
                  }
                  input {
                      width: 100%;
                      padding: 10px;
                      margin: 10px 0;
                      border: 1px solid #ccc;
                      border-radius: 4px;
                  }
                  button {
                      width: 100%;
                      padding: 10px;
                      background-color: #007bff;
                      color: white;
                      border: none;
                      border-radius: 4px;
                      cursor: pointer;
                  }
                  button:hover {
                      background-color: #0056b3;
                  }
              `}
          </style>
          <div className="container">
              <h1>SignIn</h1>
              <input 
                  type="text" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder='Enter Your Email' 
              />
              <input 
                  type="password" 
                  onChange={(e) => setPass(e.target.value)} 
                  placeholder='Enter Your Password' 
              />
              <button onClick={HandleLogIn}>Sign In</button>
          </div>
      </div>
  );
}
