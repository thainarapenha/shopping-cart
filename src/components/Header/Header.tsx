import React from "react";
import Logo from "../../assets/img/logo-fireStore.svg";
import Carrinho from "../../assets/img/carrinho.svg";

export const Header: React.FC = () => {
  return (
    <section>
      <div>
        <img src={Logo} alt="logo"/>
      </div>
      <nav>
        <ul>
          <li>INÍCIO</li>
          <li>PRODUTOS</li>
          <li>CONTATO</li>
        </ul>
      </nav>
      <div>
        <img src={Carrinho} alt="icon carrinho"/>
      </div>
    </section>
  );
}