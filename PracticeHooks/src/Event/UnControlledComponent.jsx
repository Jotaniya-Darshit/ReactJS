import React, { useRef, useState } from 'react'

export default function UnControlledComponent() {
    const [data, setData] = useState([]);
    const nameRef = useRef();
    const cityRef = useRef();
    const subRef = useRef();
    const handlesubmit = (e) => {
        e.preventDefault();
        setData([...data, { Name: nameRef.current.value, City: cityRef.current.value, Subject: subRef.current.value }])
        nameRef.current.value = ''
        cityRef.current.value = ''
        subRef.current.value = ''
        nameRef.current.focus
    }
    return (
        <div>
            <h1>Uncontrolled Components</h1>
            <form onSubmit={(e) => handlesubmit(e)}>
                <input type="text" placeholder='Enter Your Name' ref={nameRef} />
                <input type="text" placeholder='Enter Your City' ref={cityRef} />
                <input type="text" placeholder='Enter Your Subject' ref={subRef} />
                <button type='submit'>Submit</button>
            </form>



            <table border="1" width="90%" >
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>CITY</th>
                        <th>SUBJECT</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, i) => {
                        return <tr key={i}>
                            <td>{e.Name}</td>
                            <td>{e.City}</td>
                            <td>{e.Subject}</td>
                        </tr>
                    })}
                </tbody>
            </table>



        </div>
    )
}
