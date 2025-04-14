import React, { useState } from 'react'

export default function AddFoodItem() {
    const[name,setName]=useState();
    const[price,setPrice]=useState("");
    const[img_path,setImg_Path]=useState("");
    const[description,setDescription]=useState("");
    
 
const handleAddFoodItem=async()=>{
    console.log(name,price,img_path,description);
    let resto_id;
    const restaurantData=JSON.parse(localStorage.getItem("restaurantUser"));
    if(restaurantData){
        resto_id = restaurantData._id
    }
    let response = await fetch("/api/restaurant/foods", {
        method : "POST",
        body:JSON.stringify({name,price,img_path,description,resto_id})
    });
    response = await response.json();
    if(response.success){
        alert("Food Item Added")
    }
}
    

  return (
    <div className="container">
        <h1>Add Food Item</h1>
        <div className="input-wrapper">
            <input type="text" className='input-field' placeholder='Enter Food Name'
            value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="input-wrapper">
            <input type="number" className='input-field' placeholder='Enter Price'
            value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div className="input-wrapper">
            <input type="text" className='input-field' placeholder='Enter Image Path'
            value={img_path} onChange={(e)=>setImg_Path(e.target.value)}/>
        </div>
        <div className="input-wrapper">
            <input type="text" className='input-field' placeholder='Enter Description'
            value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <div className='input-wrapper'>
            <button className='button' onClick={handleAddFoodItem}>Add Food Item</button>
        </div>
    </div>
    
  )}
