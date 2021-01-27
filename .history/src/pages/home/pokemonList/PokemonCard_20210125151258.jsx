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


{/* <div class="img-container">
 <figure class="photo"> <img class="card-img-top" src={{data.image}}> </figure>
</div>
<div class="card-footer">
<h5 class="align-self-center mb-0">{{data.titulo}}</h5>
<p class="align-self-center">{{data.tecnica}}</p>
<h5 className="precio align-self-center font-italic mb-0">{{data.precio}}</h5>
<button class="btn" routerLink="/producto/{{data.id}}">Ver detalle</button>
</div> */}