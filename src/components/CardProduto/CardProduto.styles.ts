import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Card = styled("div")({
  width: "300px",
  height: "500px",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  alignItems: "center",
  margin: "16px",
  borderRadius: "5px",
  background: "#FFFFFF",
  // border: "1px solid red",
});

export const BoxInfo = styled("div")({
  width: "80%",
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  padding: "16px",
  "& img": {
    width: "100%",
    maxWidth: "200px",
    height: "250px",
    // border: "1px solid red",
  },
  // border: "1px solid blue",
});

export const BoxImage = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  // border: "1px solid blue",
});

export const TitleCard = styled(Typography)({
  fontStyle: "normal",
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: "29px",
  letterSpacing: 0,
  color: "#000000",
});

export const DescriptionCard = styled(Typography)({
  width: "100%",
  height: "34px",
  fontStyle: "normal",
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: 0,
  color: "#272727",
  lineHeight: "17px",
  margin: "10px 0",
  // border: "1px solid blue",
});

export const PriceCard = styled(Typography)({
  fontStyle: "normal",
  fontSize: "20px",
  fontWeight: 500,
  letterSpacing: 0,
  color: "#000000",
  lineHeight: "29px",
});

export const InstallmentsCard = styled(Typography)({
  fontStyle: "normal",
  fontSize: "12px",
  fontWeight: 200,
  letterSpacing: 0,
  color: "#000000",
});

export const FooterCard = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  // border: "1px solid red",
});