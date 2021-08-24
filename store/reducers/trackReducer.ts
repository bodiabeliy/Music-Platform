import {TrackState, TrackAction, TrackActionTypes} from '../../types/tracksList'

//default state
const DefaultState: TrackState = {
    tracks: [],
    error: ''
}

export const trackReducer = (state = DefaultState, action: TrackAction): TrackState => {
    switch (action.type) {
        case TrackActionTypes.TRACK_ERROR:
            return {...state, error: action.payload}
        case TrackActionTypes.FATCH_TRACKS: 
            return {error: 'Track successful loaded!', tracks: action.payload}
        default:
            return state
    }
    
}