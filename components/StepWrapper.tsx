import { Container, Stepper, StepLabel, Step, Grid, Card } from '@material-ui/core';
import React from 'react';

interface StepWrapperProps {
    activeStepper: number
}
const StepWrapper: React.FC<StepWrapperProps> = ({activeStepper, children}) => {
    const steps = ['Общая информация', 'Обложка', 'Загрузка']

    return (
        <Container>
            <Stepper activeStep ={activeStepper}>
               {steps.map((step, index) =>
                <Step
                    key={index}
                    completed={activeStepper > index}
                >
                    <StepLabel>{step}</StepLabel>
                </Step>
                )}
            </Stepper>
            <Grid container justifyContent="center" style={{margin: '40px', height:'250px'}}>
               <Card style={{width: '50%'}}>
                   {children}
                </Card> 
            </Grid>
        </Container>
    );
};

export default StepWrapper;