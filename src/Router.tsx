import { Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Profile";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );
}
