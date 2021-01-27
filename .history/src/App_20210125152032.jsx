
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { PokemonContextProvider } from './context/PokemonContext';
import Favorites from './pages/favorites/Favorites';
import Home from './pages/home/Home';
import PokemonDetalle from './pages/pokemon-detalle/PokemonDetalle';

function App() {
  
 const en = 'en'
 const es = 'es'
 const [language, setLanguage] = useState(en)


 console.log('lang',en)
  
  return (
    <PokemonContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/pokemon/:id' component={PokemonDetalle}/>
      <Route path='/favorites' path={Favorites}/>
      </Switch>
      </BrowserRouter>
    </PokemonContextProvider>
  );
}

export default App;