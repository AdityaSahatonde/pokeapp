import React from 'react'
import PokeCard from "./PokeCard";
import './PokeApp.css';
import './DetailView.css';
import DetailView from './DetailView';
import {useEffect,useState} from 'react';
export default function PokeApp() {
     

    useEffect(() => {

         getData()
        // setPoke(Poke);
       
      }, []);
       let getData = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) =>response.json())
        .then((data)=>data.results)
        .then((data)=>{

          setPoke(data)
          // data.results.forEach(element => {
          //   // console.log(element.url)
          //   fetchData(element.url)
          // });
        })
      }
      // url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png`
      // let fetchData=(url)=>{
      //     fetch(url)
      //     .then((data)=>data.json())
      //     .then((data)=>{
            
      //     })
          
      // }

  
       const [PokeMon, setPoke] = useState([]);
       const [id,setId] = useState(1);
       const [name,setName] = useState("bulbasaur")
       const [sprite, setSprite] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
       const [height,setHeight] = useState(7)
       const [weight,setWeight] = useState(69)
       const [Loading,setLoading]= useState(false)

       let onhandle = (id) =>{
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response)=>response.json())
            .then((data)=>{
              // console.log(data)
                setId(data.id)
                setName(data.name)
                setSprite(data.sprites.front_default)
                setHeight(data.height)
                setWeight(data.weight)
                setLoading(true)
            })

            // setLoading(false)
       }

    return (
        <div className="PokeApp d-flex bg-warning">
              <h1>Aditya PokeDex</h1>

            <div className="d-flex bg-danger flex-wrap overflow-scroll justify-content-md-center flex-x-column vw-25 vh-50 flex-row ColSize">

            
            {
              PokeMon.map((PokeMon,id)=>{
                return <PokeCard key={id}id={id+1} {...PokeMon} onhandle={onhandle} />
              })
            }

            </div>
            <DetailView data={id} name={name} sprite={sprite} height={height} weight={weight} />

            
        </div>
    )
}
