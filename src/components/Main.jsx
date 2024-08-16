import {useState } from 'react';
import '../styles/Main.css';
import Card from './Card';
import pokemons from '../dataBase';

export default function Main() {
  const [pokemonData, setPokemonData] = useState(pokemons);
  
  return (
    <main className="main">
      <div className="score_board">
        <p className="score">Score: 0</p>
        <p className="high_score">High Score: 0</p>
      </div>
      <div className="cards_container">
        <ul>
          {pokemonData.map((pokemon) => (
            <li key={pokemon.id}>
              <Card 
                imgSrc = {pokemon.url}
                height = {150}
                width = {150}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}