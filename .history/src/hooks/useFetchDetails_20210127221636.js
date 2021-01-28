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
             const {id, types, height, weight, stats, sprites} = results
     /*         let idPoke = response.data.id
             let types = response.data.types
             let height = response.data.height
             let weight = response.data. */
           /*   let sprites = response.data.sprites */
            
             let urlSpecies = response.data.species.url
             let urls = [urlSpecies]
             const fetchData = urls => axios.get(urls)
                                            .then(res => res.data/* */)
                                            .catch(err=> err)
             const getPokemonData = urls => Promise.all(urls.map(fetchData))
            
             getPokemonData(urls).then(data => {
               let habitat = data[0].habitat
              let idPoke = data[0].id
               let description = data[0].flavor_text_entries.filter(flavor => flavor.version.name === 'alpha-sapphire').find(flavor => flavor.language.name === language )
               let name = data[0].names.find(name => name.language.name === language)
               function gatherPokemonData(id, name, description, sprites, types, height, weight, stats) {
                 let data = []
                 return data.push({id: id,
                                  name: name, 
                                  images:sprites, 
                                  description: description,
                                  types: types,
                                  height: height,
                                  weight,
                                  stats,
                                  habitat  })
               }
               let pokemonInfo = gatherPokemonData(id, name)

             console.log('datade', results)
            })
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