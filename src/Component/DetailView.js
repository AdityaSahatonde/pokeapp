import React from 'react'
import './DetailView.css'
export default function DetailView(props) {
    // let Url =`https://pokeres.bastionbot.org/images/pokemon/${1}.png`
    console.log(props)

    return (
        <div>
        {/* <div className="DetailView"> */}

                <img src={props.sprite} className="img-fluid." alt={"pokeimg"} className="img1" />
                <div className="info">
                <p>id: {props.data} </p>
                 <p>Nme: {props.name} </p>
                 <p>Height: {props.height} </p>
                <p>weight: {props.weight} </p>
                </div>

         {/* </div> */}
            
        </div>
    )
}
