import {useEffect, useState} from 'react'
import axios from 'axios'


export const useFetchDetails = (urlPoke, language) => {

    const [state, setState] = useState({data: [],
                                       loading: true,
                                       nextPage: null,
                                       prevPage: null,
                                       desc: '',
                                       error: ''})
    useEffect(() => {
        let cancel 
        axios.get(urlPoke, {
                cancelToken: new axios.CancelToken(c => cancel = c) 
             })
             .then(response => {
          
             let results = response.data
             let sprites = response.data.sprites
             let urlSpecies = response.data.species.url
             let urls = [urlSpecies]
             const fetchData = urls => axios.get(urls)
                                            .then(res => res.data/* .flavor_text_entries.filter(flavor => flavor.version.name === 'alpha-sapphire').find(flavor => flavor.language.name === language )*/)
                                            .catch(err=> err)

             const getPokemonData = urls => Promise.all(urls.map(fetchData))
            
             getPokemonData(urls).then(data => {
               let description
               console.log('datade', data)})
            setState({
              data: results,
              sprites: sprites,
              loading: false, 
              error: ''
             })

          
             
             }).catch(error => {
                 setState({
                     data: [],
                     loading: false,
                     error: error
                 })
             }); 
            return () => cancel()           
    }, [urlPoke,language]);
    return state
}


           /* const especies = (urlSpecies) => {
             axios.get(urlSpecies).then(res => {
              let description = '';
               res.data.flavor_text_entries.some(flavor => {
                if (flavor.language.name === 'en'){
                  description = flavor.flavor_test;
                  return;
                }
                }) 
              })} */