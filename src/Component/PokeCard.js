import React from 'react'
// import { useState,useEffect } from 'react';
import './PokeCard.css';
export default function PokeCard(props) { 
   
    // const {data} = props.data1;
    // console.log(props);
   

    return (
   

    <div className="d-md-flex flex-column PokeCell  p-4 m-2" onClick={()=>{props.onhandle(props.id)}}>

        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`  } className="Pokeimg" alt={"image11"}  ></img>

        
        
    </div>
        
   
    )
}
