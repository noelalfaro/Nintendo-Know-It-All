import React from 'react'
import '../App.css'
import { TypeAnimation } from 'react-type-animation';

export default function Title() {
  return (
    <div className='titleSection'>

        <TypeAnimation
            sequence={[
                'The Ultimate Nintendo Know It All!',
                3000
            ]}
            wrapper="h1"
            cursor={false}

            
        />
        <TypeAnimation
            sequence={[4000,
                'How much do you know about this iconic franchise?'
            ]}
            speed="70"
            wrapper="p"
            cursor={false}
        />


        <TypeAnimation
            sequence={[8000,
                'Test your Nintendo knowledge with these 10 flashcards!'
            ]}
            wrapper="p"
            cursor={false}
        />



{/* 

Test your Nintendo knowledge with this flashcard quiz game!
        <h1>The Ultimate Nintendo Know It All!</h1>

        <p>How much do you know about this iconic franchise? <br /> Test your Nintendo knowledge with this flashcard quiz game!</p> */}

    </div>
  )
}
