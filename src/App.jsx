import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Estaciones from './pages/Estaciones'
import Distribuidores from './pages/Distribuidores'
import Callcenter from './pages/Callcenter'

function App() {
 return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/estaciones' element={<Estaciones/>} />
          <Route path='/distribuidores' element={<Distribuidores/>} />
          <Route path='/Callcenter' element={<Callcenter/>} />
          <Route path='*' element={<Notfound/>} />
        </Routes>
    </BrowserRouter> 
    </>
  )
}
export default App
