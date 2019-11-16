import { combineReducers } from 'redux'
import {
  SET_LEVEL
} from './actions'

const startSettingState = {
    level: 'easy'
}

const settings = (state = startSettingState, action) => {
  switch (action.type) {
    case SET_LEVEL:
      return {
        ...startSettingState,
        level: action.payload
      }
    default:
      return state
  }
}

export default combineReducers({
  settings
})