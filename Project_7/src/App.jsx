import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './Section/Navbar'
import Sec1 from './Section/Sec1'
import Sec2 from './Section/Sec2'
import Sec3 from './Section/Sec3'
import Sec4 from './Section/Sec4'
import Sec5 from './Section/Sec5'
import Sec6 from './Section/Sec6'
import Sec7 from './Section/Sec7'
import Sec8 from './Section/Sec8'
import Footer from './Section/Footer'

function App() {

  const [obj1, setObj1] = useState([
    {id : "1", url : "paan-corner_web.jpeg"},
    {id : "2", url : "Slice-2_10.png"},
    {id : "3", url : "Slice-3_9.png"},
    {id : "4", url : "Slice-4_9.png"},
    {id : "5", url : "Slice-5_4.png"},
    {id : "6", url : "Slice-6_5.png"},
    {id : "7", url : "Slice-7_3.png"},
    {id : "8", url : "Slice-8_4.png"},
    {id : "9", url : "Slice-9_3.png"},
    {id : "10", url : "Slice-10.png"},
    {id : "11", url : "Slice-11.png"},
    {id : "12", url : "Slice-12.png"},
    {id : "13", url : "Slice-13.png"},
    {id : "14", url : "Slice-14.png"},
    {id : "15", url : "Slice-15.png"},
    {id : "16", url : "Slice-16.png"},
    {id : "17", url : "Slice-17.png"},
    {id : "18", url : "Slice-18.png"},
    {id : "19", url : "Slice-19.png"},
    {id : "20", url : "Slice-20.png"}
  ])
  const [obj2, setObj2] = useState([
    {id : "1", url : "1 (35).jpg", name : "amul masti curd", weight : "1 kg", price : "75"},
    {id : "2", url : "1 (34).jpg", name : "Amul Gold Full Cream Fresh Milk", weight : "500 ml", price : "33"},
    {id : "3", url : "1 (33).jpg", name : "Amul Shakti Fresh Milk", weight : "500 ml", price : "30"},
    {id : "4", url : "1 (32).jpg", name : "Amul masti curd", weight : "200 g", price : "23"},
    {id : "5", url : "1 (31).jpg", name : "amul salted butter", weight : "100 g", price : "60"},
    {id : "6", url : "1 (30).jpg", name : "Cheetos Cheez Puffs", weight : "28 g", price : "10"}
  ])
  const [obj3, setObj3] = useState([
    {id : "7", url : "1 (29).jpg", name : "Super Crustless White Bread", weight : "300 g", price : "50"},
    {id : "8", url : "1 (28).jpg", name : "Egg on Eggs Grade-A Premium White Eggs", weight : "12 pieces", price : "110"},
    {id : "9", url : "1 (27).jpg", name : "amul taaza toned fresh milk", weight : "500 ml", price : "27"},
    {id : "10", url : "1 (26).jpg", name : "Kettle Studio Potato Chips - Sharp ", weight : "113 g", price : "99"},
    {id : "11", url : "1 (25).jpg", name : "DOKi Korean Gochujang Buffalo ", weight : "30 g", price : "199"},
    {id : "12", url : "1 (24).jpg", name : "Kettle Studio Wafers - Lime & Chilli", weight : "150 g", price : "80"},
  ])
  const [obj4, setObj4] = useState([
    {id : "13", url : "1 (23).jpg", name : "Kettle Studio Potato Chips - Mature ", weight : "56 g", price : "47"},
    {id : "14", url : "1 (22).jpg", name : "Kettle Studio Himalayan Pink Salt ", weight : "47 g", price : "47"},
    {id : "15", url : "1 (21).jpg", name : "Premium Magic Coal By Stash Pro", weight : "1 pack (10 pieces)", price : "80"},
    {id : "16", url : "1 (20).jpg", name : "Bombay Paan Masala Herbal Hookah Flavor ", weight : "50 g", price : "100"},
    {id : "17", url : "1 (19).jpg", name : "Kettle Studio Potato Chips - Himalyan Pink ", weight : "113 g", price : "99"},
    {id : "18", url : "1 (18).jpg", name : "Hookah Premium Plastic Filters ", weight : "1 pack (20 pieces)", price : "150"},
  ])
  const [obj5, setObj5] = useState([
    {id : "19", url : "1 (17).jpg", name : "Grape Herbal Hookah Flavor ", weight : "50 g", price : "100"},
    {id : "20", url : "1 (16).jpg", name : "Kiwi Herbal Hookah Flavor ", weight : "50 g", price : "100"},
    {id : "21", url : "1 (15).jpg", name : "Watermelon Herbal Hookah Flavor ", weight : "50 g", price : "100"},
    {id : "22", url : "1 (14).jpg", name : "Chandan Regal Rose Mix Mouth Freshner", weight : "180 g", price : "150"},
    {id : "23", url : "1 (13).jpg", name : "Pass Pass Sweet Magic Mix Mouth Freshener", weight : "105 g", price : "64"},
    {id : "24", url : "1 (12).jpg", name : "Chandan Star 5 in 1 Mouth Freshener", weight : "200 g", price : "200"},
  ])
  const [obj6, setObj6] = useState([
    {id : "25", url : "1 (11).jpg", name : "Chandan Anardana Punch Mouth Freshner", weight : "170 g", price : "150"},
    {id : "26", url : "1 (10).jpg", name : "Rajnigandha Silver Pearls - Silver Coated ", weight : "6 g", price : "60"},
    {id : "27", url : "1 (9).jpg", name : "Chandan Regal Rose Mix Mouth Freshner", weight : "180 g", price : "150"},
    {id : "28", url : "1 (8).jpg", name : "Praakritik Natural Paan Gulkand", weight : "250 g", price : "335"},
    {id : "29", url : "1 (7).jpg", name : "Amul Unsalted Buttermilk", weight : "400 ml", price : "15"},
    {id : "30", url : "1 (6).jpg", name : "Thums Up Soft Drink", weight : "750 ml", price : "45"},
  ])
  const [obj7, setObj7] = useState([
    {id : "31", url : "1 (5).jpg", name : "Bisleri Packaged Water", weight : "5 Liter", price : "50"},
    {id : "32", url : "1 (4).jpg", name : "Amul Probiotic Tadka Salted Buttermilk", weight : "270 ml", price : "20"},
    {id : "33", url : "1 (3).jpg", name : "Sparkling Ice Cubes by Burrf", weight : "1 kg", price : "47"},
    {id : "34", url : "1 (2).jpg", name : "Kinley Soda Water With Extra Punch", weight : "750 ml", price : "20"},
    {id : "35", url : "1 (1).jpg", name : "Sprite Lime Flavored Soft Drink", weight : "750 ml", price : "45"},    
    {id : "36", url : "1 (12).jpg", name : "Chandan Star 5 in 1 Mouth Freshener", weight : "200 g", price : "200"}
  ])
  return (
    <>
      <Navbar/>
      <Sec1/>
      <Sec2 data={obj1}/>
      <Sec3 data={obj2}/>
      <Sec4 data={obj3}/>
      <Sec5 data={obj4}/>
      <Sec6 data={obj5}/>
      <Sec7 data={obj6}/>
      <Sec8 data={obj7}/>
      <Footer/>
    </>
  )
}

export default App
