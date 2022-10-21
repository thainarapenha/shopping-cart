import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: "80px",
});

export const SectionMenu = styled("section")({
  width: "500px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingRight: "50px",
});

export const ContainerLogo = styled ("img")({
  width: "100%",
  maxWidth: "100px",
  paddingLeft: "50px",
});

export const NavMenu = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "360px",
});

export const ContainerCarrinho = styled ("img")({
  width: "100%",
  maxWidth: "38px",
});

export const ContainerUser = styled ("img")({
  width: "100%",
  maxWidth: "60px",
});

export const Items = styled (Typography)({
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "19px",
});