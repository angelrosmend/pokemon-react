import React, { useContext } from 'react'
import { PokemonContext } from '../../../context/PokemonContext'
import PokemonCard from './PokemonCard'

function PokemonList() {
    const {data} = useContext(PokemonContext)

    return (
        <div className='pokemon-list'>
            <div className="row">
                {data && data.map(pokemon => {
                    return <PokemonCard pokemon={pokemon}/>
                })}
            </div>
        </div>
    )
}

export default PokemonList
