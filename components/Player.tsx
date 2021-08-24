import React, { useEffect } from 'react';
import { IconButton, Grid } from '@material-ui/core';
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons';
import styles from '../styles/Player.module.scss'
import { Track } from '../types/tracksList';
import ProgressTrack from './ProgressTrack';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useAction } from '../hooks/useAction';

let audio;

const Player = () => {
    // const trackInfo: Track = {_id:'1', name: 'Tracer', artist: 'BG', text: 'Be free', listens:125, picture: 'http://localhost:5000/picture/tracer.jpg', audio:'http://localhost:5000/audio/tracer.mp3', comments:[]}
    
    const {pause, volume, active, duration, currentTime} = useTypeSelector(state => state.player)

    useEffect(() => {
        if(!audio) {
            audio = new Audio()
            setAudio()
        }
        else {
            setAudio()
            play()
        }
    }, [active])

    const setAudio = () => {
      if (active) {
        audio.src = active.audio
        audio.volume = volume /100
        audio.src = active.audio
            // onloadedmetadata - callback which control loaded 
            audio.onloadedmetadata =() => {                 
            setDuration(Math.ceil(audio.duration))
        }
        // ontimeupdate - callback which trigger on time change 
        audio.ontimeupdate =() => {
            setCurrentTime(Math.ceil(audio.currentTime))
        }
      }
    }

    // using action-creators
    const {playTrack, pauseTrack, setVolume, setCurrentTime, setDuration, activeTrack} = useAction()

        // for change play icon (pause/play)
    const play =() => {
        if(pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }
    // set volume for sound
    const VolumeChange =(event:React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(event.target.value)/100
        setVolume(Number(event.target.value))
    }
    // set current time for sound
    const TimeChange =(event:React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(event.target.value)        
        setCurrentTime(Number(event.target.value))
    }

    if(!active) {
        return null
    }

    return (
        <div className={styles.player}>
            <IconButton
                onClick={play}
            >
                {
                    pause 
                    ? <PlayArrow />
                    : <Pause />

                }
            </IconButton>
            <Grid className={styles.artist} container direction="column" style={{width: '200px'}} >
                <div>{active?.name}</div>
                <div className={styles.artist__name}>{active?.artist}</div>
            </Grid>
            <ProgressTrack left={currentTime} right={duration} Changble={TimeChange}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <ProgressTrack left={volume} right={100} Changble={VolumeChange}/>

        </div>
    );
};

export default Player;