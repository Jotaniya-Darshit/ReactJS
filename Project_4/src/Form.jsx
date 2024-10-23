import React, { useState } from 'react'
import './Form.css';

export default function Form() {

    const [dname, setDname] = useState("")
    const [cname, setCname] = useState("")
    const [pname, setPname] = useState("")
    const [price, setPrice] = useState("")
    const [cata, setCata] = useState("")
    const [error, setError] = useState("")
    const [warrantymonth, setWarrantymonth] = useState("")

    const NameRegex = /^[A-Za-z]+((\s)?([A-Za-z])+)*$/
    const ProuctRegex = /^[A-Za-z]+(((\'|\-|\.)?([A-Za-z])+))?$/


    const handle=(e)=>{
        e.preventDefault()
        if(!NameRegex.test(dname))
            {
                setError("Invalid Dealer Name")
            }
            else
            {
                setError("");
            }
        if(!NameRegex.test(cname))
            {
                setError("Invalid Company Name")
            }
            else
            {
                setError("");
            }
        if(!ProuctRegex.test(pname))
            {
                setError("Invalid  Name")
            }
            else
            {
                setError("");
            }
        

        if(warrantymonth>=6)
        {
            setError("Please Increase your Warranty")
        }
        else
        {
            setError("");
        }
    }

return (
    <>
        <h1>Regiter Item Form</h1>
        <form onSubmit={(e)=>handle(e)}>
            <table id='table'>
                <tr>
                    <td><label>Dealer Name : </label></td>
                    <td><input type="text" onChange={(e)=>setDname(e.target.value)} /> </td>
                </tr>
                <tr>
                    <td><label>Company Name : </label></td>
                    <td><input type="text" onChange={(e)=>setCname(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><label>Product Name : </label></td>
                    <td><input type="text" onChange={(e)=>setPname(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><label>Price : </label></td>
                    <td><input type="text" onChange={(e)=>setPrice(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><label>Catagory : </label></td>
                    <td>
                        <select onChange={(e)=>setCata(e.target.value)}>
                            <option selected hidden disabled>Selected</option>
                            <option value={"Electronic"}>Electronic Item</option>
                            <option value={"Fashion"}>Fashion Item</option>
                            <option value={"Sport"}>Sport Item</option>
                        </select>
                    </td>
                </tr>
                {
                    cata == "Electronic" && 
                                <tr>
                                    <td><label>Brand : </label></td>
                                    <td>
                                        <select>
                                            <option selected hidden disabled>Selected</option>
                                            <option value={"Apple"}>Apple</option>
                                            <option value={"Samsung"}>Samsung</option>
                                            <option value={"OnePlus"}>OnePlus</option>
                                        </select>
                                    </td>
                                </tr>
                }
                {
                    cata == "Electronic" && 
                                <tr>
                                    <td><label>Type : </label></td>
                                    <td>
                                        <select>
                                            <option selected hidden disabled>Selected</option>
                                            <option value={"Mobile"}>Mobile</option>
                                            <option value={"Buds"}>Buds</option>
                                            <option value={"Tablet"}>Tablet</option>
                                            <option value={"Cover"}>Cover</option>
                                        </select>
                                    </td>
                                </tr>
                }
                {
                    cata == "Electronic" && 
                                <tr>
                                    <td><label>Warranty(In Months) : </label></td>
                                    <td><input type="number" onChange={(e)=>setWarrantymonth(e.target.value)} /></td>
                                </tr>
                }




                {
                    cata == "Fashion" && 
                                <tr>
                                    <td><label>Brand : </label></td>
                                    <td>
                                        <select>
                                            <option selected hidden disabled>Selected</option>
                                            <option value="">Nike</option>
                                            <option value="">Adidas</option>
                                            <option value="">H&M</option>
                                        </select>
                                    </td>
                                </tr>
                }
                {
                    cata == "Fashion" && 
                                <tr>
                                    <td><label>Gender : </label></td>
                                    <td>
                                        <select>
                                            <option value="">Male</option>
                                            <option value="">Female</option>
                                        </select>
                                    </td>
                                </tr>
                }
                {
                    cata == "Fashion" && 
                                <tr>
                                    <td><label>Warranty (In Months) : </label></td>
                                    <td><input type="number" onChange={(e)=>setWarrantymonth(e.target.value)} /></td>
                                </tr>
                }



                {
                    cata == "Sport" && 
                                <tr>
                                    <td><label>Brand : </label></td>
                                    <td>
                                        <select>
                                            <option selected hidden disabled>Selected</option>
                                            <option value="">Nike</option>
                                            <option value="">Adidas</option>
                                            <option value="">Puma</option>
                                            <option value="">Lululemon</option>
                                        </select>
                                    </td>
                                </tr>
                }
                {
                    cata == "Sport" && 
                                <tr>
                                    <td><label>Item : </label></td>
                                    <td>
                                        <select>
                                            <option value="">Bat</option>
                                            <option value="">Ball</option>
                                            <option value="">Stump</option>
                                            <option value="">Badminton</option>
                                        </select>
                                    </td>
                                </tr>
                }
                {
                    cata == "Sport" && 
                                <tr>
                                    <td><label>Warranty (In Months) : </label></td>
                                    <td><input type="number" onChange={(e)=>setWarrantymonth(e.target.value)} /></td>
                                </tr>
                }



                {
                    error && <h3 style={{color:"red"}}>{error}</h3>
                }
                <tr>
                    <td colSpan={2} id='forbtn'>
                        <button>Register Item</button>
                    </td>
                </tr>
            </table>
        </form>
    </>
  )
}