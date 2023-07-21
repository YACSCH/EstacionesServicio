
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Estaciones from './pages/Estaciones'
import Distribuidores from './pages/Distribuidores'

function App() {
 return (
    <div className='contenedor'>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/estaciones' element={<Estaciones/>} />
          <Route path='/distribuidores' element={<Distribuidores/>} />
        </Routes>
    </BrowserRouter> 
    </div>
  )
}
export default App
