import React, { useState, useEffect } from 'react';
import EstacionList from '../Views/EstacionList'
import DistribuidoreList from '../Views/DistribuidoresList'
import HomeList from '../Views/HomeList'

const Main = ({data , type}) => {
  
const [isLoading, setIsLoading] = useState(true);
 
  return (
     <main>
        {type === 'home' && <HomeList datos = { data }  />}
        {type === 'estaciones' && <EstacionList estaciones ={data} />}
        {type === 'distribuidores' && <DistribuidoreList distribuidores={data} />}
      </main>
  )
}
export default Main