import React, { useEffect, useState } from "react";
import "./Home.css";
import Categories from "../../../utilities/Categories";
import test from "../../../assets/img/test.jpg";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import ErrorMessage from "../../../utilities/ErrorMessage";
import { useNavigate } from "react-router";
import SideBar from "../../../components/Recruteur/SideBar/SideBar";
function Home({ name, setName }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  // const [difficulty, setDifficulty] = useState("");

  const [error, setError] = useState(false);
  const onQuizStart = () => {
    if (
      !category ||
      // || !difficulty
      !name
    ) {
      setError(true);
      return;
    } else {
      setError(false);
      return navigate("/quiz");
    }
  };
  return (
    <Box>
      <SideBar></SideBar>

      <div className="content">
        <div className="settings" style={{ marginTop: "5em" }}>
          <span style={{ fontSize: 50 }}>Quiz Settings</span>

          <div className="settings_select" style={{ marginTop: "5em" }}>
            {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
            <TextField
              style={{ marginBottom: 25 }}
              label="Enter Your Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{" "}
            <TextField
              select
              label="Select Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 25 }}
            >
              {Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>
            {/* <TextField
              select
              label="Select Difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 25 }}
            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
            </TextField> */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={onQuizStart}
            >
              Create Quiz
            </Button>
          </div>
        </div>
        <img src={test} className="banner" alt="quiz img" />
      </div>
    </Box>
  );
}

export default Home;
