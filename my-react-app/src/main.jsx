import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from '@reduxjs/toolkit'
import { drinkHistoryReducer, drinkReducer } from './reducers/drinkReducers.js'
import { combineReducers } from '@reduxjs/toolkit'


const reducers=combineReducers({
  tragos: drinkReducer,
  historialTragos:drinkHistoryReducer
})
const store = createStore(reducers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
