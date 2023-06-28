import React from 'react';

//MY IMPORTS
import style from './style.css';
import Elipse from '../../components/Elipse';

function Home() {
  return(
    <>
   <header className='container'>
    {/* Elipse -> Circle */}
    <div className='elipse-container'>
      <div className='elipse-left'></div>
      <Elipse size={120} opacity={0.8} style={} />

      <div className='elipse-right'></div>
    </div>
    
    </header>   
    </>
  )
}
export default Home;