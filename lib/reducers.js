import { combineReducers } from 'redux'
import {
  elementSelection, elementUnselection,
  rheinischesWoerterbuch, saechsischesWoerterbuch, lwlSoundArchiv,
  levelSettings, EASY_LEVEL
}
  from './constants'

import {
  SET_LEVEL, SET_DISPLAY_TIME, SET_ELEMENT_COUNT,
  SELECT_ELEMENT, UNSELECT_ELEMENT
}
  from './actions'

const startSettingState = {
  ...EASY_LEVEL.settings,
  selectedElements: [rheinischesWoerterbuch.key,
    saechsischesWoerterbuch.key, lwlSoundArchiv.key],
  objects: [rheinischesWoerterbuch.data,
    saechsischesWoerterbuch.data, lwlSoundArchiv.data]
}

const settings = (state = startSettingState, action) => {
  switch (action.type) {
    case SET_LEVEL:
      return {
        ...state,
        ...levelSettings(action.payload)
      }
    case SELECT_ELEMENT: {
      return {
        ...state,
        ...elementSelection(state.selectedElements, action.payload)
      }
    }
    case UNSELECT_ELEMENT: {
      return {
        ...state,
        ...elementUnselection(state.selectedElements, action.payload)
      }
    }
    case SET_DISPLAY_TIME: {
      return {
        ...state,
        displayTime: action.payload
      }
    }
    case SET_ELEMENT_COUNT: {
      return {
        ...state,
        elementCount: action.payload
      }
    }
    default:
      return state
  }
}

export default combineReducers({
  settings
})