import React from 'react'

function PokemonCard({pokemon}) {
  console.log('pokemon', pokemon)
  const {id, name, sprites} = pokemon
    return (
        <div className='pokemon-card mx-2'>
            <img src={sprites.front_default} alt=""/>
           <div className='text-white'> <span>{id}</span> <span>{name}</span></div>
        </div>
    )
}

export default PokemonCard
