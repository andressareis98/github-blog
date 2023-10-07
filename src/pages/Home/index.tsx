import { Container } from "./styles";

import { UserInformationCard } from "./components/UserInformationCard";
import { Posts } from "./components/Posts";
import { ChangeEvent, useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";

export function Home() {
  const { searchPosts, posts } = useContext(PostsContext);

  const handleSearchPosts = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    searchPosts(value);
  };

  return (
    <Container>
      <UserInformationCard />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "72px",
          marginBottom: "42px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "12px",
          }}
        >
          <h3>Publicações</h3>
          <span>{posts.length} publicações</span>
        </div>
        <input
          onChange={handleSearchPosts}
          type="text"
          placeholder="Buscar conteúdo"
        />
      </div>
      <Posts />
    </Container>
  );
}
