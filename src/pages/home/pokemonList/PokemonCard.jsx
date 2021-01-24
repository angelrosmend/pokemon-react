import React from 'react'

function PokemonCard({pokemon}) {
  console.log('pokemon', pokemon)
  const {id, name, sprites} = pokemon
    return (
        <div className='card'>
            <img src={sprites.front_default} alt=""/>
            <span>{id}</span> <span>{name}</span>
        </div>
    )
}

export default PokemonCard
