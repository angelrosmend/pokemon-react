import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import './home.css'
import PokemonList from './pokemonList/PokemonList'

function Home() {
    const {gotoNextPage}=  useContext(PokemonContext)
    return (
        <div className='home'>
            <div className="back">
               
            </div>
            <PokemonList/>

            <div className="next">
               <button onClick={gotoNextPage} >go to next page</button>
            </div>
        </div>
    )
}

export default Home
