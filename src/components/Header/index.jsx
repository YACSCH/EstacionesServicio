import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGasPump } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
        <p>
        <FontAwesomeIcon icon={faGasPump} className='header-icon'/>
        <span>Estaciones de Servicio Santiago</span>
        </p>
        <nav>
            <Link to="/" className='nav-item'>Inicio</Link>
            <Link to="/estaciones" className='nav-item'>Estaciones</Link>
            <Link to="/distribuidores" className='nav-item'>Calefaccion</Link>
        </nav>
    </header>
  )
}

export default Header