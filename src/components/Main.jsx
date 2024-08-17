import {useState } from 'react';
import '../styles/Main.css';
import Card from './Card';
import pokemons from '../dataBase';

export default function Main() {
  const [pokemonData, setPokemonData] = useState(pokemons);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameWon, setIsGameWon] = useState(false);

  function handleClick(e) {
    const selectedId = e.target.id;
    let reset = false;
    const updatedPokemonList = pokemonData.map((pokemon) => {
      if (pokemon.id == selectedId) {
        if (pokemon.isClicked){
          setScore(0);
          reset = true;
        } else {
          const newScore = score + 1
          if (newScore == pokemonData.length) {
            setIsGameWon(true);
          }
          setScore(newScore)
          if (newScore >= highScore) {
            setHighScore(newScore)
          }
          return {...pokemon, isClicked: true}
        }
      }
      return pokemon
    });
    if (reset) {
      resetPokemonList();
    } else {
      setPokemonData(updatedPokemonList)
      setPokemonData(shufflePokemons(updatedPokemonList))
    }
  }

  function shufflePokemons(arr) {
    const shuffledList = arr.slice();
    for (let i = shuffledList.length -1 ; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));/* pick a random number from 0 to i */
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]]
    }
    return shuffledList;
  }

  function resetPokemonList(){
    const resetList = pokemonData.map((pokemon) => {
      return {...pokemon, isClicked: false}
    })
    setPokemonData(resetList)
  }

  function restartGame(){
    resetPokemonList();
    setScore(0);
    setIsGameWon(false);
  }

  return (
    <main className="main">
      <div className="score_board">
        <p className="score">Score: {score}</p>
        <p className="high_score">High Score: {highScore}</p>
      </div>
      <div className="cards_container">
        <ul>
          {pokemonData.map((pokemon) => (
            <li key={pokemon.id} onClick={handleClick}>
              <Card 
                id = {pokemon.id}
                imgSrc = {pokemon.url}
                height = {150}
                width = {150}
                name = {pokemon.name}
              />
            </li>
          ))}
        </ul>
      </div>
      {gameWon && 
        <div className='game_over'>
          <h2>You won!!</h2>
          <button className='restart_btn' onClick={restartGame}>Play again</button>
        </div>
      }
    </main>
  )
}