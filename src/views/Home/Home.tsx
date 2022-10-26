import React, { useEffect, useState } from "react";
import { MainContainer, BoxProdutos } from "./Home.styles";
import { CardProduto } from "../../components/CardProduto";
import { conexaoAPI } from "../../services/conexaoAPI";

interface ProductInfo {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  count: number;
}

export const Home: React.FC = () => {
  const [data, setData] = useState<ProductInfo[]>([]);

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
          <CardProduto id={item.id} title={item.title} description={item.description} image={item.image} price={item.price} count={item.count}/>
        )}
      </BoxProdutos>
    </MainContainer>
  );
}