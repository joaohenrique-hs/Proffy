import React from "react";

import PageHeader from "../../components/PageHeader";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Materia</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars1.githubusercontent.com/u/53794049?s=460&u=04c69018a6137066fea5b67141148fbb9e3c3fda&v=4"
              alt="João Henrique"
            />

            <div>
              <strong>João Henrique</strong>
              <span>Informática</span>
            </div>
          </header>

          <p>
            O trecho padrão original de Lorem Ipsum, usado desde o século XVI,
            está reproduzido abaixo para os interessados.
            <br />
            Seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" de
            Cicero também foram reproduzidas abaixo em sua forma exata original,
            acompanhada das versões para o inglês da tradução feita por H.
            Rackham em 1914.
          </p>

          <footer>
            <p>
              Preço por hora <strong>R$ 50,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
