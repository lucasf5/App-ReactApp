import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import { Icone } from "../UI/Icone";
import { Btn } from "../UI/Btn";
import { Box } from "../UI/Box";
import { Saldo } from "../UI/Saldo";
import { Detalhe } from "../UI/Detalhe";


// Sobrescrevendo o Icone e alterando uma de suas propriedades para uma atribuição especifica
export const IconeComMargin = styled(Icone)`
  margin-top: 2px;
`;

const H2 = styled.h2`
  color: #45d3c0;
  font-size: 1.5rem;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle(!toggleState);
  };

  return (
    <Box>
      <H2>Conta</H2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        <H2>
          Saldo disponível{" "}
          <span>
            <Icone src={dinheiro} alt="Ícone Saldo" />
          </span>
        </H2>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe> 4500,00{" "}
          </Saldo>
        ) : (
          <Saldo>
            <Detalhe>R$</Detalhe> ----{" "}
          </Saldo>
        )}
      </div>

      <Btn onClick={toggleHandler}>
        <IconeComMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Btn>
    </Box>
  );
};

export default Conta;
