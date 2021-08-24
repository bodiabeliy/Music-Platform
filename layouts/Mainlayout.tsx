import React from 'react';
import Navbar from '../components/Navbar'
import {Container} from '@material-ui/core'
import Player from '../components/Player';
const Mainlayout: React.FC = ({children}) => {
    return (
        <div>
            <Navbar />
            <Container style={{marginTop: '100px'}}>
                {children}
            </Container>
            <Player />
        </div>
        
    );
};

export default Mainlayout;