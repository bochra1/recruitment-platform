import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import NativeSelect from "@mui/material/NativeSelect";

import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import Stack from "@mui/material/Stack";

import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { MDBInput } from "mdbreact";
import login from "../../assets/img/login.jpg";
import "./Style.css";
import { useNavigate } from "react-router";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: "15px",
    spacing: 4,
    color: "#E65100",
  },
}));
const ariaLabel = { "aria-label": "description" };

function getSteps() {
  return ["Your contact ", "Your details", "Validate"];
}
const BasicForm = () => {
  const { control } = useFormContext();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    Confirmpassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      hint: "username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      error: "must be 3 characters",

      required: true,
    },
    {
      id: 2,
      name: "date de naissance",
      type: "date",
      hint: "date de naissance",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      hint: "email",
      errorMessage: "",

      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      hint: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,

      required: true,
    },
    {
      id: 4,
      name: "Confirmpassword",
      type: "password",
      hint: "Confirmpassword",
      errorMessage: "Passwords don't match!",
      // pattern: values.password,

      required: true,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {inputs.map((input) => (
        <MDBInput
          inputProps={ariaLabel}
          variant="outlined"
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
          fullWidth
          margin="normal"
        />
      ))}
    </div>
  );
};

const PersonalForm = () => {
  const { control } = useFormContext();

  return (
    <div style={{ marginTop: "10%" }}>
      <Typography variant="subtitle2" textAlign="left">
        Vous êtes
      </Typography>
      <NativeSelect
        fullWidth
        defaultValue={1}
        inputProps={{
          name: " Vous êtes",
          id: "uncontrolled-native",
        }}
      >
        <option value={1}> </option>
        <option value={2}>Etudiant</option>
        <option value={3}>Jeune diplomé </option>
        <option value={4}>Indépendant</option>
        <option value={5}>Autre</option>
      </NativeSelect>

      <div style={{ marginTop: "5%" }}>
        <Typography variant="subtitle2" textAlign="left">
          Gouvernorat{" "}
        </Typography>
        <NativeSelect
          fullWidth
          defaultValue={1}
          inputProps={{
            name: " Vous êtes",
            id: "uncontrolled-native",
          }}
        >
          <option value={1}> </option>
          <option value={2}>Ariana</option>
          <option value={3}>Tunis </option>
          <option value={4}>Ben Arous</option>
          <option value={5}>Bizerte</option>
          <option value={6}> Gafsa</option>
          <option value={7}>Gabes</option>
          <option value={8}>Jendouba </option>
          <option value={9}>Kairouan</option>
          <option value={10}>Gasserine</option>
          <option value={11}> Kebili</option>
          <option value={12}>Le Kef</option>
          <option value={13}>Mahdia </option>
          <option value={14}>La Manouba</option>
          <option value={15}>Médenine</option>
          <option value={16}> Monsatir</option>
          <option value={17}>Nabeul</option>
          <option value={18}>Sfax</option>
          <option value={19}>Sidi Bouzid</option>
          <option value={20}>Sousse</option>
          <option value={21}>Siliana</option>
          <option value={22}>Tataouine</option>
          <option value={23}>Tozeur</option>
          <option value={24}>Zaghouane</option>
          <option value={24}>Beja</option>
        </NativeSelect>
      </div>
      <div style={{ marginTop: "5%" }}>
        <Typography variant="subtitle2" textAlign="left">
          Civilité
        </Typography>
        <RadioGroup row name="use-radio-group" defaultValue="">
          <FormControlLabel value="Homme" label="Homme" control={<Radio />} />
          <FormControlLabel value="Femme" label="Femme" control={<Radio />} />
        </RadioGroup>
      </div>
      {/* <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <MDBInput
            inputProps={ariaLabel}
            id="phone"
            variant="outlined"
            hint="phone"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}
    </div>
  );
};
const PaymentForm = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}
    >
      <Checkbox {...label} defaultChecked />

      <Typography
        variant="h1"
        style={{ fontSize: "700" }}
        class="form-check-label"
        for="flexCheckChecked"
      >
        J'accepte les conditions d'utilisation
      </Typography>
      <br></br>
    </div>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <PersonalForm />;
    case 2:
      return <PaymentForm />;
    default:
      return "unknown step";
  }
}

const RegisterCandidat = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      password2: "",
      votreentreprise: "",
      Address: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const Navigate = useNavigate();
  const routeChange = () => Navigate("/register-recruteur");
  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div className="row">
      <img
        src={login}
        style={{ width: "60%", height: "100%", padding: "0.5px" }}
      ></img>{" "}
      <div
        style={{
          width: "35%",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            marginRight: "200px",
          }}
          class="container py-5 h-100"
        >
          <div class="row d-flex justify-content-start align-items-center h-100">
            <div>
              <div class="card-body p-5 text-center">
                <div
                  style={{
                    position: "fixed",
                    top: "10%",
                    textAlign: "center",
                    margin: "0 auto",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "center",
                      position: "absolute",
                      transform: "translate(-50%, -55%)",
                      marginLeft: "13em",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={4}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                      <Button variant="outlined" onClick={routeChange}>
                        Recruteur
                      </Button>

                      <Button variant="contained">Candidat</Button>
                    </Stack>
                  </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h3 class="mb-5">Sign up</h3>
                <Stepper alternativeLabel activeStep={activeStep}>
                  {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};

                    if (isStepSkipped(index)) {
                      stepProps.completed = false;
                    }
                    return (
                      <Step {...stepProps} key={index}>
                        <StepLabel {...labelProps}>{step}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>

                {activeStep === steps.length ? (
                  <Typography variant="h3" align="center">
                    Thank You
                  </Typography>
                ) : (
                  <>
                    <FormProvider {...methods}>
                      <form onSubmit={methods.handleSubmit(handleNext)}>
                        {getStepContent(activeStep)}

                        <Button
                          className={classes.button}
                          disabled={activeStep === 0}
                          onClick={handleBack}
                        >
                          back
                        </Button>

                        <Button
                          className={classes.button}
                          variant="contained"
                          color="primary"
                          // onClick={handleNext}
                          type="submit"
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </form>
                    </FormProvider>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCandidat;
