import React, { useState, useContext } from 'react'
import { Spinner } from 'reactstrap'
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

    const {data, loading} = useFetchDetails(pokemonDetail, language)
    if(loading) return <Spinner style={{ position: 'absolute', width: '3rem', height: '3rem', top: '50%', left: '50%' }} color='danger'/>
    return (
        <div className='page-detalle'>
            <SliderSprites images={data[0].images} /> 
            <Description name={data[0].name}
                         des/>
        </div>
    )
}

export default PokemonDetalle
