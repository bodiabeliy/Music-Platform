import { Track } from "./tracksList";

export interface defaultState {
    active: null | Track;
    volume: number;
    duration: number;
    currentTime: number;
    pause: boolean;
}
// actions list
export enum PlayerActionTypes {
    PLAY = 'PLAY',
    PAUSE = 'PAUSE',
    SET_ACTIVE = 'SET_ACTIVE',
    SET_DURATION ='SET_DURATION',
    SET_CURRENT_TIME = 'SET_CURRENT_TIME',
    SET_VOLUME = 'SET_VOLUME'
}
// Realization all action (type)

interface PlayAction {
    type:PlayerActionTypes.PLAY
}
interface PauseAction {
    type:PlayerActionTypes.PAUSE
}
interface ActiveAction {
    type:PlayerActionTypes.SET_ACTIVE,
    payload: Track
}
interface DurationAction {
    type:PlayerActionTypes.SET_DURATION,
    payload: number
}
interface TimeAction {
    type:PlayerActionTypes.SET_CURRENT_TIME,
    payload: number
}

interface VolumeAction {
    type:PlayerActionTypes.SET_VOLUME,
    payload: number
}

// export 

export type PlayerAction = 
PlayAction | PauseAction | ActiveAction | TimeAction | VolumeAction |DurationAction
