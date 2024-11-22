import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import './Offres.css';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Step1 from './Step';
import Step2 from './Step2';
import SideBar from '../../../components/Recruteur/SideBar/SideBar';
import Confirm from './Confirm';
import offre from '../../../assets/img/offre.jpg';

const steps = ["C'est parti !", 'Détails du poste', 'Description du  poste'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <Step1
                //  readvalues={readValues}
                />
            );
        case 1:
            return (
                <Step2
                // readvalues={readValues}
                />
            );
        case 2:
            return (
                <Confirm
                //  readvalues={readValues}
                />
            );
    }
}

const theme = createTheme();

export default function Créer() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        console.log();
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    // const readValues = () => {
    //   console.log(values, "value");
    // };
    return (
        <SideBar>
            <div className='form'>
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    <Container component='main' maxWidth='sm' sx={{ mb: 20 }}>
                        <Paper
                            className='paper'
                            variant='outlined'
                            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                        >
                            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <React.Fragment>
                                {activeStep === steps.length ? (
                                    <React.Fragment>
                                        <Typography align='center' variant='h4' gutterBottom>
                                            Super, votre offre est créé!
                                        </Typography>
                                        <img
                                            src={offre}
                                            style={{
                                                width: '60%',
                                                height: '100%',
                                                marginLeft: '20%'
                                            }}
                                        ></img>{' '}
                                        <Typography variant='subtitle1'></Typography>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        {getStepContent(activeStep)}
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            {activeStep !== 0 && (
                                                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                                    précédent
                                                </Button>
                                            )}

                                            <Button
                                                variant='contained'
                                                onClick={handleNext}
                                                sx={{ mt: 3, ml: 1 }}
                                            >
                                                {activeStep === steps.length - 1
                                                    ? 'publier'
                                                    : 'suivant'}
                                            </Button>
                                        </Box>
                                    </React.Fragment>
                                )}
                            </React.Fragment>
                        </Paper>
                    </Container>
                </ThemeProvider>
            </div>
        </SideBar>
    );
}
