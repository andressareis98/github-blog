import { Container, LeftEffect, RightEffect } from "./styles";
import logoImg from "../../assets/logo.svg";
import effectLeft from "../../assets/effect-left.svg";
import effectRight from "../../assets/effect-right.svg";

export const Header = () => {
  return (
    <Container>
      <LeftEffect src={effectLeft} alt="" />
      <h1>
        <img src={logoImg} alt="GitHub Blog" />
      </h1>
      <RightEffect src={effectRight} alt="" />
    </Container>
  );
};
