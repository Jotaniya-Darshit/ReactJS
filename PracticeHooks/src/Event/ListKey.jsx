import React, { useState } from 'react'

export default function ListKey() {
    const [c, setC] = useState([
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Bob', age: 35 },
        ]);
  return (
    <div>
        {
            c.map((item, index) => {
                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>Age: {item.age}</p>
                        </div>
                )}
            )
        }
    </div>
  )
}
