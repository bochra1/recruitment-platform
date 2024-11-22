import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    FormControlLabel,
    IconButton,
    MenuItem,
    Radio,
    Select,
    Switch,
    Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
// import Switch from "@mui/material/Switch";
// import Select from "@mui/material/Select";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ShortTextIcon from '@mui/icons-material/ShortText';
import SubjectIcon from '@mui/icons-material/Subject';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BsTrash } from 'react-icons/bs';
// import { IconButton } from "material-ui/core";
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import { BsFileText } from 'react-icons/bs';
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import { Button, FormControlLabel } from "@mui/material";
import { FcRightUp } from 'react-icons/fc';
import CloseIcon from '@mui/icons-material/Close';
// import Radio from "@mui/material/Radio";
import SendIcon from '@mui/icons-material/Send';

import './QuestionForm.css';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function QuestionForm() {
    const [questions, setQuestions] = useState([
        {
            questionText: 'What is the capital of Croatia ? ',
            questionType: 'radio',
            options: [
                { optionText: 'Split' },
                { optionText: 'osijek' },
                { optionText: 'Zagreb' },
                { optionText: 'Rijeka' }
            ],
            answer: false,
            answerKey: '',
            points: 0,
            open: true,
            required: false
        }
    ]);

    function changeQuestion(text, i) {
        var newQuestion = [...questions];
        newQuestion[i].questionText = text;
        setQuestions(newQuestion);
        console.log(newQuestion);
    }
    function changeQuestionValue(text, i, j) {
        var optionQuestion = [...questions];
        optionQuestion[i].options[j].optionText = text;
        setQuestions(optionQuestion);
        console.log(optionQuestion);
    }
    function addQuestionType(i, type) {
        let qs = [...questions];
        console.log(type);
        qs[i].questionType = type;
        setQuestions(qs);
    }
    function removeOption(i, j) {
        var RemoveOptionQuestion = [...questions];
        if (RemoveOptionQuestion[i].options.length > 1) {
            RemoveOptionQuestion[i].options.splice(j, 1);
            setQuestions(RemoveOptionQuestion);
            console.log(i + '__' + j);
        }
    }
    function addOption(i) {
        var optionsOfQuestion = [...questions];
        if (optionsOfQuestion[i].options.length < 5) {
            optionsOfQuestion[i].options.push({
                optionText: 'option' + (optionsOfQuestion[i].options.length + 1)
            });
        } else {
            console.log('Max 5 options');
        }
        setQuestions(optionsOfQuestion);
    }

    function copyQuestion(i) {
        expandCloseAll();
        let qs = [...questions];
        var newQuestion = { ...qs[i] };
        setQuestions([...questions, newQuestion]);
    }
    function deleteQuestion(i) {
        let qs = [...questions];
        if (questions.length > 1) {
            qs.splice(i, 1);
        }
        setQuestions(qs);
    }
    function requiredQuestion(i) {
        var reqQuestion = [...questions];
        reqQuestion[i].required = !reqQuestion[i].required;
        console.log(reqQuestion[i].required + '' + i);
        setQuestions(reqQuestion);
    }
    function addMoreQuestionField() {
        expandCloseAll();

        setQuestions([
            ...questions,
            {
                questionText: 'Question',
                questionType: 'radio',
                options: [{ optionText: 'option1' }],
                open: true,
                required: false
            }
        ]);
    }
    function setOptionAnswer(ans, qno) {
        var Questions = [...questions];
        Questions[qno].answerKey = ans;
        setQuestions(Questions);
        console.log(qno + '' + ans);
    }
    function setOptionPoints(points, qno) {
        var Questions = [...questions];
        Questions[qno].points = points;
        setQuestions(Questions);
        console.log(qno + '' + points);
    }
    function doneAnswer(i) {
        var answerOfQuestion = [...questions];
        answerOfQuestion[i].answer = !answerOfQuestion.answer;
        setQuestions(answerOfQuestion);
    }
    function addAnswer(i) {
        var answerOfQuestion = [...questions];
        answerOfQuestion[i].answer = !answerOfQuestion.answer;
        setQuestions(answerOfQuestion);
    }

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        var itemgg = [...questions];
        const itemF = reorder(itemgg, result.source.index, result.destination.index);
        setQuestions(itemF);
    }
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };
    function expandCloseAll() {
        let qs = [...questions];
        for (let j = 0; j < qs.length; j++) {
            qs[j].open = false;
        }
        setQuestions(qs);
    }
    function handleExpand(i) {
        let qs = [...questions];
        for (let j = 0; j < qs.length; j++) {
            if (i === j) {
                qs[i].open = true;
            } else {
                qs[j].open = false;
            }
        }
        setQuestions(qs);
    }

    function questionsUI() {
        return questions.map((ques, i) => (
            <Draggable key={i} draggableId={i + 'id'} index={i}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div>
                            <div style={{ marginBottom: '0px' }}>
                                <div style={{ width: '100%', marginBottom: '0px' }}>
                                    <DragIndicatorIcon
                                        style={{
                                            transform: 'rotate(-90deg)',
                                            color: '#DAE0E2',
                                            position: 'relative',
                                            left: '300px'
                                        }}
                                        fontSize='small'
                                    />
                                </div>
                                <div>
                                    <Accordion
                                        expanded={questions[i].open}
                                        onChange={() => {
                                            handleExpand(i);
                                        }}
                                        className={questions[i].open ? 'add_border' : ''}
                                    >
                                        <AccordionSummary
                                            aria-controls='panella-content'
                                            id='panella-header'
                                            elevation={1}
                                            style={{ width: '100%' }}
                                        >
                                            {!questions[i].open ? (
                                                <div className='saved_questions'>
                                                    <Typography
                                                        style={{
                                                            fontSize: '30px',
                                                            fontWeight: '400',
                                                            letterSpacing: '.1px',
                                                            lineHeight: '24px',
                                                            paddingBottom: '8px'
                                                        }}
                                                    >
                                                        {i + 1}. {questions[i].questionText}
                                                    </Typography>

                                                    {ques.options.map((op, j) => (
                                                        <div key={j}>
                                                            <div style={{ display: 'flex' }}>
                                                                <FormControlLabel
                                                                    style={{
                                                                        marginLeft: '5px',
                                                                        marginBottom: '5px'
                                                                    }}
                                                                    disabled
                                                                    control={
                                                                        <input
                                                                            type={ques.questionType}
                                                                            color='primary'
                                                                            style={{
                                                                                marginRight: '3px'
                                                                            }}
                                                                            required={ques.type}
                                                                        />
                                                                    }
                                                                    label={
                                                                        <Typography
                                                                            style={{
                                                                                fontFamily:
                                                                                    'Roboto,Arial,sans-serif',
                                                                                fontSize: '20px',
                                                                                fontWeight: '400',
                                                                                letterSpacing:
                                                                                    '.2px',
                                                                                lineHeight: '20px',
                                                                                color: '#202124'
                                                                            }}
                                                                        >
                                                                            {
                                                                                ques.options[j]
                                                                                    .optionText
                                                                            }
                                                                        </Typography>
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </AccordionSummary>
                                        {!questions[i].answer ? (
                                            <div className='questions_boxes'>
                                                <AccordionDetails className='add_question'>
                                                    <div className='add_question_top'>
                                                        <input
                                                            type='text'
                                                            className='question'
                                                            placeholder='Question'
                                                            value={ques.questionText}
                                                            onChange={(e) => {
                                                                changeQuestion(e.target.value, i);
                                                            }}
                                                        ></input>
                                                        <CropOriginalIcon
                                                            style={{ color: '#5f6368' }}
                                                        />
                                                        <Select
                                                            className='select'
                                                            style={{
                                                                color: '5f6368',
                                                                fontSize: '13px'
                                                            }}
                                                        >
                                                            <MenuItem
                                                                id='text '
                                                                value='Text'
                                                                onClick={() => {
                                                                    addQuestionType(i, 'text');
                                                                }}
                                                            >
                                                                {' '}
                                                                <SubjectIcon
                                                                    style={{ marginRight: '10px' }}
                                                                />{' '}
                                                                Paragraph
                                                            </MenuItem>
                                                            <MenuItem
                                                                id='checkbox '
                                                                value='Checkbox'
                                                                onClick={() => {
                                                                    addQuestionType(i, 'checkbox');
                                                                }}
                                                            >
                                                                {' '}
                                                                <CheckBoxIcon
                                                                    style={{
                                                                        marginRight: '10px',
                                                                        color: '#70757a'
                                                                    }}
                                                                    checked
                                                                />{' '}
                                                                CheckBoxes
                                                            </MenuItem>
                                                            <MenuItem
                                                                id='radio '
                                                                value='Radio'
                                                                onClick={() => {
                                                                    addQuestionType(i, 'radio');
                                                                }}
                                                            >
                                                                {' '}
                                                                <Radio
                                                                    style={{
                                                                        marginRight: '10px',
                                                                        color: '#70757a'
                                                                    }}
                                                                    checked
                                                                />{' '}
                                                                Multiple choice
                                                            </MenuItem>
                                                        </Select>
                                                    </div>
                                                    {ques.options.map((op, j) => (
                                                        <div className='add_question_body' key={j}>
                                                            {ques.questionType != 'text' ? (
                                                                <input
                                                                    type={ques.questionType}
                                                                    style={{ marginRight: '10px' }}
                                                                />
                                                            ) : (
                                                                <ShortTextIcon
                                                                    style={{ marginRight: '10px' }}
                                                                />
                                                            )}
                                                            <div>
                                                                <input
                                                                    type='text'
                                                                    className='text_input'
                                                                    placeholder='option '
                                                                    value={
                                                                        ques.options[j].optionText
                                                                    }
                                                                    onChange={(e) => {
                                                                        changeQuestionValue(
                                                                            e.target.value,
                                                                            i,
                                                                            j
                                                                        );
                                                                    }}
                                                                ></input>
                                                            </div>

                                                            <CropOriginalIcon
                                                                style={{ color: '#5f6368' }}
                                                            />
                                                            <IconButton aria-label='delete'>
                                                                <CloseIcon
                                                                    onClick={() => {
                                                                        removeOption(i, j);
                                                                    }}
                                                                />
                                                            </IconButton>
                                                        </div>
                                                    ))}
                                                    {ques.options.length < 5 ? (
                                                        <div className='add_question_body'>
                                                            <FormControlLabel
                                                                disabled
                                                                control={
                                                                    ques.questionType != 'text' ? (
                                                                        <input
                                                                            type={ques.questionType}
                                                                            color='primary'
                                                                            inputProps={{
                                                                                'aria-label':
                                                                                    'secondary checkbox'
                                                                            }}
                                                                            style={{
                                                                                marginLeft: '10px',
                                                                                marginRight: '10px'
                                                                            }}
                                                                            disabled
                                                                        />
                                                                    ) : (
                                                                        <ShortTextIcon
                                                                            style={{
                                                                                marginRight: '10px'
                                                                            }}
                                                                        />
                                                                    )
                                                                }
                                                                label={
                                                                    <div>
                                                                        <input
                                                                            type='text'
                                                                            className='tewt_input'
                                                                            style={{
                                                                                fontSize: '13px',
                                                                                width: '60px'
                                                                            }}
                                                                            placeholder='Add other'
                                                                        ></input>
                                                                        <Button
                                                                            size='small'
                                                                            style={{
                                                                                textTransform:
                                                                                    'none',
                                                                                color: '#4285f4',
                                                                                fontSize: '13px',
                                                                                fontWeight: '600px'
                                                                            }}
                                                                            onClick={() => {
                                                                                addOption(i);
                                                                            }}
                                                                        >
                                                                            Add option
                                                                        </Button>
                                                                    </div>
                                                                }
                                                            />
                                                        </div>
                                                    ) : (
                                                        ''
                                                    )}

                                                    <div className='add_footer'>
                                                        <div className='add_question_bottom_left'>
                                                            <Button
                                                                size='small'
                                                                style={{
                                                                    textTransform: 'none',
                                                                    color: '#4285f4',
                                                                    fontSize: '13px',
                                                                    fontWeight: '600'
                                                                }}
                                                                // onClick={() => {
                                                                //   addA;
                                                                // }}
                                                            >
                                                                <FcRightUp
                                                                    style={{
                                                                        border: '2px solid #4285f4 ',
                                                                        padding: '2px',
                                                                        marginRight: '8px'
                                                                    }}
                                                                />{' '}
                                                                Answer Key
                                                            </Button>
                                                        </div>
                                                        <div className='add_question_bottom'>
                                                            <IconButton
                                                                aria-label='Copy'
                                                                onClick={() => {
                                                                    copyQuestion(i);
                                                                }}
                                                            >
                                                                <FilterNoneIcon />
                                                            </IconButton>
                                                            <IconButton
                                                                aria-label='delete'
                                                                onClick={() => {
                                                                    deleteQuestion(i);
                                                                }}
                                                            >
                                                                <BsTrash />
                                                            </IconButton>
                                                            <span
                                                                style={{
                                                                    color: '#5f6368',
                                                                    fontSize: '13px'
                                                                }}
                                                            >
                                                                {' '}
                                                                Required
                                                            </span>
                                                            <Switch
                                                                name='checkedA'
                                                                color='primary'
                                                                checked
                                                                onClick={() => {
                                                                    requiredQuestion(i);
                                                                }}
                                                            ></Switch>
                                                            <IconButton>
                                                                <MoreVertIcon />
                                                            </IconButton>
                                                        </div>
                                                    </div>
                                                </AccordionDetails>{' '}
                                                <AccordionDetails className='add_question'>
                                                    <div className='top_header'>
                                                        Choisissez la bonne réponse
                                                    </div>
                                                    <div>
                                                        <div className='add_question_top'>
                                                            <input
                                                                type='text'
                                                                className='question'
                                                                placeholder='Question'
                                                                value={ques.questionText}
                                                                disabled
                                                            />
                                                            <input
                                                                type='number'
                                                                className='points'
                                                                min='0'
                                                                step='1'
                                                                placeholder='0'
                                                                onChange={(e) => {
                                                                    setOptionPoints(
                                                                        e.target.value,
                                                                        i
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                        {ques.options.map((op, j) => (
                                                            <div
                                                                className='add_question_body'
                                                                key={j}
                                                                style={{
                                                                    marginLeft: '8px',
                                                                    marginBottom: '10px',
                                                                    marginTop: '5px'
                                                                }}
                                                            >
                                                                <div key={j}>
                                                                    <div
                                                                        style={{ display: 'flex' }}
                                                                        className=''
                                                                    >
                                                                        <div className='form-check'>
                                                                            <label
                                                                                style={{
                                                                                    fontSize: '13px'
                                                                                }}
                                                                                onClick={() => {
                                                                                    setOptionAnswer(
                                                                                        ques
                                                                                            .options[
                                                                                            j
                                                                                        ]
                                                                                            .optionText,
                                                                                        i
                                                                                    );
                                                                                }}
                                                                            >
                                                                                {ques.questionType !=
                                                                                'text' ? (
                                                                                    <input
                                                                                        type={
                                                                                            ques.questionType
                                                                                        }
                                                                                        name={
                                                                                            ques.questionText
                                                                                        }
                                                                                        value='option3'
                                                                                        className='form_check_input'
                                                                                        required={
                                                                                            ques.required
                                                                                        }
                                                                                        style={{
                                                                                            marginRight:
                                                                                                '10px',
                                                                                            marginBottom:
                                                                                                '10px',
                                                                                            marginTop:
                                                                                                '5px'
                                                                                        }}
                                                                                    />
                                                                                ) : (
                                                                                    <ShortTextIcon
                                                                                        style={{
                                                                                            marginRight:
                                                                                                '10px'
                                                                                        }}
                                                                                    />
                                                                                )}

                                                                                {
                                                                                    ques.options[j]
                                                                                        .optionText
                                                                                }
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                        <div className=' add_question_body'>
                                                            <Button
                                                                size='small'
                                                                style={{
                                                                    textTransform: 'none',
                                                                    color: '#4285f4',
                                                                    fontSize: '13px',
                                                                    fontWeight: '600'
                                                                }}
                                                            >
                                                                <BsFileText
                                                                    style={{
                                                                        fontSize: '20px',
                                                                        marginRight: '8px'
                                                                    }}
                                                                />{' '}
                                                                Add Answer Feedback
                                                            </Button>
                                                        </div>
                                                        <div className='add_question_bottom'>
                                                            <Button
                                                                variant='outlined'
                                                                color='primary'
                                                                style={{
                                                                    textTransform: 'none',
                                                                    color: '#4285f4',
                                                                    fontSize: '13px',
                                                                    fontWeight: '600'
                                                                }}
                                                                onClick={() => {
                                                                    doneAnswer(i);
                                                                }}
                                                            >
                                                                confirmer
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </AccordionDetails>
                                                {!ques.answer ? (
                                                    <div className='question_edit'>
                                                        <AddCircleOutlinedIcon
                                                            className='edit'
                                                            style={{ fontSize: '15%' }}
                                                            onClick={addMoreQuestionField}
                                                        />
                                                        <OndemandVideoOutlinedIcon
                                                            className='edit'
                                                            style={{ fontSize: '15%' }}
                                                        />
                                                        <CropOriginalIcon
                                                            className='edit'
                                                            style={{ fontSize: '15%' }}
                                                        />
                                                        <TextFieldsIcon
                                                            className='edit'
                                                            style={{ fontSize: '15%' }}
                                                        />
                                                    </div>
                                                ) : (
                                                    ''
                                                )}
                                                <div className='question_edit'>
                                                    <AddCircleOutlinedIcon
                                                        className='edit'
                                                        style={{ fontSize: '15%' }}
                                                        onClick={addMoreQuestionField}
                                                    />
                                                    <OndemandVideoOutlinedIcon
                                                        className='edit'
                                                        style={{ fontSize: '15%' }}
                                                    />
                                                    <CropOriginalIcon
                                                        className='edit'
                                                        style={{ fontSize: '15%' }}
                                                    />
                                                    <TextFieldsIcon
                                                        className='edit'
                                                        style={{ fontSize: '15%' }}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            ''
                                        )}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
        ));
    }
    return (
        <div>
            <div className='question_form'>
                <br></br>
                <div className='section'>
                    <div className='question_title_section'>
                        <div className='question_form_top'>
                            <input
                                type='text'
                                className='question_form_top_name'
                                style={{ color: 'black' }}
                                placeholder='untitled document'
                            ></input>
                            <input
                                type='text'
                                className='question_form_top_desc'
                                placeholder='Form Description'
                            ></input>
                        </div>
                    </div>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId='droppable'>
                            {(provided, snapshot) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {questionsUI()}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    <Button variant='contained' endIcon={<SendIcon />}>
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default QuestionForm;
