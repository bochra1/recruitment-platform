import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

const Questions = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <Box>
      <Typography variant="h3">{data.question}</Typography>
      <br></br>
      <div className="control" ref={radiosWrapper}>
        {data.choices.map((choice, i) => (
          <label className="radio has-background-light" key={i}>
            <input
              type="radio"
              name="answer"
              value={choice}
              onChange={changeHandler}
            />
            {choice}
          </label>
        ))}
      </div>
      {error && <div className="has-text-danger">{error}</div>}
      <button
        className="button is-link is-medium is-fullwidth mt-4"
        onClick={nextClickHandler}
      >
        Next
      </button>
    </Box>
  );
};

export default Questions;
