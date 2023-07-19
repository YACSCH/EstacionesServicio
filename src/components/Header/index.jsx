import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <p>
        <img src="" alt="" /> 
        Estaciones de Servicio
        </p>
        <nav>
            <Link to="/" className='nav-item'>Inicio</Link>
            <Link to="/estaciones" className='nav-item'>Estaciones</Link>
            <Link to="/distribuidores" className='nav-item'>Distribuidores</Link>
            <Link to="/Callcenter" className='nav-item'>CallCenter</Link>
            
        </nav>
    </header>
  )
}

export default Header