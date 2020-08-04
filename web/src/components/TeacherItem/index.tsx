import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./style.css";

function TeacherItem() {
  return (
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
        O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está
        reproduzido abaixo para os interessados.
        <br />
        Seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" de Cicero
        também foram reproduzidas abaixo em sua forma exata original,
        acompanhada das versões para o inglês da tradução feita por H. Rackham
        em 1914.
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
  );
}

export default TeacherItem;
