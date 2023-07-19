import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <p>
        <img src="" alt="" /> 
        Estaciones de Servicio
        </p>
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/estaciones">Estaciones</Link>
            <Link to="/distribuidores">Distribuidores</Link>
            <Link to="/Callcenter">CallCenter</Link>
            
        </nav>
    </header>
  )
}

export default Header