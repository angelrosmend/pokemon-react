import React, { useState } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import { useFetchDetails } from '../../hooks/useFetchDetails'
import Description from './Description'
import './pokemon.detalle.css'
import SliderSprites from './SliderSprites'

function PokemonDetalle({match}) {
  const =  useContext(PokemonContext)
    const id = match.params.id
    const pokemonDetail = `${process.env.REACT_APP_BASE_URL}pokemon/${id}`
    const [currentPokemon, setCurrentPokemon] = useState([])

    const {data, sprites, loading} = useFetchDetails(pokemonDetail)



    return (
        <div className='page-detalle'>
            <SliderSprites images={sprites}/> 
            <Description/>
        </div>
    )
}

export default PokemonDetalle
