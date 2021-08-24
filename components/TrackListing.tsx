import { Grid, Box } from '@material-ui/core';
import React from 'react';
import {Track} from '../types/tracksList'
import TrackItem from './TrackItem'

interface TrackListingProps {
    tracks: Track[]
}
const TrackListing: React.FC<TrackListingProps> = ({tracks}) => {
    return (
        <Grid className="info-grid" container direction='column'>
            <Box p={2}>
                {tracks.map(track => 
                    <TrackItem 
                        key={track._id}
                        track={track}
                    />
                )}
            </Box>
        </Grid>
    );
};

export default TrackListing;