import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { Chart } from 'primereact/chart';

import { formatTime } from '../../../utilities';

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
    const [correctAnswers, setCorrectAnswers] = useState(0);

    useEffect(() => {
        let correct = 0;
        results.forEach((result, index) => {
            if (result.a === data[index].answer) {
                correct++;
            }
        });
        setCorrectAnswers(correct);
        // eslint - disable - next - line;
    }, []);

    return (
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >
            <h3>Your results</h3>
            <p>
                {correctAnswers} of {data.length}
            </p>

            <p>
                <strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong>
            </p>
            <p>
                <strong>Your time: </strong>
                {formatTime(time)}
            </p>
            <br></br>
            <button className='button is-info mr-2' onClick={onAnswersCheck}>
                Check your answers
            </button>
        </div>
    );
};

export default End;
