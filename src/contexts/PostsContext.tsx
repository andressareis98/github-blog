import {
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { IPost } from "../interfaces/posts";
import { api } from "../lib/axios";

interface PostsContextType {
  posts: IPost[];
  searchPosts: (query: string) => void;
}

export const PostsContext = createContext<PostsContextType>(
  {} as PostsContextType
);

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsContextProvider = ({ children }: PostsProviderProps) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = useCallback(async (query?: string) => {
    try {
      const queryParams = query ? query : "";
      const response = await api.get("search/issues", {
        params: {
          q: `repo:andressareis98/github-blog ${queryParams} is:issue`,
        },
      });

      setPosts(response.data.items);
    } catch (error) {
      console.error("Erro ao buscar os posts:", error);
    }
  }, []);

  const searchPosts = (query: string) => {
    fetchPosts(query);
  };

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <PostsContext.Provider value={{ posts, searchPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
