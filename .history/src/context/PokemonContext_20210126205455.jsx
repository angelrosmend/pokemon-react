import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useFetch } from '../hooks/useFetch';

export const PokemonContext = React.createContext(null)

export const PokemonContextProvider = (props) => {

    const español = 'es'
    const english = 'en'
    const deutsch = 'de'
    const [language, setLanguage] = useState(english)
    const selectEn = () => setLanguage(english)
    const selectEs = () => setLanguage(español)
    const selectDe = () => setLanguage(deutsch)
    console.log('lang',language)

    const pokemonUrl = `${process.env.REACT_APP_BASE_URL}pokemon?limit=10&offset=0`

    const [currentPage, setCurrentPage] = useState(pokemonUrl)

    const {data, names, prevPage, nextPage, loading, error} = useFetch(currentPage, language)

    const gotoNextPage = () => setCurrentPage(nextPage)
    const gotoPrevPage = () => setCurrentPage(prevPage)
    
    return (
      <PokemonContext.Provider value={{data, gotoNextPage, gotoPrevPage, loading, nextPage, prevPage, language, names selectEn, selectEs, selectDe}}>
        {props.children}
      </PokemonContext.Provider>
    );
  };

