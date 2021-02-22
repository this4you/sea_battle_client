import { combineReducers } from 'redux'

import battlefield from './battlefield'
import gameConfigs from './gameConfig'

export default combineReducers({
    battlefield,
    gameConfigs
});