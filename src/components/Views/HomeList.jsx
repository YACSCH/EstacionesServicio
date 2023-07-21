import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let iconUbicacion = new L.icon({
  iconUrl:icon,
  iconShadow: iconShadow,
})
const HomeList = ({ datos }) => {
  const position = [-33.4374154,-70.6512777]

  const filteredStations = Object.values(datos).filter((station) => station.id_region === "13");

  return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='mapa'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredStations.map((item,index) => (

       
        <Marker position= {[item.ubicacion.latitud, item.ubicacion.longitud]} con={iconUbicacion}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
         ))}
      </MapContainer>
     
      
    )
}
export default HomeList