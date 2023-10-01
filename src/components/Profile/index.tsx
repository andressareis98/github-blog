import { Container } from "./styles";

import { UserInformationCard } from "../UserInformationCard";
import { Posts } from "../Posts";

export function Profile() {
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
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </div>
      <Posts />
    </Container>
  );
}
