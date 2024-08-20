import '../styles/StartWindow.css'
import {easyPokemons, normalPokemon} from '../dataBase';
import icon from '../assets/images/pikachu.webp'

export default function StartWindow({setDifficulty, setIsPlaying, setPokemonData}) {

    function chooseDifficulty(e){
        let difficulty = e.target.textContent;
        setDifficulty(difficulty)
        if (difficulty === "Easy") {
            setPokemonData(easyPokemons)
        } else if (difficulty === "Normal") {
            setPokemonData(normalPokemon)
        }
        setIsPlaying(true)
    }
    return (
        <div className="start_window">
            <div>
                <img src={icon} className="icon" />
                <h2>Memory Game</h2>
                <img src={icon} className="icon" />
            </div>
            <ul>
                <li>
                    <button className='btn' onClick={chooseDifficulty}>Easy</button>
                </li>
                <li>
                    <button className='btn' onClick={chooseDifficulty}>Normal</button>
                </li>
            </ul>
        </div>
    )
}