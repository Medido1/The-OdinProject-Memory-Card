import {useState } from 'react';
import StartWindow from './StartWindow';
import Game from './Game';
import '../styles/Main.css';
import pokemons from '../dataBase';

export default function Main() {
  const [pokemonData, setPokemonData] = useState(pokemons);
  const [difficulty, setDifficulty] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <main className="main">
      {!isPlaying && 
        <StartWindow setDifficulty={setDifficulty} setIsPlaying={setIsPlaying}/>
      }
      {difficulty == "Easy" && 
        <Game 
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
      />
      }
      
    </main>
  )
}