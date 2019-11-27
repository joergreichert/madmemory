import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers'

export function initializeStore() {
  return createStore(
    rootReducer,
    devToolsEnhancer()
  )
}