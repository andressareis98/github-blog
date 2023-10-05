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

import { User } from "../../../../interfaces/user";

import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

export function UserInformationCard() {
  const [user, setUser] = useState<User>();

  const getUser = useCallback(async () => {
    const response = await api.get("/users/andressareis98");
    setUser(response.data);
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const handleViewGitHub = () => {
    window.open(user?.html_url, "_blank");
  };

  return (
    <TopCard>
      <BodyCard>
        <Photo src={user?.avatar_url} />
        <Info>
          <Title>
            <Name>{user?.name}</Name>
            <GitHubButton onClick={() => handleViewGitHub()}>
              github{" "}
              <img width="12px" height="12px" src={arrow} alt="Explore" />
            </GitHubButton>
          </Title>
          <Bio>{user?.bio}</Bio>
          <SocialInfos>
            <span>
              <img src={github} alt="" />
              {user?.login}
            </span>
            <span>
              <img src={building} alt="" />
              {user?.company}
            </span>
            <span>
              <img src={usergroup} alt="" />
              {user?.followers} seguidores
            </span>
          </SocialInfos>
        </Info>
      </BodyCard>
    </TopCard>
  );
}
