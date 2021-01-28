import axios from 'axios' 


export function getAllData(urls){
    return Promise.all(urls.map(fetchData));
}
function fetchData(url) {
  return axios.get(url)
              .then( response =>  response.data)
              .catch(error  => error);
}