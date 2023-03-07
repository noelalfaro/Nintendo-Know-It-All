import React, { useState } from 'react'
import peachIMG from '../images/Princess_Peach.png'
import DKImg from '../images/Donkey_Kong_flier.jpg'
import star from '../images/star.jpg'
import bToad from '../images/bToad.jpg'
import Daisy from '../images/daisy.jpg'

export default function Flashcards() {

    const FlashCards = [
        { id: 0, question: "Start - Press this card to see corresponding answer" , answer: "Press the \"next\" button to begin", difficulty: ""},
        { id: 1, question: "What is the name of mario's Brother?", answer: "Luigi", difficulty: "Easy"}, 
        { id: 2, question: "What is this princess' name?", answer: "Peach", difficulty:"Easy", image: <img src={peachIMG}/>},
        { id: 3, question: "Who is mario's worst nemesis?", answer: "Bowser", difficulty:"Easy"},
        { id: 4, question: "What year was the first Super Mario Bros. game released?", answer: "1985", difficulty:"Medium"},
        { id: 5, question: "Who's mansion is it?", answer: "Luigi's", difficulty:"Medium"},
        { id: 6, question: "What year was bowser jr introduced?", answer: "2002", difficulty:"Medium"},
        { id: 7, question: "What game did Mario make his first appearence", answer: "Donkey-Kong (1981)", difficulty:"Medium"},
        { id: 8, question: "When did yoshi make his first appearence?", answer: "1990 - Super Mario World", difficulty:"Hard"},
        { id: 9, question: "What ability does this item give mario", answer: "Starpower", difficulty:"Hard", image: <img src={star}/>},
        { id: 10, question: "What is Blue Toad's real name?", answer: "Bucken-Berry", difficulty:"Hard", image: <img src={bToad}/>},
        { id: 11, question: "What kingdom does Princess Daisy Rule over?", answer: "Sarasaland", difficulty:"Hard",image: <img src={Daisy}/>},
    ];

    const [currentCard, setCurrentCard] = useState(FlashCards[0]);
    const [count, setCount] = useState(0);
    const [answer, setAnswer] = useState(false)

    const upCount = () => {
        setCurrentCard(FlashCards[Math.floor(Math.random() * 11) + 1]); 
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
            {currentCard == FlashCards[0] ? "" : <div className='rank'>Difficulty: {currentCard.difficulty}</div>}
        </div>

        <div className='buttonContainer'>
            <div className='countBox'>#{currentCard.id}</div>
            <button onClick={upCount}>next</button>
        </div>
    </div>
  )
}
