import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  padding: 0 20%;
`;

export const PublicationsTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 72px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 1px solid;
  border-color: ${(props) => props.theme["base-border"]};
  padding: 16px 12px;
  background-color: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};
  margin-top: 12px;
  margin-bottom: 48px;

  &:focus {
    border-color: ${(props) => props.theme["blue"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;
