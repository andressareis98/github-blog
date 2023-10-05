import { useContext } from "react";
import { Content, Post, Container, Title } from "./styles";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PostsContext } from "../../../../contexts/PostsContext";

export function Posts() {
  const { posts } = useContext(PostsContext);

  const date = (date: string) =>
    formatDistanceToNow(new Date(date), { locale: ptBR });

  return (
    <Container>
      {posts.map((post, index) => (
        <Post key={index}>
          <Title>
            <h4>{post.title}</h4>
            <span>Há {date(post.created_at)}</span>
          </Title>
          <Content>{post.body}</Content>
        </Post>
      ))}
    </Container>
  );
}
