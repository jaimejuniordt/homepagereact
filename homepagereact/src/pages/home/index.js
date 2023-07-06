import React, {useState, useEffect} from "react";

//MY IMPORTS
import styles from "./styles.css";
import mobile from '../mobile.css';
import Elipse from "../../components/Elipse";
import book from "../../image/book.jpg";



function Home() {
  const [size, setSize]= useState(window.innerWidth);  
  useEffect(() => {
    windowSize();
  }, []);

    
  }

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
                <input type="text" className='input' id='firstName' />
                <label htmlFor='firstName' className='label-input'> Primeiro nome*</label>
              </div>

              <div className="form-input">
                <input type="text" className='input' id='lastName' />
                <label htmlFor='lastName' className='label-input'> Sobrenome*</label>
              </div>

              <div className="form-input">
                <input type="text" className='input' id='email' />
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

              <button className='form-button'>Download Aulas</button>



            </form>
          </div>
        </div>
      </header>

      <main>
        <section className='services'>
          <span>
            O método de ensino do prof. Jota J é o mais prático possível. Ele , através de pesquisas, desenvolveu um jeito de ensinar que elimina a maior parte das ditas regras. Como sua aula de "Crase". O estudante aprende uma maneira que não precisa decorar os mais de 10 casos de crase obrigatória, sem falar dos casos de crase facultativa. Seu método prático, cativa o aluno e mostra que Português não é um "bicho de 7 cabeças", tornando assim, nossa Língua Portuguesa agradável de ser estudada.
          </span>
        </section>

        <section className='social-media'>
          <div className='contact'>
          <a href='' target='blank'>

            </a>
          </div>
        </section>

      </main>
    </>
  );
}
export default Home;
