import React from 'react'
import './Display.css';


const Display = ({id, image, name, type, _callback }) => {
    
    return (
        <div className="box">
            <div className="num"><h3>{id}</h3></div>
            <img src={image} alt={name} />
            <div className="pokedetails">
                <h1>{name}</h1>
                <h2>Type: {type}</h2>
            </div>
        </div>
    )
}

export default Display