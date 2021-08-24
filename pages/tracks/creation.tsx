import React, { useState } from 'react';
import StepWrapper from '../../components/StepWrapper';
import Mainlayout from '../../layouts/Mainlayout';
import { Grid, TextField } from '@material-ui/core';
import FileUpload from '../../components/UploadFiles'
import { Button } from '@material-ui/core';

const creation = () => {
    const [activeStep, setActiveStep] = useState(0)

    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)

    const NextStep = () => {
       setActiveStep( state => state+1)
    }
    const BackStep = () => {
        setActiveStep(state => state-1)
    }
    return (
        <Mainlayout>
            <StepWrapper activeStepper={activeStep}>
              {
                 activeStep === 0 &&
                 <Grid container direction='column'>
                     <TextField 
                        style={{margin: '20px'}}
                        placeholder="название трека"
                     />
                      <TextField 
                        style={{margin: '20px'}}
                        placeholder="имя композитора"
                     />
                      <TextField 
                        style={{margin: '20px'}}
                        placeholder="слова для мелодии"
                        multiline
                        minRows={3}
                     />
                 </Grid>
              }
               {
                 activeStep === 1 &&
                 <FileUpload setFile={(setPicture) =>({})} accept={'image/*'}>
                   <Button>Загрузить изображение</Button>
                 </FileUpload>
                 
              }
               {
                 activeStep === 2 &&
                 <FileUpload setFile={(setAudio) =>({})} accept={'audio/*'}>
                 <Button>Загрузить аудио</Button>
               </FileUpload>
              }
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button disabled={activeStep < 1} onClick={BackStep}>Назад</Button>
                <Button onClick={NextStep}>Далее</Button>

            </Grid>
        </Mainlayout>
    );
};

export default creation;