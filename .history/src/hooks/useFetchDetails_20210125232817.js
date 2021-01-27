import {useEffect, useState} from 'react'
import axios from 'axios'


export const useFetchDetails = (urlPoke) => {

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
             let urlTypes = response.data.types.map(item => item.type.url)
             let urls = [urlSpecies, urlTypes]
             const fetchData = urls => axios.get(urls)
             .then(res => res.data)
             .catch(err=> err)
             
             const getPokemonData = urls => Promise.all(urls.map(fetchData))
             getPokemonData(urls).then(data => console.log('datade', data)
          
             

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
    }, [urlPoke]);
    return state
}

