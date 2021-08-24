import React from 'react';
import Mainlayout from '../../layouts/Mainlayout'
import {Grid, Card, Button, Box} from '@material-ui/core'
import { useRouter } from 'next/dist/client/router';
import TrackListing from '../../components/TrackListing'
import {Track, TrackActionTypes} from '../../types/tracksList'
import { useTypeSelector } from '../../hooks/useTypeSelector';
import  {wrapper, } from '../../store';
import { GetServerSideProps } from 'next'
import {NextThunkDispatch} from '../../store/index'
import { fetchTracks } from '../../store/actions-creators/track';
import { defaultState } from '../../types/player';
function index() {

    const router = useRouter()
    const {tracks, error} = useTypeSelector(state => state.track);

    if (error) {
       return <Mainlayout>
           <h1>{error}</h1>
       </Mainlayout>
    }

    // list mok tracks object
    const tracksList: Track[] = [
       {_id:'1', name: 'Tracer', artist: 'BG', text: 'Be free', listens:125, picture: 'http://localhost:5000/picture/tracer.jpg', audio:'http://localhost:5000/audio/tracer.mp3', comments:[]},
       {_id:'2', name: 'Badgers', artist: 'BG', text: 'in the forest...', listens:74, picture: 'http://localhost:5000/picture/badgers.jpg', audio:'http://localhost:5000/audio/badgers.mp3', comments:[]},
       {_id:'3', name: 'Rock Traveller', artist: 'BG', text: 'In the way to home...', listens:93, picture: 'http://localhost:5000/picture/traveller.jpg', audio:'http://localhost:5000/audio/traveller.mp3', comments:[]},
       {_id:'4', name: 'South Tiger', artist: 'BG', text: 'Danger jangle', listens:93, picture: 'http://localhost:5000/picture/tiger.png', audio:'http://localhost:5000/audio/tiger.mp3', comments:[]}
    ]

    return (
        <Mainlayout>
           <Grid container justifyContent='space-between'>
                <Card style={{width: '100%' }}>
                    <Box p={2}>
                        <Grid container justifyContent='space-between'>
                            <h2>Список произведений</h2>
                            <Button onClick={() => router.push('/tracks/creation')}>Загрузить</Button>
                        </Grid>
                    </Box>
                    <TrackListing tracks={tracksList}/>
                </Card>
            </Grid>
        </Mainlayout>
    );
}

export default index;

export const getServerSideProps = wrapper.getServerSideProps(store  =>{
    const dis = store.dispatch as NextThunkDispatch
     dis(fetchTracks())
    return null

})


