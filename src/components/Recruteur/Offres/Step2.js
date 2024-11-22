import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import { Editor } from "@tinymce/tinymce-react";

import InputAdornment from "@mui/material/InputAdornment";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Temps plein",
  "Temps partiel",
  "CDD",
  "CDI",
  "Stage",
  "Intérim",
  "Freelance/indépendant",
  "SIVP",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function Step2() {
  const [personName, setPersonName] = React.useState([]);
  // const[type,setType]=useState('');
  // const[place,setPlace]=useState('');

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Typography variant="subtitle2" gutterBottom component="div">
            De quel type d'emploi s'agit-il ? (plusieurs choix possibles)
          </Typography>

          <FormControl sx={{ m: 1, width: 500 }}>
            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="subtitle2" gutterBottom component="div">
            WorkplaceType
          </Typography>
          <FormControl sx={{ m: 1, width: 500 }}>
            <InputLabel id="demo-multiple-checkbox-label">Workplace</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              input={<OutlinedInput label="Workplace" />}
            >
              <MenuItem value={1}>On site</MenuItem>
              <MenuItem value={2}>Remote</MenuItem>
              <MenuItem value={3}>Hybrid</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="subtitle2" gutterBottom component="div">
            Quel est le salaire pour ce poste ? (facultatif)
          </Typography>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">salaire</InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
