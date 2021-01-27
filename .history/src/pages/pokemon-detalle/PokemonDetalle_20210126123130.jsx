import React, { useState } from 'react'
import { useFetchDetails } from '../../hooks/useFetchDetails'
import Description from './Description'
import './pokemon.detalle.css'
import SliderSprites from './SliderSprites'

function PokemonDetalle({match}) {
    useContext(Pok)
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
