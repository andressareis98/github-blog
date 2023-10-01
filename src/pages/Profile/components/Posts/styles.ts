import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const Post = styled.div`
  border-radius: 10px;
  padding: 32px;
  background-color: ${(props) => props.theme["base-post"]};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  h4 {
    font-size: 20px;
    line-height: 160%;
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 160%;
  color: ${(props) => props.theme["base-text"]};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 20px;
`;
