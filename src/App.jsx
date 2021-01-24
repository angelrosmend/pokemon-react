
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { PokemonContextProvider } from './context/PokemonContext';
import Home from './pages/home/Home';

function App() {
  
  return (
    <PokemonContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Home/>
      </BrowserRouter>
    </PokemonContextProvider>
  );
}

export default App;
