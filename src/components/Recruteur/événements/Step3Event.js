import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import NativeSelect from "@mui/material/NativeSelect";

export default function Step3Event() {
  return (
    <React.Fragment>
      <Typography align="center" variant="h5" gutterBottom>
        Dites à vos invités qui vous êtes !
      </Typography>
      <br></br>
      <Grid container spacing={5} direction="row" justifyContent="center">
        <Grid item xs={12}>
          <TextField
            required
            id="Organisateur"
            name="Organisateur"
            label="Nom de l'organisateur"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Contact"
            name="Contact"
            label="email ou téléphone"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ m: 0, width: 400 }}>
            <FormControl fullWidth>
              {" "}
              <Typography variant="subtitle1" gutterBottom component="div">
                Type d'organisation
              </Typography>
              <NativeSelect
                defaultValue={1}
                inputProps={{
                  name: " Type d'organisation",
                  id: "uncontrolled-native",
                }}
              >
                <option value={1}> </option>
                <option value={2}>Entreprise ou groupe</option>
                <option value={3}>Entité académique</option>
                <option value={4}>Freelance</option>
                <option value={5}>Agence</option>
                <option value={6}>Autre</option>
              </NativeSelect>
            </FormControl>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
