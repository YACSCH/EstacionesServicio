import EstacionList from '../Views/EstacionList'
import DistribuidoreList from '../Views/DistribuidoresList'
import HomeList from '../Views/HomeList'

const Main = ({data , type}) => {
 
    return (
      <main>
         {type === 'home' && <HomeList  />}
         {type === 'estaciones' && <EstacionList estaciones ={data} />}
        {type === 'distribuidores' && <DistribuidoreList distribuidores={data} />}
      </main>
  )
}
export default Main