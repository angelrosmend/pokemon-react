import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PokemonContext } from '../../../context/PokemonContext'
import './pokemon-home.css'

function PokemonCard({pokemon, favorite}) {
  const {id, name, sprites} = pokemon
  const {  likePokemon, unlikePokemon} = useContext(PokemonContext)
  console.log(id,favorite)
  

  let image = sprites.front_default
    return (
        <div className='pokemon-card mx-2 '>
     
          { favorite ? <i  onClick={() => unlikePokemon({id, name, image})} 
          className="fas fa-heart liked-pokemon"/>
         : 
         <i  onClick={() => likePokemon({id, name, sprites, favorite})} 
            className="fas fa-heart like-pokemon"/>}

            <div className=''>
            <Link to={`/pokemon/${id}`}>
            <div className="photo"> 
              <img src={image} alt="..."/>
            </div>
            </Link>
           <div className='text-white text-center'> <span>{id} - </span> <span>{name}</span></div>
            </div>
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