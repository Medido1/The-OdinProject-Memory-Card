import { useState } from 'react'
import questionIcon from '../assets/images/question-mark.webp'

export default function Rules() {
  const [showRules, setShowRules] = useState(false);
  
  return (
    <>
    <img src={questionIcon} className='icon rules' alt='click for the rules of the game'
      onClick={() => setShowRules(!showRules)}
    />
    {showRules && 
      <div className="rules_container">
        <p>
        "Click each card once to win—no repeats allowed!"
        </p>
      </div>
    }
    </>
  )
}