import React, { useContext } from 'react'
import { PokemonContext } from '../../../context/PokemonContext'
import './pokemon-home.css'

function PokemonList(props) {
    const {data, loading} = useContext(PokemonContext)

    return (
        <div className='pokemon-list'>
            <div className="cards-wrapper container-fluid align-items-center">
            {props.children}
            </div>
        </div>
    )
}

export default PokemonList
