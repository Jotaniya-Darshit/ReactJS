import React, { useState } from 'react'
import './Task.css';

export default function Task() {
  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("asc")
    const data = [
      { id: "1", catagory: "Electronics", name: "Laptop", price: "50000" },
      { id: "2", catagory: "Clothing", name: "Jacket", price: "2000" },
      { id: "3", catagory: "Electronics", name: "Smartphone", price: "30000" },
      { id: "4", catagory: "Furniture", name: "Table", price: "8000" },
      { id: "5", catagory: "Clothing", name: "T-Shirt", price: "500" },
      { id: "6", catagory: "Electronics", name: "Headphones", price: "2000" },
      { id: "7", catagory: "Books", name: "Novel", price: "300" },
      { id: "8", catagory: "Furniture", name: "Chair", price: "4000" },
      { id: "9", catagory: "Electronics", name: "Monitor", price: "10000" },
      { id: "10", catagory: "Kitchen", name: "Microwave", price: "7000" },
      { id: "11", catagory: "Clothing", name: "Jeans", price: "1500" },
      { id: "12", catagory: "Books", name: "Dictionary", price: "500" },
      { id: "13", catagory: "Kitchen", name: "Blender", price: "3000" },
      { id: "14", catagory: "Furniture", name: "Sofa", price: "20000" },
      { id: "15", catagory: "Electronics", name: "Tablet", price: "25000" }
    ]
    const filterdata = 
      filter == "All" ? data : data.filter((i)=> i.catagory == filter);

    const searchdata = data.filter((i)=>
      i.name.toLowerCase().includes(search.toLowerCase())
    );

    const sortdata = [...data].sort((a,b)=>
      sort === "asc" ? a.price - b.price : b.price - a.price
    )
  return (
    <div className="task-container">
      <h1 className="title">Item Management</h1>

      <div className="filter-section">
        <label htmlFor="filter">Filter Category:</label>
        <select id="filter" onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Books">Books</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
        </select>
        <ul>
          {filterdata.map((i) => (
            <li key={i.id} className="item">
              <span className="item-name">{i.name}</span>
              <span className="item-category">{i.catagory}</span>
              <span className="item-price">₹{i.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="search-section">
        <label htmlFor="search">Search Item:</label>
        <input
          id="search"
          type="text"
          placeholder="Enter item name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          {searchdata.map((i) => (
            <li key={i.id} className="item">
              <span className="item-name">{i.name}</span>
              <span className="item-category">{i.catagory}</span>
              <span className="item-price">₹{i.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sort-section">
        <label htmlFor="sort">Sort By Price:</label>
        <select id="sort" onChange={(e) => setSort(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <ul>
          {sortdata.map((i) => (
            <li key={i.id} className="item">
              <span className="item-name">{i.name}</span>
              <span className="item-category">{i.catagory}</span>
              <span className="item-price">₹{i.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
