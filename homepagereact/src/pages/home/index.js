import React from "react";

//MY IMPORTS
import style from "./style.css";
import Elipse from "../../components/Elipse";

function Home() {
  return (
    <>
      <header className="container">
        {/* Elipse -> Circle */}
        <div className="elipse-container">
          <div className="elipse-left">
            <Elipse size={120} opacity={1} style={"circle-left-one"} />
            <Elipse size={180} opacity={0.4} style={"circle-left-two"} />
          </div>

          <div className="elipse-right"></div>
        </div>
      </header>
    </>
  );
}
export default Home;
