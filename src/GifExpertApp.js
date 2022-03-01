import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
  
    const [categories, setcategories] = useState([''])

   //const handleAdd = ()=>{
     //   setcategories([...categories, 'Hunter X Hunter'])
       // setcategories(cats => [...cats, 'veggeta']) esta es otra forma de agregar un elemento al state
       // cats recive la copia de categories y agrega un nuevo elemento   
   //}
    
    return (
    <>
        <h2> Top 10 Gifs mas usados! </h2>
        <AddCategory setcategories = {setcategories}/>
        <hr />
       
        <ol>
            {
                categories.map((category)=>{
                    return <GifGrid 
                    key = {category}
                    category = {category} 
                    />


                    //<li key = {category}> {category} </li>
                })
            }
        </ol>
    
    
    </>
  )
}
