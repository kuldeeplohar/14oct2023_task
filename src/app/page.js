'use client'
//1 import area
import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from 'react';

 
//2 define area
function Home() {

//2.1 hooks area

const [stockPrice , setStockPrize] = useState('')
const [stockName , setStockName] = useState('')

useEffect(()=>{

     setInterval(function(){

      console.log('okk')
      getstockprize(stockName)
     }, 5000);
}, [stockName])

const getstockprize = (stockName)=>{
  //now call the api
  fetch(`/api/getstockprize?stockName=${stockName 
  }`).then((res)=>{ return res.json()
  }).then((data)=>{
    console.log(data.stockPrice1)
    setStockPrize(data.stockPrice1)
  }).catch((err)=>{

  }).finally(()=>{

  })
}

//2.2 function defination area
const handlechange = (kuldeep)=>{

  setStockName(kuldeep.target.value)
  console.log('hello',kuldeep.target.value)
  getstockprize(kuldeep.target.value)
  
}

 
  return (
    <main >
      <h1>current stock prize is {stockName}- {stockPrice}</h1>
    
      <Select   onChange={handlechange} >
         <MenuItem value='ICICI'>ICICI BANK</MenuItem>
         <MenuItem value='HDFC'>HDFC BANK</MenuItem>
         <MenuItem value='PNB'>PNB BANK</MenuItem>
      </Select>
    </main>
  )
}

//3 export area
export default Home;