import React, { useState } from 'react';
import words from "./wordList.json"
import "./index.css";
import HangmanDrawing from './hangmanDrawing/hangmandrawing';
function getWord() {
    return words[Math.floor(Math.random() * words.length)]
  }
  
function Index(){
    const [wordToGuess, setWordToGuess] = useState(getWord)
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  
    return (
        <>
            <div className='container'>
                <div className='heading'>Lose Win</div>
                <HangmanDrawing />
            </div>
        </>
    )
}
export default Index;