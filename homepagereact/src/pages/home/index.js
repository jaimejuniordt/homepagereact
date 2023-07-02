import React from "react";

//MY IMPORTS
import styles from "./styles.css";
import Elipse from "../../components/Elipse";

function Home() {
  return (
    <>
      <header className="container">
        <div className="elipse-container">
          <div className="elipse-left">
            <Elipse size={120} opacity={0.2} styles={"circle-left-one"} />
            <Elipse size={120} opacity={0.4} styles={"circle-left-two"} />
            <Elipse size={180} opacity={0.6} styles={"circle-left-three"} />
          </div>

          <div className="elipse-right">
            <Elipse size={120} opacity={0.2} styles={"circle-right-one"} />
            <Elipse size={120} opacity={0.5} styles={"circle-right-two"} />
            <Elipse size={180} opacity={0.6} styles={"circle-right-three"}/>
            <Elipse size={180} opacity={0.98} styles={"circle-right-four"} />
            </div>

            <div className='information-container'>
              <div className='information-left'>
                
              </div>

            </div>

          
        </div>
      </header>
    </>
  )
}
export default Home;
