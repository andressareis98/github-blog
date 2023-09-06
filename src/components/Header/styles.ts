import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100vw;
  height: 296px;
  background-color: ${(props) => props.theme["base-profile"]};
  justify-content: center;

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
