import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import Stack from "@mui/material/Stack";
import "./Register.css";
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
  return ["Your contact details  ", "Your company ", "Validate"];
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
      // errorMessage:
      //   "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,

      // required: true,
    },
    {
      id: 4,
      name: "Confirmpassword",
      type: "password",
      hint: "Confirmpassword",
      //   errorMessage: "Passwords don't match!",
      //   pattern: values.password,

      //   required: true,
    },
  ];
  return (
    <div>
      {inputs.map((input) => (
        <MDBInput
          inputProps={ariaLabel}
          variant="outlined"
          key={input.id}
          {...input}
          // value={values[input.name]}
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
    <>
      <Controller
        control={control}
        name="votre entreprise"
        render={({ field }) => (
          <MDBInput
            inputProps={ariaLabel}
            id="votre entreprise"
            variant="outlined"
            hint="Your company"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address"
        render={({ field }) => (
          <MDBInput
            inputProps={ariaLabel}
            id="address"
            variant="outlined"
            hint="Enter Your Address "
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <MDBInput
            inputProps={ariaLabel}
            id="phone"
            variant="outlined"
            hint="phone"
            // pattern="[7-9]{1}[0-9]{9}"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const PaymentForm = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}
    >
      <Checkbox {...label} defaultChecked />

      <Typography variant="h5" class="form-check-label" for="flexCheckChecked">
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

const RegisterRecruteur = () => {
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
  const routeChange = () => Navigate("/register-candidat");
  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div className="row">
      <img
        id="optionalstuff"
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
                    <Stack direction="row" spacing={4}>
                      <Button variant="contained">Recruteur</Button>

                      <Button variant="outlined" onClick={routeChange}>
                        Candidat
                      </Button>
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

export default RegisterRecruteur;
