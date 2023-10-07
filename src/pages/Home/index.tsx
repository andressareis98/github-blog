import { Container, PublicationsTitle, SearchInput } from "./styles";

import { UserInformationCard } from "./components/UserInformationCard";
import { Posts } from "./components/Posts";
import { ChangeEvent, useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";

export const Home = () => {
  const { searchPosts, posts } = useContext(PostsContext);

  const handleSearchPosts = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    searchPosts(value);
  };

  return (
    <Container>
      <UserInformationCard />
      <PublicationsTitle>
        <h3>Publicações</h3>
        <span>{posts.length} publicações</span>
      </PublicationsTitle>
      <SearchInput
        onChange={handleSearchPosts}
        type="text"
        placeholder="Buscar conteúdo"
      />
      <Posts />
    </Container>
  );
};
