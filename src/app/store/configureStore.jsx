import {
  combineReducers, createStore, compose, applyMiddleware,
} from 'redux'
// import { loaderReducer, userReducer } from 'reducers'

export var configure = (initialState = {}) => {
  const reducer = combineReducers({
    // loader: loaderReducer,
    // user: userReducer
  })

  const store = createStore(reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ))

  return store
}
