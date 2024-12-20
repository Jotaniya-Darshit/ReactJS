import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase-Config'

export default function SignIn() {

    const [ email,setEmail ] = useState("")
    const [ pass,setPass ] = useState("")
    const navigate = useNavigate("")

    const HandleLogIn = async() =>{
        await signInWithEmailAndPassword(auth,email,pass).then((data)=>{
            navigate("/Dashboard",{replace:true})
        })
    }

    const sign = () => {
        console.log(email,pass)
        navigate("/")
        } 

  return (
    <div className="login-container">
            <h1 className="login-title">Log In</h1>
            <form onSubmit={HandleLogIn}>
                <input
                    type="email"
                    className="login-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="login-input"
                    placeholder="Password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                />
                <button type="submit" className="login-button">Log In</button>
            </form>
            <button onClick={sign} className="link-button">Don't have an account? Sign up</button>
        </div>
  )
}
