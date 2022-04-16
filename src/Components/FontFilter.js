import React from "react";
import styled from "styled-components";

const TituloRestaurante = styled.h3`
  color: red;
`;
const TituloSaude = styled.h3`
  color: green;
`;
const TituloUtilidades = styled.h3`
  color: blue;
`;
const TituloTransporte = styled.h3`
  color: orange;
`;
const TituloDefault = styled.h3`
  color: black;
`;

export default (type) => {

  const Titulo = {
    Restaurante: <span>{<TituloRestaurante>{type}</TituloRestaurante>}</span>,
    Saude: <span>{<TituloSaude>{type}</TituloSaude>}</span>,
    Utilidades: <span>{<TituloUtilidades>{type}</TituloUtilidades>}</span>,
    Transporte: <span>{<TituloTransporte>{type}</TituloTransporte>}</span>,
    default: <span>{<TituloDefault>{type}</TituloDefault>}</span>,
  };

  return Titulo[type] || Titulo["default"];
};
