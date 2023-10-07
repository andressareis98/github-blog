import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => props.theme["blue"]};

  img {
    margin-right: 12px;
    width: 12px;
    height: 12px;
  }

  span {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 160%;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 130%;
  color: ${(props) => props.theme["base-title"]};
  margin-top: 20px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  margin-top: 8px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    img {
      width: 18px;
      height: 18px;
    }

    span {
      font-size: 16px;
      line-height: 160%;
      color: ${(props) => props.theme["base-span"]};
    }
  }
`;
