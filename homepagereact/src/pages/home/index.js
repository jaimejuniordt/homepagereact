import React, { useState, useEffect } from "react";

//MY IMPORTS
import styles from "./styles.css";
import mobile from "../mobile.css";
import Elipse from "../../components/Elipse";
import book from "../../image/book.jpg";

function Home() {
  const [size, setSize] = useState(window.innerWidth);

  const instagram = "@professorjotaj";

  const whatsapp = "64-992968868";

  const site = "site";

  useEffect(() => {
    windowSize();
  }, []);

  function windowSize() {
    setSize(window.innerWidth);
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
                O melhor curso de Língua Portuguesa
              </h1>

              <p>Super Prático</p>

              <h4>Não perca a oportunidade de mudar seus hábitos</h4>

              <p>Gramática</p>

              <p>Redação e Textos</p>

              <p>Literatura</p>
            </div>

            <div className="information-img">
              <img src={book} alt="imagem book" />
            </div>
          </div>

          <div className="information-right">
            <form>
              <div className="form-input">
                <input type="text" className="input" id="firstName" />
                <label htmlFor="firstName" className="label-input">Primeiro nome*
                </label>
              </div>

              <div className="form-input">
                <input type="text" className="input" id="lastName" />
                <label htmlFor="lastName" className="label-input">
                  {" "}
                  Sobrenome*
                </label>
              </div>

              <div className="form-input">
                <input type="text" className="input" id="email" />
                <label htmlFor="email" className="label-input">
                  {" "}
                  E-mail*
                </label>
              </div>

              <div className="form-text">
                <span>
                  Inscreva-se para receber em primeira mão as melhores aulas que
                  farão você realmente aprender Português.
                </span>
              </div>

              <div className="form-enquete">
                <input type="radio" id="formYes" name="option" />
                <label htmalFor="formYes">Sim, eu quero me inscrever!</label>
              </div>

              <div className="form-enquete">
                <input type="radio" id="formNo" name="option" />
                <label htmalFor="formNo">Não, estou bem obrigado!</label>
              </div>

              <button className="form-button">Download Aulas</button>
            </form>
          </div>
        </div>
      </header>

      <main>
        <section className="services">
          <span>
            O método de ensino do prof. Jota J é o mais prático possível. Ele ,
            através de pesquisas, desenvolveu um jeito de ensinar que elimina a
            maior parte das ditas regras. Como sua aula de "Crase". O estudante
            aprende uma maneira que não precisa decorar os mais de 10 casos de
            crase obrigatória, sem falar dos casos de crase facultativa. Seu
            método prático, cativa o aluno e mostra que Português não é um
            "bicho de 7 cabeças", tornando assim, nossa Língua Portuguesa
            agradável de ser estudada.
          </span>
        </section>

        <section className="social-media">
          <div className="contact">
            <a href="instagram" target="blank">
              <ion-icon name="logo-instagram"></ion-icon>
              <span>professorjotaJ</span>
            </a>
          </div>

          <div className="contact">
            <a href="whatsapp" target="blank">
              <ion-icon name="logo-whatsapp"></ion-icon>
              <span>64-99296-8868</span>
            </a>
          </div>

          <div className="contact">
            <a href="site" target="blank">
              <ion-icon name="pencil-outline"></ion-icon>
              <span>www.site</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a href={"3"} target='blank'>SAIBA MAIS</a>
      </footer>
    </>
  );
}
export default Home;
