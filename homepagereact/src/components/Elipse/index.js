import React from 'react';
import styles from './style.css';

export default function Elipse({size, opacity, styles}) {
  const circleStyle = {
    width: '${size}px',
    height:'${size}px',
    opacity: opacity,
  }



  return(
 
  <div style={circleStyle} className={'circle ${styles}'}></div>
 
  );
}