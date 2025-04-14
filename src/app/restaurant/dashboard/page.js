"use client"
import RestaurantHeader from '@/app/_components/RestaurantHeader'
import React, { useState } from 'react'
import "../style.css"
import AddFoodItem from '@/app/_components/AddFoodItem'


export default function Dashboard() {
  const[addItem, setAddItem] = useState(false)
  return (
    <>
    <RestaurantHeader/>
    <button onClick={()=>setAddItem(true)}>Add Food</button>
    <button onClick={()=>setAddItem(false)}>Dashboard</button>
    {
      addItem ?  <AddFoodItem/>: <h1>Restaurant Dashboard</h1>
    }
   
    
    </>
  )
}
