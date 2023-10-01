import styled from "styled-components";

export const BodyCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const Photo = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 130%;
  color: ${(props) => props.theme["base-title"]};
`;

export const GitHubButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  line-height: 160%;
  color: ${(props) => props.theme["blue"]};
`;

export const Bio = styled.p`
  font-size: 16px;
  line-height: 160%;
  color: ${(props) => props.theme["base-text"]};
`;

export const SocialInfos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 34px;
  margin-top: 24px;

  span {
    font-size: 16px;
    white-space: nowrap;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};

    img {
      width: 18px;
      height: 18px;
      margin-right: 8px;
    }
  }
`;
