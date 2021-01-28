import React, { useState, useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import { useFetchDetails } from '../../hooks/useFetchDetails'
import Description from './Description'
import './pokemon.detalle.css'
import SliderSprites from './SliderSprites'

function PokemonDetalle({match}) {
  const {language}=  useContext(PokemonContext)
    const id = match.params.id
    const pokemonDetail = `${process.env.REACT_APP_BASE_URL}pokemon/${id}`
    const [currentPokemon, setCurrentPokemon] = useState([])

    const {data, sprites, loading} = useFetchDetails(pokemonDetail, language)
    console.log('encapsulated')

    return (
        <div className='page-detalle'>
            <SliderSprites /> 
            <Description/>
        </div>
    )
}

export default PokemonDetalle
