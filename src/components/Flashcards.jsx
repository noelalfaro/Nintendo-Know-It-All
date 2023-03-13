import React, { useState } from 'react'
import peachIMG from '../images/Princess_Peach.png'
import DKImg from '../images/Donkey_Kong_flier.jpg'
import star from '../images/star.jpg'
import bToad from '../images/bToad.jpg'
import Daisy from '../images/daisy.jpg'
import GuessForm from './guessForm'

export default function Flashcards() {

    const FlashCards = [
        { id: 0, question: "Start - Press this card to see corresponding answer", answer: "Press the \"next\" button to begin", difficulty: "" },
        { id: 1, question: "What is the name of mario's Brother?", answer: "LUIGI", difficulty: "Easy" },
        { id: 2, question: "What is this princess' name?", answer: "PEACH", difficulty: "Easy", image: <img src={peachIMG} /> },
        { id: 3, question: "Who is mario's worst nemesis?", answer: "BOWSER", difficulty: "Easy" },
        { id: 4, question: "What year was the first Super Mario Bros. game released?", answer: "1985", difficulty: "Medium" },
        { id: 5, question: "Who's mansion is it?", answer: "LUIGI", difficulty: "Medium" },
        { id: 6, question: "What year was bowser jr introduced?", answer: "2002", difficulty: "Medium" },
        { id: 7, question: "What game did Mario make his first appearence", answer: "DONKEY KONG", difficulty: "Medium" },
        { id: 8, question: "When game did yoshi make his first appearence?", answer: "SUPER MARIO WORLD", difficulty: "Hard" },
        { id: 9, question: "What ability does this item give mario", answer: "STARPOWER", difficulty: "Hard", image: <img src={star} /> },
        { id: 10, question: "What is Blue Toad's real name?", answer: "BUCKEN BERRY", difficulty: "Hard", image: <img src={bToad} /> },
        { id: 11, question: "What kingdom does Princess Daisy Rule over?", answer: "SARASALAND", difficulty: "Hard", image: <img src={Daisy} /> },
    ];

    const [inputs, setInputs] = useState({
        'answer': '',
    });


    const [count, setCount] = useState(1);
    const [currentCard, setCurrentCard] = useState(FlashCards[0]);
    const [answer, setAnswer] = useState(false);
    const [trueCard, setTrueCard] = useState({});
    const [correct_answer, setCheckedAnswer] = useState('');

    const downCount = () => {
        setCheckedAnswer('');
        if (FlashCards[count].id > FlashCards[0].id) {
            setCount(count - 1)
            setCurrentCard(FlashCards[count])
            setAnswer(false)

        } if (currentCard.id == 1) {
            setCount(FlashCards.length - 1)
            setCurrentCard(FlashCards[count]);
            setAnswer(false);
        }
    }

    const upCount = () => {
        setCheckedAnswer('');
        if (FlashCards[count].id < FlashCards.length - 1) {
            setCount(count + 1);
            setCurrentCard(FlashCards[count]);
            setAnswer(false);
            setTrueCard(currentCard);
        } else {
            setCount(0);
            setCurrentCard(FlashCards[count])
            setAnswer(false);
            setTrueCard(currentCard);
        }

    }

    const flipCard = () => {
        setAnswer((current) => !current)
    }
    console.log('currentCard.answer: ', currentCard.answer);
    console.log('inputs[answer]: ', inputs['answer']);


    const onCheckAnswer = () => {
        if (currentCard.answer == inputs['answer']) {
            setCheckedAnswer('correct');
            console.log("Correct");
            setAnswer(true)
        } else {
            setCheckedAnswer('wrong');
            console.log("Wrong");
            setAnswer(true);
        }
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
                <div className='formContainer'>
                    <GuessForm
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value.toUpperCase(),

                        }))}
                        label='answer'
                        correct_answer={correct_answer}
                    ></GuessForm>
                    <button type='submit' onClick={onCheckAnswer} className="formButton">?</button>
                </div>

                <div className='countBox'>#{currentCard.id}</div>
                <button onClick={downCount}>Back</button>
                <button onClick={upCount}>Next</button>
            </div>
        </div >
    )
}
