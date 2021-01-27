import {useEffect, useState} from 'react'
import axios from 'axios'


export const useFetchDetails = (urlPoke) => {

    const [state, setState] = useState({data: [],
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
             let results = response.data
             let sprites = response.data.sprites
             let urlSpecies = response.data.species.url
             console.log('url', urlSpecies)
             

             axios.get(urlSpecies).then(res =>{}
              let description = '';
              res.data.flavor_text_entries.some(flavor =>))

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

