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
            <Elipse size={180} opacity={0.6} styles={"circle-right-three"} />
            <Elipse size={180} opacity={0.98} styles={"circle-right-four"} />
          </div>
        </div>

        <div className="information-container">
          <div className="information-left">
            <div className="information-text">
              <h3>Descubra</h3>
              <h1>
                Transforme sua alimentação e <br />
                tenha mais qualidade de vida!
              </h1>

              <p>egegveghthetththhtthhth</p>

              <h4>Não perca a oportunidade de mudar seus hábitos</h4>

              <p>jojvjiojoiuiosjsvjoisjoif</p>

              <p>jojvjiojoiuiosjsvjoisjoif</p>

              <p>jojvjiojoiuiosjsvjoisjoif</p>
            </div>
            <div className='information-img'></div>
          </div>

          <div className="information-right">
            
          </div>
        </div>
      </header>
    </>
  );
}
export default Home;
