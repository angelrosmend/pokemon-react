import {useEffect, useState} from 'react'
import axios from 'axios'


export const useFetch = (urlPoke) => {

    const [state, setState] = useState({data: [],
                                       pokedex: [],
                                       loading: true,
                                       nextPage: null,
                                       prevPage: null,
                                       error: ''})

    useEffect(() => {
        let cancel 
        axios.get(urlPoke, {
                cancelToken: new axios.CancelToken(c => cancel = c)
             })
             .then(response => {
             let results = response.data.results
             let urls = results.map(item => item.url)
             const fetchPokemon = urlPokemon => axios.get(urlPokemon)
                                                     .then(pokemon => pokemon.data)
                                                     .catch(errPokemon => errPokemon)

             const getPokemonData = urls => Promise.all(urls.map(fetchPokemon))
             
             getPokemonData(urls).then(pokemonList =>{
                let urlsSpecies = pokemonList.map(item)
                console.log('urls',urlsSpecies)
              setState({
                data: pokemonList,
                loading: false, 
                nextPage: response.data.next,
                prevPage: response.data.previous,
                error: ''
               })
             })
             }).catch(error => {
                 setState({
                     data: [],
                     loading: false,
                     nextPage: null,
                     prevPage: null,
                     pokedex: [],
                     error: error
                 })
             }); 
            return () => cancel()           
    }, [urlPoke]);
    return state
}

