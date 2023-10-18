'use client'
//1 import area
import { MenuItem, Select } from "@mui/material";
import React, { useState } from 'react';

 
//2 define area
function Home() {

//2.1 hooks area

const [stockPrice , setStockPrize] = useState('')

//2.2 function defination area
const handlechange = (kuldeep)=>{
  console.log('hello',kuldeep.target.value)
  
  //now call the api
  fetch('/api/getstockprize').then((res)=>{ return res.json()
  }).then((data)=>{
    console.log(data.Price)
    setStockPrize(data.Price)
  }).catch((err)=>{

  }).finally(()=>{

  })
}
 
  return (
    <main >
      <h1>current stock prize is {stockPrice}</h1>
      <Select   onChange={handlechange} >
         <MenuItem value='icici'>ICICI BANK</MenuItem>
         <MenuItem value='hdfc'>HDFC BANK</MenuItem>
         <MenuItem value='pnb'>PNB BANK</MenuItem>
      </Select>
    </main>
  )
}

//3 export area
export default Home;