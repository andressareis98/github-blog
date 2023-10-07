import { IPost } from "../../../interfaces/posts";

import { useNavigate } from "react-router-dom";

import chevronLeft from "../../../assets/chevron-left.svg";
import gitHub from "../../../assets/github-brands.svg";
import calendar from "../../../assets/calendar-day.svg";
import comment from "../../../assets/comment.svg";

import { Buttons, BackButton, Title, Infos } from "./styles";

import { TopCard } from "../../../components/TopCard";
import { GitHubButton } from "../../../components/GitHubButton";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Props {
  post: IPost | undefined;
}

export const PostHeader = ({ post }: Props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleViewGitHub = () => {
    window.open(post?.html_url, "_blank");
  };

  const date = post?.created_at
    ? formatDistanceToNow(new Date(post?.created_at), {
        locale: ptBR,
      })
    : "";

  const infosArray = [
    {
      icon: gitHub,
      text: post?.user.login,
    },
    {
      icon: calendar,
      text: `Há ${date}`,
    },
    {
      icon: comment,
      text: post?.comments,
    },
  ];

  return (
    <TopCard>
      <Buttons onClick={() => handleBack()}>
        <BackButton>
          <img src={chevronLeft} aria-hidden />
          voltar
        </BackButton>
        <GitHubButton
          title="ver no github"
          handleViewGitHub={handleViewGitHub}
        />
      </Buttons>
      <Title>{post?.title}</Title>
      <Infos>
        {infosArray.map((info) => (
          <div>
            <img src={info.icon} aria-hidden />
            <span>{info.text}</span>
          </div>
        ))}
      </Infos>
    </TopCard>
  );
};
