import { Card, Grid } from '@material-ui/core';
import React from 'react';
import { Track } from '../types/tracksList';
import styles from '../styles/TrackItem.module.scss'
import { IconButton } from '@material-ui/core';
import { Pause, PlayArrow } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { useRouter } from 'next/dist/client/router';
import { useAction } from '../hooks/useAction';


interface TrackItemProps {
    track:Track;
    active?:boolean
}
const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter()
    const {playTrack, pauseTrack, activeTrack} = useAction()

    const PlayingTrack =(e) => {
        e.stopPropagation()
        activeTrack(track)
        playTrack()
    }


    return (
        <div>
            <Card className={styles.track} 
            onClick={() => router.push('/tracks/' + track._id)}
            >
            <IconButton  onClick={PlayingTrack }
                
            >
                {
                    !active 
                    ? <PlayArrow />
                    : <Pause />

                }
            </IconButton>
            <img width='70px' height='70px' src={track.picture} alt={track.name} />
            <Grid className={styles.artist} container direction="column" >
                <div>{track.name}</div>
                <div className={styles.artist__name}>{track.artist}</div>
            </Grid>
            {/* {active && <div> 01:24 / 2:11</div>} */}
            <IconButton style={{marginLeft:'auto'}}>
                {/* <DeleteIcon onClick={(event) => event.stopPropagation()}/> */}
            </IconButton>
            </Card>
        </div>
    );
};

export default TrackItem;