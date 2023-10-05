import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { Header } from "./components/Header";
import { PostsContextProvider } from "./contexts/PostsContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostsContextProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Router />
        </BrowserRouter>
      </PostsContextProvider>
    </ThemeProvider>
  );
}

export default App;
