import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Step2Event from './Step2Event';
import Step1Event from './Step1Event';
import Step3Event from './Step3Event';
import événement from '../../../assets/img/événement.jpg';
import SideBar from '../../../components/Recruteur/SideBar/SideBar';
import './CréerEvent.css';
const steps = ["C'est parti !", 'Choissir une date', 'Détails'];
function getStepContent(step) {
    switch (step) {
        case 0:
            return <Step1Event />;
        case 1:
            return <Step2Event />;
        case 2:
            return <Step3Event />;
    }
}

const theme = createTheme();

export default function CréerEvent() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    return (
        <SideBar>
            <div className='form-event'>
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    <Container component='main' maxWidth='sm'>
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
                                        <Typography variant='h4' gutterBottom>
                                            Super, votre événement est créé!
                                        </Typography>
                                        <img
                                            className='img-bx'
                                            src={événement}
                                            style={{ width: '100%', height: '100%' }}
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
                                                    : 'Suivant'}
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
