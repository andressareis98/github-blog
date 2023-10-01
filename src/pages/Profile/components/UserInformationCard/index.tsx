import TopCard from "../../../../components/TopCard";
import {
  BodyCard,
  Info,
  Photo,
  Title,
  Name,
  GitHubButton,
  Bio,
  SocialInfos,
} from "./styles";

import arrow from "../../../../assets/arrow-up-right-from-square.svg";
import github from "../../../../assets/github-brands.svg";
import building from "../../../../assets/building.svg";
import usergroup from "../../../../assets/user-group.svg";

export function UserInformationCard() {
  return (
    <TopCard>
      <BodyCard>
        <Photo src="https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-6/305385992_197855145920249_1799303807612572572_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Koc9TNanAPEAX96zNFJ&_nc_ht=scontent-gru2-1.xx&oh=00_AfCWRasiaSu2hCYIX__MEZM6vJdR-AGjDinWUOyIASmlbA&oe=6512AB50" />
        <Info>
          <Title>
            <Name>Andressa Reis Araujo</Name>
            <GitHubButton>
              github{" "}
              <img width="12px" height="12px" src={arrow} alt="Explore" />
            </GitHubButton>
          </Title>
          <Bio>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </Bio>
          <SocialInfos>
            <span>
              <img src={github} alt="" />
              andessara
            </span>
            <span>
              <img src={building} alt="" />
              Itaú Unibanco
            </span>
            <span>
              <img src={usergroup} alt="" />2 seguidores
            </span>
          </SocialInfos>
        </Info>
      </BodyCard>
    </TopCard>
  );
}
