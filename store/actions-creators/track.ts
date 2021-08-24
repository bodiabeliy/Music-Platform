import axios from "axios"
import { Dispatch } from "redux"
import { TrackAction, TrackActionTypes } from "../../types/tracksList"

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const responce = await axios.get('http://localhost:5000/tracks')
            dispatch({type: TrackActionTypes.FATCH_TRACKS, payload: responce.data})
            return 
        }
        catch (e) {
            dispatch({type: TrackActionTypes.TRACK_ERROR, payload: 'Произошла ошибка загрузки треков! Повторитезапросе позже'})
        }
    }
}