import React from 'react';

interface ProgressTrackProps {
    left:number;
    right:number;
    Changble:(e) => void
}

const ProgressTrack:React.FC<ProgressTrackProps> = ({left, right, Changble}) => {
    return (
        <div style={{display: 'flex'}}>
            <input
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={Changble}
            />
            <div>{left} / {right} </div>
        </div>
    );
};

export default ProgressTrack;