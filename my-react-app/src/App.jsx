import './style/App.css'
import { Route , Routes } from 'react-router-dom';
import Recetas from './Recetas';
import Home from './home';
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Recetas' element={<Recetas/>}/>
      </Routes>
    </div>
  )
}

export default App
