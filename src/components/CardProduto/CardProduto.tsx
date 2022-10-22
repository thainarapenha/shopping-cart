import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Card, TitleCard, DescriptionCard, PriceCard, InstallmentsCard, FooterCard, BoxInfo } from "./CardProduto.styles";

interface ProductInfo {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

export const CardProduto: React.FC<ProductInfo> = ({ id, image, title, description, price, }) => {
  return (
    <Card>
      <BoxInfo key={id}>
        <Box>
          <img src={image} />
        </Box>

        <Box>
          <TitleCard>{title}</TitleCard>
          <DescriptionCard>{description}</DescriptionCard>
          <PriceCard>{price}</PriceCard>
          {/* <InstallmentsCard>Parcelado</InstallmentsCard> */}
        </Box>

        <FooterCard>
          <Button variant="contained">Adicionar ao carrinho</Button>
        </FooterCard>
      </BoxInfo>
    </Card>
  );
}