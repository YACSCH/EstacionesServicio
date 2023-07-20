import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from  '../components/Main'


function Home() {


  return (
    <>
        <Header/>
        <Main type = "home" />
        <Footer/>
    </>
    
  )
}

export default Home