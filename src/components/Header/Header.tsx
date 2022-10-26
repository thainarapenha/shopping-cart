import React from "react";
import Carrinho from "../../assets/img/carrinho.svg";
import iconUser from "../../assets/img/iconUser.svg";
import Logo from "../../assets/img/logo-fireStore.svg";
import { Container, NavMenu, ContainerLogo, SectionMenu, ContainerCarrinho, ContainerUser, Items } from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <ContainerLogo
        src={Logo}
        alt="Logo"
      />

      <SectionMenu>
        <NavMenu>
          <Items>INÍCIO</Items>
          <Items>PRODUTOS</Items>
          <Items>CONTATO</Items>
        </NavMenu>

        <ContainerCarrinho
          src={Carrinho}
          alt="Logo"
        />

        <ContainerUser
          src={iconUser}
          alt="Logo"
        />
      </SectionMenu>
    </Container>
  );
}