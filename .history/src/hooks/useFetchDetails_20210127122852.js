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
             let idPoke = response.data.id
             let sprites = response.data.sprites
             let urlSpecies = response.data.species.url
             let urls = [urlSpecies]
             const fetchData = urls => axios.get(urls)
                                            .then(res => res.data/* */)
                                            .catch(err=> err)
             const getPokemonData = urls => Promise.all(urls.map(fetchData))
            
             getPokemonData(urls).then(data => {
               console.log(data)
 /*               let idPoke = data.id
               let description = data.flavor_text_entries.filter(flavor => flavor.version.name === 'alpha-sapphire').find(flavor => flavor.language.name === language )
               let name = data.name.find(name => name.language.name === language)
               console.log('name',name)
             console.log('datade', data)*/})
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