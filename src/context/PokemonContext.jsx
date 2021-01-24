import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { getPokedex } from '../helpers/pokemon';
import { useFetch } from '../hooks/useFetch';

export const PokemonContext = React.createContext(null)
export function getPokemon({ url }) {
  return new Promise((resolve, reject) => {
      axios.get(url)
          .then(data => {
              resolve(data)
          })
     });
  }

export const PokemonContextProvider = (props) => {

    const pokemonUrl = `${process.env.REACT_APP_BASE_URL}pokemon?limit=5&offset=0`
    const pokemonDetail = `${process.env.REACT_APP_BASE_URL}pokemon/1`

    const [currentPage, setCurrentPage] = useState(pokemonUrl)
 

    const {data, pokedex, prevPage, nextPage, loading, error} = useFetch(currentPage)

    console.log('pokedex', data)

/*     useEffect(() => {
      const getPoke = getPokedex(data)
      console.log('get', getPoke)
    }, [pokemonUrl]) */

    

    const urls = [ "https://pokeapi.co/api/v2/pokemon/1/", 
                   "https://pokeapi.co/api/v2/pokemon/2/", 
                   "https://pokeapi.co/api/v2/pokemon/3/", 
                   "https://pokeapi.co/api/v2/pokemon/4/", 
                   "https://pokeapi.co/api/v2/pokemon/5/" ]


 /*   function getAllData(URLs){
        return Promise.all(URLs.map(fetchData));
    }
    function fetchData(URL) {
      return axios
        .get(URL)
        .then(function(response) {
          return {
            success: true,
            data: response.data
          };
        })
        .catch(function(error) {
          return { success: false };
        });
    }
    
    getAllData(data).then(resp=>{console.log(resp)}).catch(e=>{console.log(e)}) */


    const gotoNextPage = () => setCurrentPage(nextPage)
    const gotoPrevPage = () => setCurrentPage(prevPage)
    
    
    return (
      <PokemonContext.Provider value={{data, gotoNextPage, gotoPrevPage, loading}}>
        {props.children}
      </PokemonContext.Provider>
    );
  };

