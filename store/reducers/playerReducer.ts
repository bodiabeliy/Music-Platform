import { defaultState, PlayerAction, PlayerActionTypes } from "../../types/player"
// set default states
const initializeState: defaultState ={
    currentTime: 0,
    duration:0,
    active:null,
    volume:10,
    pause:true
}
// change state of store ()
export const playerReducer = (state = initializeState, action: PlayerAction): defaultState => {
    switch (action.type) {
        case PlayerActionTypes.PLAY:
            return {...state, pause:false}

        case PlayerActionTypes.PAUSE:
            return {...state, pause:true}

        case PlayerActionTypes.SET_CURRENT_TIME:
            return {...state,  currentTime:action.payload }

        case PlayerActionTypes.SET_VOLUME:
            return {...state, volume:action.payload}

        case PlayerActionTypes.SET_DURATION:
            return {...state, duration:action.payload}
    
        case PlayerActionTypes.SET_ACTIVE:
            return {...state, active: action.payload, duration: 0, currentTime: 0}


        default:
            return state
    }
}