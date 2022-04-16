// import React from "react";
import styled from "styled-components";
import { corPrimaria } from "../UI/Variaveis";

const Titulo = styled.h1`
  color: ${corPrimaria};
  font-size: 2rem;
  padding: 25px 0 10px 0;
`;

const Subtitulo = styled.h2`
  color: ${({theme})=> theme.texto};
  padding: 5px 0 10px 0;
`
// Sobrescrevendo
const SubtituloOrange = styled(Subtitulo)`
  color: orange;
`
const SpanRed = styled.span`
  color: red;
`

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.inside};
  width: 100%;
  height: 50%;
  margin-bottom: 10px;
  padding: 1rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const Titulo = ({ children }) => {
//   return <h1 className="titulo">{children}</h1>;
// };
export { Titulo, Subtitulo, Wrapper, SubtituloOrange, SpanRed };
