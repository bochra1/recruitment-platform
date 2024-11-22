import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Editor } from "@tinymce/tinymce-react";
import { InputLabel, Stack } from "@mui/material";
import { Typography } from "@mui/material";
export default function Step1Event() {
  return (
    <React.Fragment>
      <Grid container spacing={7} direction="row" justifyContent="center">
        <Grid item xs={20}>
          <TextField
            required
            id="Title"
            name="Title"
            label="Titre de l'événement"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="localisation"
            name="localisation"
            label="Localisation"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="demo-multiple-checkbox-label">
            {" "}
            Description
          </InputLabel>
          <Editor
            init={{
              plugins: "table",
              table_default_attributes: {
                border: "10",
              },
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
