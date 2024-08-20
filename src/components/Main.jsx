import {useState} from 'react';
import StartWindow from './StartWindow';
import Game from './Game';
import Rules from './Rules';
import '../styles/Main.css';


export default function Main() {
  const [pokemonData, setPokemonData] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <main className="main">
      {!isPlaying && 
        <StartWindow setDifficulty={setDifficulty} setIsPlaying={setIsPlaying}
          setPokemonData={setPokemonData} 
        />
      }
      {isPlaying && 
        <Game 
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
        difficulty = {difficulty}
      />
      }
      { isPlaying &&
        <Rules />
      }
    </main>
  )
}