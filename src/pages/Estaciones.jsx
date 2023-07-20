import React, { useState, useEffect } from 'react';
import { GetEstaciones } from "../api/getData"

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from  '../components/Main'

function Estaciones() {
  const [estaciones, setEstaciones] = useState([]);

  useEffect(() => {
       const estaciones = async () => {
         const response = await GetEstaciones();
         setEstaciones(response.data);
         return response.data
       }
   estaciones()
}, []);

 return (
   <>
       <Header/>
       <Main data = { estaciones }  type="estaciones"/>
       <Footer/>
   </>
   
 )
}

export default Estaciones