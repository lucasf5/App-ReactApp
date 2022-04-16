import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { TemaClaro, TemaEscuro } from "./Components/UI/Temas";


import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import IconeTheme from "./Components/IconeTheme";
import { BtnTema } from "./Components/UI/Btn";

function App() {

    const [botaoTheme, setBotaoTheme] = useState(true);

    function mudarTheme() {
      setBotaoTheme(!botaoTheme);
    }
  
  return (
    <>
      <ThemeProvider theme={botaoTheme ? TemaClaro : TemaEscuro}>
        <GlobalStyle />
        <Cabecalho />
        <BtnTema onClick={mudarTheme}>
          <IconeTheme theme={botaoTheme} />
        </BtnTema>
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
