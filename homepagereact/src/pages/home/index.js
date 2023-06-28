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
      <Elipse size={120} opacity={0.2} style={'cicle-left-one'} />
      <Elipse size={180} opacity={0.4} style={'cicle-left-two'} />

      <div className='elipse-right'></div>
    </div>
    
    </header>   
    </>
  )
}
export default Home;