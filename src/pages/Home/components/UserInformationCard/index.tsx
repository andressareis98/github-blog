import { TopCard } from "../../../../components/TopCard";
import { BodyCard, Info, Photo, Title, Name, Bio, SocialInfos } from "./styles";

import github from "../../../../assets/github-brands.svg";
import building from "../../../../assets/building.svg";
import usergroup from "../../../../assets/user-group.svg";

import { IUser } from "../../../../interfaces/user";

import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { GitHubButton } from "../../../../components/GitHubButton";

export const UserInformationCard = () => {
  const [user, setUser] = useState<IUser>();

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
            <GitHubButton
              title="github"
              handleViewGitHub={() => handleViewGitHub()}
            />
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
};
