import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import L from 'leaflet'
import markerIcon from '../../../public/img/marker-icon.png'
import iconShadow from '../../../public/img/marker-shadow.png'

let iconUbicacion = new L.icon({
    iconUrl:markerIcon,
    iconShadow: iconShadow,
}) 

const Mapa = ({ data, pos}) => {

  return (
    <MapContainer center={pos} zoom={13} scrollWheelZoom={false} className='mapa'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((item,index) => (

       
        <Marker position= {[item.ubicacion.latitud, item.ubicacion.longitud]} icon={iconUbicacion} key={index}>
          <Popup>
            Distribuidor: {item.distribuidor.nombre } <br /> 
            Direccion: {item.direccion_calle} {item.direccion_numero} <br />
            Horario de Atencion : {item.horario_atencion} 
          </Popup>
        </Marker>
         ))}
      </MapContainer>
  )
}

export default Mapa