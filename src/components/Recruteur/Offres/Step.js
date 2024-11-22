import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
export default function Step1() {
  // const [value, setValue] = useState({
  //   poste: "",
  //   type: "",
  //   lieu: "",
  // });

  return (
    <React.Fragment>
      <Grid container spacing={5} direction="row" justifyContent="center">
        <Grid item xs={12}>
          <TextField
            required
            id="poste"
            name="poste"
            label="Intitulé du poste bref mais spécifique"
            fullWidth
            variant="standard"
            // value={value.poste}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Nom de l'entreprise"
            name="type"
            label="Nom de l'entreprise"
            fullWidth
            variant="standard"
            // value={value.type}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Lieu "
            name="lieu "
            label="Lieu (ville ou code postal)"
            fullWidth
            variant="standard"
            // value={value.lieu}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
