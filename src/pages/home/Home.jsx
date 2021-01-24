import React, { useContext } from 'react'
import Slider from 'react-slick'
import { Spinner } from 'reactstrap'
import { PokemonContext } from '../../context/PokemonContext'
import { fiveItemsSettings } from '../../helpers/carouselSettings'
import './home.css'
import { PrevPage, NextPage } from './load-pages/LoadPages'
import PokemonCard from './pokemonList/PokemonCard'
import PokemonList from './pokemonList/PokemonList'

function Home() {
    const {data, gotoNextPage, gotoPrevPage, prevPage, nextPage, loading}=  useContext(PokemonContext)
    return (
        <div className='home'>
            <PrevPage/>
            <PokemonList>        
                { loading ? 
                <Spinner style={{ position: 'absolute', width: '3rem', height: '3rem', top: '50%', left: '50%' }} color='danger'/>
                :
                <Slider {...fiveItemsSettings}>
                {data && data.map(pokemon => {
                    return <PokemonCard pokemon={pokemon}/>
                })}
                </Slider>}
            </PokemonList>
            <NextPage/>

        </div>
    )
}

export default Home
