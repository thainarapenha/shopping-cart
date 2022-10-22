import React, { useEffect, useState } from "react";
import { MainContainer, BoxProdutos } from "./Home.styles";
import { CardProduto } from "../../components/CardProduto";
import { conexaoAPI } from "../../services/conexaoAPI";

export const Home: React.FC = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await conexaoAPI.get("/products");
    setData(response.data)
    console.log(response?.data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <MainContainer>
      <BoxProdutos>
        {data?.map(item =>
          <CardProduto id={0} title={""} description={""} image={""} price={100}/>
        )}
      </BoxProdutos>
    </MainContainer>
  );
}