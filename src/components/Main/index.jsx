import React, { useState, useEffect } from 'react';
import { GetToken, GetRegion, GetComuna, GetEstaciones } from "../../api/getData"

const Main = () => {
  const [data, setData] = useState([]);

   useEffect(() => {
        const data = async () => {
          const response = await GetEstaciones();
          console.log(response.data)
          setData(response.data);
        }
    data()
 }, []);

    
    return (
      <div>
     { Object.values(data).map((item,index) => (
        <div key={index}>
          <h1>{item.razon_social}</h1>
          <p>Dirección: {item.direccion_calle} {item.direccion_numero}</p>
          <p>Comuna: {item.nombre_comuna}</p>
          <p>Región: {item.nombre_region}</p>
          <p>Latitud: {item.ubicacion.latitud}</p>
          <p>Longitud: {item.ubicacion.longitud}</p>
        </div>
      ))}
    </div>
  )
}
export default Main