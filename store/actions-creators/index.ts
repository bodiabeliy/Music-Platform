import * as PlayerActionsCreators from '../actions-creators/player'
import * as TrackActionsCreators from '../actions-creators/track'


export default {
    ...PlayerActionsCreators,
    ...TrackActionsCreators
}