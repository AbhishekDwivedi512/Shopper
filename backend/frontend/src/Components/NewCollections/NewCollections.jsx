import React from 'react'
import { useState ,useEffect } from 'react'
import './NewCollection.css'
import Item from '../Item/Item'
const NewCollections = () => {
 const [new_collection,setNew_collection] =useState([]);

 useEffect(()=>{
    fetch(`${window.location.origin}/newcollections`)
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));

 },[])


  return (
    <div className='New_Collections'>
    <h1>New Collections</h1>
    <hr />
    <div className="collection">
      {new_collection.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
    </div>
    </div>
  )
}

export default NewCollections