import './style/App.css'
import { Route , Routes } from 'react-router-dom';
import Recetas from './pages/Recetas';
import Home from './pages/home';
function App() {
  return (
    <div >
      {
        //routes y route son componentes utilizados para crear las rutas de navegacion entre pages
      }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Recetas' element={<Recetas/>}/>
      </Routes>
    </div>
  )
}

export default App
