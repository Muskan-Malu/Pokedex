import './App.css';
import Pokemons from './allPokemons.json';
import styled from "styled-components";
import { PokedexCard } from './components/pokedexCard/pokedexCard'; 
import pic from './components/images/Pokeball.png';
import { Link } from 'react-router-dom';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ "padding-top": "10px" }}>
          <Link to={"/surpriseMe"} style={{ textDecoration: "none", color: "#b8cff5" }}>
          <img src={pic} />
          <div style={{ left: "2px" }}>Surprise Me!!</div>
          </Link>
        </div>
        <PokedexCard />
      </header>
    </div>
  );
}

export default App;