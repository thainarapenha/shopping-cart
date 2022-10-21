import React from "react";
import { MainContainer, BoxProdutos } from "./Home.styles";
// import { Card } from "../../components/CardProduto/CardProduto.styles";
import { CardProduto } from "../../components/CardProduto";

export const Home: React.FC = () => {
  return (
    <MainContainer>
      <BoxProdutos>
        <CardProduto/>
      </BoxProdutos>
    </MainContainer>
  );
}