import React from "react";
import { Box } from "@mui/system";
import { Card,TitleCard, DescriptionCard, PriceCard, InstallmentsCard, FooterCard, BoxInfo  } from "./CardProduto.styles";
import imagem from "../../assets/img/image4.svg";
import { Button } from "@mui/material";

export const CardProduto: React.FC = () => {
  return (
    <Card>
      <BoxInfo>
        <Box>
          <img src={imagem}/>
        </Box>

        <Box>
          <TitleCard>Nome do produto</TitleCard>
          <DescriptionCard>Description</DescriptionCard>
          <PriceCard>Price</PriceCard>
          <InstallmentsCard>Parcelado</InstallmentsCard>
        </Box>

        <FooterCard>
          <Box>
            color
          </Box>

          <Box>
            <Button
              variant="contained"
              >
              Adicionar ao carrinho
            </Button>
          </Box>
        </FooterCard>
      </BoxInfo>
    </Card>
  );
}