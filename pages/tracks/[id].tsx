import React from 'react';
import Mainlayout from '../../layouts/Mainlayout';
import { Track } from '../../types/tracksList';
import {Button, Grid, TextField } from '@material-ui/core'
import { useRouter } from 'next/dist/client/router';

const TrackPage = () => {

    const trackInfo: Track = {_id:'1', name: 'Tracer', artist: 'BG', text: 'Be free', listens:125, picture: 'http://localhost:5000/picture/tracer.jpg', audio:'http://localhost:5000/audio/tracer.mp3', comments:[]}
    const backRouter = useRouter()
    return (
        <Mainlayout>
         <Button 
         variant="outlined"
         onClick={() => backRouter.push('/tracks')}
         >
             Пейти к списку
         </Button>
        <Grid container style={{marginTop:"20px"}}>
            <img src={trackInfo.picture} width={200} height={200}/>
            <div style={{marginLeft:"10px"}}>
                <p>Название: <b>{trackInfo.name}</b> </p>
                <p>Композитор: <b>{trackInfo.artist}</b></p>
                <p>К-во прослушуваний: <b>{trackInfo.listens}</b></p>
            </div>
        </Grid>
            <h3>Cлова к треку </h3>
            <p>{trackInfo.text}</p>

            <h2>Список комментариев:</h2>
        <Grid>
            <TextField
                placeholder='Введите свое имя...'
                variant='outlined'
            />
             <TextField  
                placeholder='Комментарий...'
                multiline
                fullWidth
                minRows={5}
                variant="outlined"
            />
        </Grid>
        <Button>Отправить</Button>

            <div>
            {trackInfo.comments.map(comment => 
                <div>
                    <div>Пользователь:{comment.username}</div>
                    <div>Cообщение...{comment.text}</div>
                </div>
            )}
            </div>
        </Mainlayout>
    );
};

export default TrackPage;