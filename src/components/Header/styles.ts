import styled from "styled-components";
import cover from "../../assets/cover.png";

export const Container = styled.header`
  display: flex;
  width: 100vw;
  height: 296px;
  background-image: url(${cover});
  background-position: center;
  background-size: cover;
  justify-content: center;
  border: 1px solid red h1 {
    margin-top: 64px;
  }

  h1 {
    margin-top: 64px;
  }
`;

export const LeftEffect = styled.img`
  position: absolute;
  left: 0;
  width: 409px;
  height: 188px;
  margin-top: 70px;
`;

export const RightEffect = styled.img`
  position: absolute;
  right: 0;
  width: 371px;
  height: 236px;
  margin-top: 30px;
`;
