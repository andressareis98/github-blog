import { Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { Post } from "./pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/post/:issue" element={<Post />} />
    </Routes>
  );
}
