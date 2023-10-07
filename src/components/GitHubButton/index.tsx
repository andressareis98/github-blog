import { Container } from "./styles";

import arrow from "../../assets/arrow-up-right-from-square.svg";

interface Props {
  title: string;
  handleViewGitHub: () => void;
}

export function GitHubButton({ title, handleViewGitHub }: Props) {
  return (
    <Container onClick={() => handleViewGitHub()}>
      {title} <img width="12px" height="12px" src={arrow} alt="Explore" />
    </Container>
  );
}
