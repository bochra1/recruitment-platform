import * as React from "react";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import DesktopTimePicker from "@mui/lab/DesktopTimePicker";
import Grid from "@mui/material/Grid";

export default function Step2Event() {
  const [value, setValue] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date("2018-01-01T00:00:00.000Z"));
  const [date, setDate] = React.useState(new Date("2018-01-01T00:00:00.000Z"));

  return (
    <React.Fragment>
      <Grid container spacing={5} direction="row" justifyContent="center">
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              orientation="landscape"
              openTo="day"
              value={value}
              // shouldDisableDate={isWeekend}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopTimePicker
              label="HEURE DE DÉBUT"
              value={time}
              onChange={(newValue) => {
                setTime(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopTimePicker
              label="HEURE DE FIN"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
