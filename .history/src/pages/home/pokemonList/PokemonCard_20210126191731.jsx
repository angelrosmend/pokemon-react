import React from 'react'
import { Link } from 'react-router-dom'
import './pokemon-home.css'

function PokemonCard({pokemon}) {
 
  const {id, name, sprites} = pokemon
  
    return (
        <div className='pokemon-card mx-2'>
           <Link to={`/pokemon/${id}`}>
            <div className="photo"> 
              <img src={sprites.front_default} alt=""/>
            </div>
            </Link>
           <div className='text-white text-center'> <span>{id} - </span> <span>{name}</span></div>
        </div>
    )
}

export default PokemonCard


{/* <div className="img-container">
 <figure className="photo"> <img className="card-img-top" src={{data.image}}> </figure>
</div>
<div className="card-footer">
<h5 className="align-self-center mb-0">{{data.titulo}}</h5>
<p className="align-self-center">{{data.tecnica}}</p>
<h5 className="precio align-self-center font-italic mb-0">{{data.precio}}</h5>
<button className="btn" routerLink="/producto/{{data.id}}">Ver detalle</button>
</div> */}