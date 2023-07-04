import React from "react";

//MY IMPORTS
import styles from "./styles.css";
import Elipse from "../../components/Elipse";
import book from "../../image/book.jpg";

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
                Transforme sua alimentação e tenha mais qualidade de vida!
              </h1>

              <p>egegveghthetththhtthhth</p>

              <h4>Não perca a oportunidade de mudar seus hábitos</h4>

              <p>jojvjiojoiuiosjsvjoisjoif</p>

              <p>jojvjiojoiuiosjsvjoisjoif</p>

              <p>jojvjiojoiuiosjsvjoisjoif</p>
            </div>

            <div className="information-img">
              <img src={book} alt="" />
            </div>
          </div>

          <div className="information-right">
            <form>

              <div className="form-input">
                <input type="text" className='form-input' id='firstName' />
                <label htmlFor='firstName' className='label-input'> Primeiro nome*</label>
              </div>

              <div className="form-input">
                <input type="text" className='form-input' id='lastName' />
                <label htmlFor='lastName' className='label-input'> Sobrenome*</label>
              </div>

              <div className="form-input">
                <input type="text" className='form-input' id='email' />
                <label htmlFor='email' className='label-input'> E-mail*</label>
              </div> 

              <div className='form-text'>
                <span>
                  Inscreva-se para receber em primeira mão as melhores aulas que farão você realmente aprender Português.
                </span>
              </div>

              <div className='form-enquete'>
                <input type="radio" id='formYes' name='option' />
                <label htmalFor='formYes'>Sim, eu quero me inscrever!</label>                
              </div>

              <div className='form-enquete'>
                <input type="radio" id='formNo' name='option' />
                <label htmalFor='formNo'>Não, estou bem obrigado!</label>                
              </div>



            </form>
          </div>
        </div>
      </header>
    </>
  );
}
export default Home;
