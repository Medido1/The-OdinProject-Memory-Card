import '../styles/StartWindow.css'

export default function StartWindow({setDifficulty, setIsPlaying}) {

    function chooseDifficulty(e){
        let difficulty = e.target.textContent;
        setDifficulty(difficulty)
        setIsPlaying(true)
    }
    return (
        <div className="start_window">
            <h2>Memory Game</h2>
            <ul>
                <li>
                    <button className='btn' onClick={chooseDifficulty}>Easy</button>
                </li>
            </ul>
        </div>
    )
}