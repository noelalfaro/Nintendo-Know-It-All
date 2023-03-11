import React from 'react'
import '../App.css'

export default function GuessForm({ label, handleChange, currentVal, correct_answer }) {

    return (
        <form className='guessFormContainer' >
            <input type="text"
                id={correct_answer}
                name={label}
                onChange={handleChange}
                placeholder='Guess & Check ->'
                className='guessInput'
                value={currentVal}
                style={{ textTransform: "uppercase" }} />
        </form>

    )
}
