import React, { useState } from 'react'

import peachIMG from '../images/Princess_Peach.png'

export default function Flashcards() {

    const FlashCards = [
        { id: 0, question: "Start", answer: "Press the \"next\" button to begin", difficulty: ""},
        { id: 1, question: "What is the name of mario's Brother?", answer: "Luigi", difficulty: "Easy"}, 
        { id: 2, question: "What is this princess' name?", answer: "Peach", difficulty:"Easy", image: <img src={peachIMG}/>},
        { id: 3, question: "Who is mario's worst nemesis?", answer: "Bowser", difficulty:"Easy"},
        { id: 4, question: "What year was the first mario game released?", answer: "1900", difficulty:"Medium"},
        { id: 5, question: "Who's mansion is it?", answer: "Luigi's", difficulty:"Medium"},
        { id: 6, question: "What year was diddy kong introduced?", answer: "1957", difficulty:"Medium"},
        { id: 7, question: "What galaxy does mario like the most?", answer: "milky-way", difficulty:"Medium"},
        { id: 8, question: "When did yoshi make his first appearence?", answer: "1950", difficulty:"Hard"},
        { id: 9, question: "What is mario's ultimate in smash?", answer: "Starpower", difficulty:"Hard"},
        { id: 10, question: "What is Toad's real name?", answer: "Kevin", difficulty:"Hard"},
        { id: 11, question: "Who is Bowser Jr's mom?", answer: "Peach", difficulty:"Hard"},
    ];

    const [currentCard, setCurrentCard] = useState(FlashCards[0]);
    const [count, setCount] = useState(0);
    const [answer, setAnswer] = useState(false)

    // const downCount = () => {
    //     setCount(count - 1); 
    // }

    const upCount = () => {
        setCurrentCard(FlashCards[Math.floor(Math.random() * 10) + 1]); 
        setAnswer(false)
    }

    const flipCard = () => {
        setAnswer((current) => !current)
    }


  return (
    <div className='flashcardSection'>

        <div className='flashcardContainer'>
        


            <div className='flashcardQuestion' onClick={flipCard}>
                {answer ? currentCard.answer : currentCard.question}
                {currentCard.image}
            </div>
            
            {currentCard == FlashCards[0] ? "": <div className='rank'>Difficulty: {currentCard.difficulty}</div>}
            
            
        </div>

    <div className='buttonContainer'>
        {/* <button onClick={downCount}>back</button> */}
        <div className='countBox'>{currentCard.id}</div>
        <button onClick={upCount}>next</button>
    </div>

    </div>
  )
}
