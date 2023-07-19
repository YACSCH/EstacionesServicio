
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Estaciones from './pages/Estaciones'
import Distribuidores from './pages/Distribuidores'
import Callcenter from './pages/Callcenter'

function App() {
 return (
    <div className='contenedor'>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/estaciones' element={<Estaciones/>} />
          <Route path='/distribuidores' element={<Distribuidores/>} />
          <Route path='/Callcenter' element={<Callcenter/>} />
        </Routes>
    </BrowserRouter> 
    </div>
  )
}
export default App
