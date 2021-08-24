export interface Comment {
    _id: string,
    username: string,
    text: string
}

export interface Track {
    _id: string;
    name: string,
    artist: string,
    text: string,
    listens: number,
    picture: string,
    audio:string,
    comments: Comment[]
}

export interface TrackState {
    tracks: Track[];
    error: string
}

export enum TrackActionTypes {
    FATCH_TRACKS ='FATCH_TRACKS',
    TRACK_ERROR = 'TRACK_ERROR'
}

interface FetchTracksAction {
    type: TrackActionTypes.FATCH_TRACKS;
    payload: Track[]
}

interface TracksErrorAction {
    type: TrackActionTypes.TRACK_ERROR;
    payload: string
}

export type TrackAction = FetchTracksAction | TracksErrorAction