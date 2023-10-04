import { useCallback, useState, useEffect } from "react";
import { Content, Post, Container, Title } from "./styles";

import { IPost } from "../../../../interfaces/posts";

import { api } from "../../../../lib/axios";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = useCallback(async (query?: string) => {
    const queryParams = query ? query : "";
    const response = await api.get(
      `https://api.github.com/search/issues?q=repo:andressareis98/github-blog ${queryParams} is:issue`
    );
    setPosts(response.data.items);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

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
