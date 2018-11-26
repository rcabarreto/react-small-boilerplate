import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import * as configureStore from './store/configureStore'

const store = configureStore.configure();

const App = () => {

  console.log('chuchuzimm');
  
  return (
    <h1>React/Redux with Parcel app boilerplate</h1>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('app')
)