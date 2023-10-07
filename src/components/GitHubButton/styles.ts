import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  line-height: 160%;
  color: ${(props) => props.theme["blue"]};

  &:hover {
    text-decoration: underline;
  }
`;
