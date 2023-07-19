import React, { useState, useEffect } from 'react';
import { GetToken, 
         GetRegion, 
         GetComuna, 
         GetEstaciones } from "../api/getData"

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from  '../components/Main'


function Home() {

  const [data, setData] = useState([]);

   useEffect(() => {
        const data = async () => {
          const response = await GetEstaciones();
          setData(response.data);
          return response.data
        }
    data()
 }, []);

  return (
    <>
        <Header/>
        <Main data = { data } />
        <Footer/>
    </>
    
  )
}

export default Home