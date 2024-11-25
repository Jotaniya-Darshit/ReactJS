import React from 'react'
import { Link } from 'react-router-dom'

export default function READ({data}) {
  return (
    <div>

      <Link to={"/create"}>CREATE</Link>
      <Link to={"/read"}>READ</Link>
      <Link to={"/update"}>UPDATE</Link>

      <h1>READ</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {
            data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>)
                })
          }
        </tbody>
      </table>
    </div>
  )
}
