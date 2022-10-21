import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Card = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  alignItems: "center",
  width: "300px",
  height: "400px",
  borderRadius: "5px",
  background: "#FFFFFF",
  margin: "16px",
  // border: "1px solid red",
  "& img": {
    width: "100%",
    maxWidth: "250px",
    // border: "1px solid red",
  },
});

export const BoxInfo = styled("div")({
  width: "90%",
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  padding: "16px",
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
  // width: "332px",
  // height: "34px",
  fontStyle: "normal",
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: 0,
  color: "#272727",
  lineHeight: "17px",
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
  justifyContent: "space-between",
  alignItems: "center",
  // border: "1px solid red",
});