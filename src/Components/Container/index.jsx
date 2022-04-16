import React from "react";
import styled from "styled-components";

import {
  Subtitulo,
  SubtituloOrange,
  Titulo,
  Wrapper,
  SpanRed,
} from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato/Extrato";

const Container = styled.div`
  background-color: ${({theme})=> theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.texto};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default () => {
  return (
    <Container>
      <Wrapper>
        <Titulo>Olá, Lucas!</Titulo>
        <Subtitulo>Bem vindo ao seu banco!</Subtitulo>
        <SubtituloOrange as="a" href="#">
          Confira novidades, <SpanRed>clicando aqui.</SpanRed>
        </SubtituloOrange>
      </Wrapper>

      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  );
};
