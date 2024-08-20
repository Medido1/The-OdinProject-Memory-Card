import '../styles/StartWindow.css'
import {easyPokemons, normalPokemon, hardPokemon} from '../dataBase';
import icon from '../assets/images/pikachu.webp'
import { useState, useEffect } from 'react';

export default function StartWindow({setDifficulty, setIsPlaying, setPokemonData}) {
    const [mobile, isMobile] = useState(window.innerWidth <= 768);
    

    function chooseDifficulty(e){
        let difficulty = e.target.textContent;
        let height;
        
        setDifficulty(difficulty)

        if (difficulty === "Easy") {
            setPokemonData(easyPokemons)
            height =  mobile ? "125vh": "100vh";
        } else if (difficulty === "Normal") {
            setPokemonData(normalPokemon)
            height=  mobile ? "150vh": "100vh";
        } else if (difficulty === "Hard") {
            setPokemonData(hardPokemon)
            height = mobile ? "180vh": "100vh";
        }
        document.getElementById('root').style.height = height;
        setIsPlaying(true)
    }
    return (
        <div className="start_window">
            <div>
                <img src={icon} className="icon" alt='icon' />
                <h2>Memory Game</h2>
                <img src={icon} className="icon" alt='icon'/>
            </div>
            <ul>
                <li>
                    <button className='btn' onClick={chooseDifficulty}>Easy</button>
                </li>
                <li>
                    <button className='btn' onClick={chooseDifficulty}>Normal</button>
                </li>
                <li>
                    <button className='btn' onClick={chooseDifficulty}>Hard</button>
                </li>
            </ul>
        </div>
    )
}