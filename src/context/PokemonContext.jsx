import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useFetch } from '../hooks/useFetch';

export const PokemonContext = React.createContext(null)

export const PokemonContextProvider = (props) => {

    const pokemonUrl = `${process.env.REACT_APP_BASE_URL}pokemon?limit=10&offset=0`
    const pokemonDetail = `${process.env.REACT_APP_BASE_URL}pokemon/1`

    const [currentPage, setCurrentPage] = useState(pokemonUrl)
 

    const {data, pokedex, prevPage, nextPage, loading, error} = useFetch(currentPage)

    console.log('pokedex', data)

    const gotoNextPage = () => setCurrentPage(nextPage)
    const gotoPrevPage = () => setCurrentPage(prevPage)
    
    return (
      <PokemonContext.Provider value={{data, gotoNextPage, gotoPrevPage, loading, nextPage, prevPage}}>
        {props.children}
      </PokemonContext.Provider>
    );
  };

