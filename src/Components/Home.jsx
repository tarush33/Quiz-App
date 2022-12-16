import React from 'react'
import Timer from './Timer';
import Appbar from './Appbar';
import StartQuiz from './StartQuiz';
import Question from './Question';
import QuizEnd from './QuizEnd';
import HighScores from './HighScores';
import { useState } from 'react'
import { useStoreState,useStoreActions } from 'easy-peasy';


const Home = () => {
    const currentQuestion=useStoreState((state)=>state.currentQuestion)
    const questions=useStoreState((store)=>store.questions)
    const start=useStoreState((state)=>state.start)
    const over=useStoreState((state)=>state.over)
    const getAllScores=useStoreActions((actions)=>actions.getAllScores)
    const timeUpBeforeFinish=useStoreState((state)=>state.timeUpBeforeFinish)
    getAllScores()

    return (
        <div>
            {   
                timeUpBeforeFinish?
                <QuizEnd/>:
                !start?
                <StartQuiz/>:
                over?
                <QuizEnd/>:
                <Question question={questions[currentQuestion]}/>
            }
        </div>
    )
}

export default Home
