
import { useEffect, useState } from 'react';
import Mapa from '../Maps';

// Función para obtener la ubicación actual
async function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject('Geolocalización no soportada.');
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          reject('Error obteniendo ubicación: ' + error.message);
        }
      );
    }
  });
}

// Función para calcular distancia entre dos coordenadas
function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

const HomeList = ({ datos }) => {
  const [position, setPosition] = useState(null);
  const [filteredStations, setFilteredStations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocationAndFilter = async () => {
      try {
        const userPos = await getUserLocation();
        setPosition([userPos.lat, userPos.lon]);

        // Filtrar todas las estaciones cercanas (por ejemplo, máximo 5 km)
        const nearbyStations = Object.values(datos).filter((station) => {
          const { latitud, longitud } = station.ubicacion;
          if (!latitud || !longitud) return false;
          const distance = getDistanceKm(
            userPos.lat,
            userPos.lon,
            parseFloat(latitud),
            parseFloat(longitud)
          );
          return distance <= 5; // Aquí defines tu rango de cercanía en KM
        });

        setFilteredStations(nearbyStations);
      } catch (error) {
        console.error(error);
        // Si falla la ubicación, podrías cargar todas las estaciones o ninguna
        setPosition([-33.4374154, -70.6512777]);
        setFilteredStations(Object.values(datos)); // Mostrar todas en caso de error
      } finally {
        setLoading(false);
      }
    };

    fetchLocationAndFilter();
  }, [datos]);

  if (loading || !position) return <p>Cargando mapa...</p>;

  return (
    <Mapa data={filteredStations} pos={position} />
  );
};

export default HomeList;
