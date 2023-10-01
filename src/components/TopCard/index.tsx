// Criar uma função que receba o filho para ser renderizado, o filho será um componente

import { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
}

export default function TopCard({ children }: Props) {
  return <Container>{children}</Container>;
}
