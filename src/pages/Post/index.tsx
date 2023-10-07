import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../../interfaces/posts";
import { api } from "../../lib/axios";
import { Container, Body } from "./styles";
import { PostHeader } from "./PostHeader";

export function Post() {
  const { issue } = useParams();

  const [post, setPost] = useState<IPost>();

  const fetchPost = useCallback(async () => {
    try {
      const response = await api.get(
        `repos/andressareis98/github-blog/issues/${issue}`
      );

      setPost(response.data);
    } catch (error) {
      console.error("Erro ao buscar o post:", error);
    }
  }, [issue]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return (
    <Container>
      <PostHeader post={post} />
      <Body>
        <span>{post?.body}</span>
      </Body>
    </Container>
  );
}
