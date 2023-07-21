
import Mapa from '../Maps'


const HomeList = ({ datos }) => {

  const position = [-33.4374154,-70.6512777]

  const filteredStations = Object.values(datos).filter((station) => station.id_region === "13");

  return (
      <Mapa data = {filteredStations} pos = {position} />
    )
}
export default HomeList