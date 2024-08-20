import {useState, useEffect} from "react";
import Card from "./Card"

export default function Game({
    pokemonData, setPokemonData, difficulty
}) {
  const [gameWon, setIsGameWon] = useState(false);
  const [score, setScore] = useState(0);
  const [easyHighScore, setEasyHighScore] = useState(0);
  const [normalHighScore, setNormalHighScore] = useState(0);
  const [hardHighScore, setHardHighScore] = useState(0);

  const highScore = difficulty === "Easy" 
  ? easyHighScore 
  : difficulty === "Normal"
  ? normalHighScore
  : hardHighScore

  function resetPokemonList(){
    const resetList = pokemonData.map((pokemon) => {
      return {...pokemon, isClicked: false}
    })
    setPokemonData(resetList)
  }

  useEffect(() => {
    localStorage.setItem("easyHighScore", easyHighScore);
  }, [easyHighScore]);
  
  useEffect(() => {
    localStorage.setItem("normalHighScore", normalHighScore);
  }, [normalHighScore]);
  
  useEffect(() => {
    localStorage.setItem("hardHighScore", hardHighScore);
  }, [hardHighScore]);

  useEffect(() => {
    const savedEasyHighScore = localStorage.getItem("easyHighScore");
    const savedNormalHighScore = localStorage.getItem("normalHighScore");
    const savedHardHighScore = localStorage.getItem("hardHighScore");
  
    if (savedEasyHighScore) {
      setEasyHighScore(parseInt(savedEasyHighScore, 10));
    }
    if (savedNormalHighScore) {
      setNormalHighScore(parseInt(savedNormalHighScore, 10));
    }
    if (savedHardHighScore) {
      setHardHighScore(parseInt(savedHardHighScore, 10));
    }
  }, []);
  
  

  function shufflePokemons(arr) {
    const shuffledList = arr.slice();
    for (let i = shuffledList.length -1 ; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));/* pick a random number from 0 to i */
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]]
    }
    return shuffledList;
  }


  function handleClick(e) {
    if (gameWon) return ;
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
            if (difficulty === "Easy"){
              setEasyHighScore(newScore)
            } else if (difficulty === "Normal"){
              setNormalHighScore(newScore)
            } else if (difficulty === "Hard"){
              setHardHighScore(newScore)
            }
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

  function restartGame(){
    resetPokemonList();
    setScore(0);
    setIsGameWon(false);
  }
    return (
        <div className="game_container">
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
        </div>
    )
}