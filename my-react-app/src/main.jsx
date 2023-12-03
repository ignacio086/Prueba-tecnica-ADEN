import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from '@reduxjs/toolkit'
import { drinkHistoryReducer, drinkReducer } from './reducers/drinkReducers.js'
import { combineReducers } from '@reduxjs/toolkit'

//combineReducers se utiliza para combinar diferentes reducers y poder hacer mas de una peticion a mas de un reducer aumentando la legibilidad
const reducers=combineReducers({
  tragos: drinkReducer,
  historialTragos:drinkHistoryReducer
})
//createStore es una funcion para crear la store de redux, componente necesario para ejecutar reducers o acciones
const store = createStore(reducers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
      //provider es el componente principal de redux el cual contiene la store
    }
    <Provider store={store}>
      {
        //browserrouter es el componente principal para react-router el cual indica el componente padre al navegar
      }
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
