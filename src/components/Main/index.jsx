import EstacionList from '../Views/EstacionList'
import DistribuidoreList from '../Views/DistribuidoresList'

const Main = ({data , type}) => {
 
    return (
      <main>
        {type === 'estaciones' && <EstacionList estaciones ={data} />}
        {type === 'distribuidores' && <DistribuidoreList distribuidores={data} />}
      </main>
  )
}
export default Main