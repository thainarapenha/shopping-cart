import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Card, TitleCard, DescriptionCard, PriceCard, InstallmentsCard, FooterCard, BoxInfo, BoxImage } from "./CardProduto.styles";

interface ProductInfo {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  count: number;
}

export const CardProduto: React.FC<ProductInfo> = ({ id, image, title, description, price, count }) => {
  return (
    <Card>
      <BoxInfo key={id}>
        <BoxImage>
          <img src={image} />
        </BoxImage>

        <Box>
          <TitleCard>{title.length < 50 ? title : `${title.slice(0, 50)}...`}</TitleCard>
          <DescriptionCard>{description.length < 50 ? description : `${description.slice(0, 55)}...`}</DescriptionCard>
          <InstallmentsCard>{count}</InstallmentsCard>
          <PriceCard>U$ {(price).toFixed(2)}</PriceCard>
        </Box>

        <FooterCard>
          <Button variant="contained">Adicionar ao carrinho</Button>
        </FooterCard>
      </BoxInfo>
    </Card>
  );
}