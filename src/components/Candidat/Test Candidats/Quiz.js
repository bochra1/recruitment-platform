import React, { useState, useEffect } from 'react';
import quizData from '../../../data/quizData.json';
import End from './End';
import HomeQuiz from './HomeQuiz';
import SideBar from '../../Candidat/SideBar/Sidebar';

import Modal from './Modal';
import Questions from './Questions';
import './Quiz.css';

let interval;

const Quiz = () => {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (step === 3) {
            clearInterval(interval);
        }
    }, [step]);

    const quizStartHandler = () => {
        setStep(2);
        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
    };

    const resetClickHandler = () => {
        setActiveQuestion(0);
        setAnswers([]);
        setStep(2);
        setTime(0);
        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
    };

    return (
        <div>
            <SideBar></SideBar>
            <div className='App'>
                {step === 1 && (
                    <Questions
                        data={quizData.data[activeQuestion]}
                        onAnswerUpdate={setAnswers}
                        numberOfQuestions={quizData.data.length}
                        activeQuestion={activeQuestion}
                        onSetActiveQuestion={setActiveQuestion}
                        onSetStep={setStep}
                    />
                )}
                {step === 3 && (
                    <End
                        results={answers}
                        data={quizData.data}
                        onReset={resetClickHandler}
                        onAnswersCheck={() => setShowModal(true)}
                        time={time}
                    />
                )}

                {showModal && (
                    <Modal
                        onClose={() => setShowModal(false)}
                        results={answers}
                        data={quizData.data}
                    />
                )}
            </div>
        </div>
    );
};

export default Quiz;
